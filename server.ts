import bcrypt from 'bcryptjs';
import cookieParser from 'cookie-parser';
import express from 'express';
import fs from 'fs';
import jwt from 'jsonwebtoken';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import db, { initDb } from './db/index.ts';

const JWT_SECRET = process.env.JWT_SECRET || 'lili-travel-secret-key';
const PORT = 3000;

// Initialize DB
initDb();

async function startServer() {
  const app = express();

  app.use(express.json());
  app.use(cookieParser());

  // Serve uploaded images (mock implementation for MVP)
  // In a real app, use S3 or similar. Here we'll just serve from a public folder if needed,
  // but for MVP we might rely on external URLs or base64 for simplicity, or a dedicated uploads folder.
  const uploadsDir = path.resolve('uploads');
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
  }
  app.use('/uploads', express.static(uploadsDir));

  // --- API Routes ---

  // Auth Middleware
  const authenticateToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  };

  // Auth Routes
  app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email) as any;

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '24h' });
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
    res.json({ user: { id: user.id, email: user.email, name: user.name, role: user.role } });
  });

  app.post('/api/auth/logout', (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'Logged out' });
  });

  app.get('/api/auth/me', authenticateToken, (req, res) => {
    const user = db.prepare('SELECT id, email, name, bio, avatar_url, role FROM users WHERE id = ?').get((req as any).user.id);
    res.json({ user });
  });

  // Destinations
  app.get('/api/destinations', async (req, res) => {
    // For MVP, we are transitioning to a file-based content system for richer data.
    // We will merge DB data (if any user created ones) with our static curated content.
    
    // Dynamic import to avoid build issues if strictly separating server/client
    const { allDestinations } = await import('./src/data/destinations/index.ts');
    
    // Transform static data to match the simple API shape expected by the frontend list view
    const staticDestinations = allDestinations.map(d => ({
      id: d.id,
      slug: d.slug,
      title: d.name,
      description: d.heroDescription,
      location: d.region,
      cover_image_url: d.heroImage,
      // Add extra fields that might be useful
      region: d.region
    }));

    // Get DB destinations
    const dbDestinations = db.prepare('SELECT * FROM destinations ORDER BY created_at DESC').all();
    
    // Combine them (prefer static for now as they are high quality)
    res.json([...staticDestinations, ...dbDestinations]);
  });

  app.get('/api/destinations/:slug', async (req, res) => {
    const { slug } = req.params;
    const { getDestinationBySlug } = await import('./src/data/destinations/index.ts');
    
    const destination = getDestinationBySlug(slug);
    
    if (destination) {
      res.json(destination);
    } else {
      // Fallback to DB lookup if we had slugs there (DB currently uses ID, but let's be safe)
      res.status(404).json({ error: 'Destination not found' });
    }
  });

  app.post('/api/destinations', authenticateToken, (req, res) => {
    const { title, description, location, tips, cover_image_url } = req.body;
    const result = db.prepare(`
      INSERT INTO destinations (user_id, title, description, location, tips, cover_image_url)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run((req as any).user.id, title, description, location, tips, cover_image_url);
    res.json({ id: result.lastInsertRowid });
  });

  // Map Destinations
  app.get('/api/map/destinations', async (req, res) => {
    const { mapDestinations } = await import('./src/data/mapDestinations.ts');
    res.json(mapDestinations);
  });

  // Guides
  app.get('/api/guides', (req, res) => {
    const guides = db.prepare('SELECT * FROM guides ORDER BY created_at DESC').all();
    res.json(guides);
  });

  app.post('/api/guides', authenticateToken, (req, res) => {
    const { title, description, price, cover_image_url, download_url } = req.body;
    const result = db.prepare(`
      INSERT INTO guides (user_id, title, description, price, cover_image_url, download_url)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run((req as any).user.id, title, description, price, cover_image_url, download_url);
    res.json({ id: result.lastInsertRowid });
  });

  // Excursions
  app.get('/api/excursions', (req, res) => {
    const excursions = db.prepare('SELECT * FROM excursions ORDER BY created_at DESC').all();
    res.json(excursions);
  });

  app.post('/api/excursions', authenticateToken, (req, res) => {
    const { title, description, location, price, affiliate_link, image_url } = req.body;
    const result = db.prepare(`
      INSERT INTO excursions (user_id, title, description, location, price, affiliate_link, image_url)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run((req as any).user.id, title, description, location, price, affiliate_link, image_url);
    res.json({ id: result.lastInsertRowid });
  });

  // Stays
  app.get('/api/stays', (req, res) => {
    const stays = db.prepare('SELECT * FROM stays ORDER BY created_at DESC').all();
    res.json(stays);
  });

  app.post('/api/stays', authenticateToken, (req, res) => {
    const { title, location, price_range, affiliate_link, photo_url } = req.body;
    const result = db.prepare(`
      INSERT INTO stays (user_id, title, location, price_range, affiliate_link, photo_url)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run((req as any).user.id, title, location, price_range, affiliate_link, photo_url);
    res.json({ id: result.lastInsertRowid });
  });

  // Affiliate Stats (Mock)
  app.get('/api/affiliate/stats', authenticateToken, (req, res) => {
    const stats = db.prepare(`
      SELECT 
        COUNT(*) as total_links, 
        SUM(clicks) as total_clicks, 
        SUM(conversions) as total_conversions, 
        SUM(revenue) as total_revenue 
      FROM affiliate_links 
      WHERE user_id = ?
    `).get((req as any).user.id);
    res.json(stats || { total_links: 0, total_clicks: 0, total_conversions: 0, total_revenue: 0 });
  });

  // Trip Generator Routes
  app.post('/api/trips/generate', async (req, res) => {
    const { destination, travelStyle, duration, budget } = req.body;
    
    // Generate slug
    const slug = `${destination.toLowerCase().replace(/\s+/g, '-')}-${travelStyle.toLowerCase()}-${duration.replace(/\s+/g, '')}`;
    
    // Check if trip already exists
    const existing = db.prepare('SELECT * FROM generated_trips WHERE slug = ?').get(slug);
    if (existing) {
      return res.json(existing);
    }

    // Generate AI content
    const { generateTripContent } = await import('./src/lib/tripGenerator.ts');
    const tripContent = await generateTripContent({ destination, travelStyle, duration, budget });

    // Store in database
    const result = db.prepare(`
      INSERT INTO generated_trips (slug, destination, travel_style, duration, budget, hook, script, caption, hashtags, itinerary, excursions, stays)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      slug,
      destination,
      travelStyle,
      duration,
      budget,
      tripContent.hook,
      tripContent.script,
      tripContent.caption,
      tripContent.hashtags,
      JSON.stringify(tripContent.itinerary),
      JSON.stringify(tripContent.excursions),
      JSON.stringify(tripContent.stays)
    );

    const trip = db.prepare('SELECT * FROM generated_trips WHERE id = ?').get(result.lastInsertRowid);
    res.json(trip);
  });

  app.get('/api/trips/:slug', (req, res) => {
    const { slug } = req.params;
    const trip = db.prepare('SELECT * FROM generated_trips WHERE slug = ?').get(slug);
    
    if (!trip) {
      return res.status(404).json({ error: 'Trip not found' });
    }

    // Increment views
    db.prepare('UPDATE generated_trips SET views = views + 1 WHERE slug = ?').run(slug);
    
    res.json(trip);
  });

  app.post('/api/trips/:slug/share', (req, res) => {
    const { slug } = req.params;
    db.prepare('UPDATE generated_trips SET shares = shares + 1 WHERE slug = ?').run(slug);
    res.json({ success: true });
  });

  app.get('/api/trips/trending/list', (req, res) => {
    const trips = db.prepare(`
      SELECT * FROM generated_trips 
      ORDER BY (shares * 2 + views) DESC 
      LIMIT 10
    `).all();
    res.json(trips);
  });


  // --- Vite Middleware ---
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving (if built)
    // app.use(express.static('dist'));
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
