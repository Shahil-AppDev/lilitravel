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

  app.post('/api/auth/logout', (_req, res) => {
    res.clearCookie('token');
    res.json({ message: 'Logged out' });
  });

  app.get('/api/auth/me', authenticateToken, (req, res) => {
    const user = db.prepare('SELECT id, email, name, bio, avatar_url, role FROM users WHERE id = ?').get((req as any).user.id);
    res.json({ user });
  });

  // Destinations
  app.get('/api/destinations', async (_req, res) => {
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
  app.get('/api/map/destinations', async (_req, res) => {
    const { mapDestinations } = await import('./src/data/mapDestinations.ts');
    res.json(mapDestinations);
  });

  // Guides
  app.get('/api/guides', (_req, res) => {
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
  app.get('/api/excursions', (_req, res) => {
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
  app.get('/api/stays', (_req, res) => {
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

  app.get('/api/trips/trending/list', (_req, res) => {
    const trips = db.prepare(`
      SELECT * FROM generated_trips 
      ORDER BY (shares * 2 + views) DESC 
      LIMIT 10
    `).all();
    res.json(trips);
  });

  // Travel Planner Routes
  app.post('/api/planner/generate', async (req, res) => {
    const { destination, duration, budget, travelStyle, departureCity } = req.body;
    
    const slug = `${destination.toLowerCase().replace(/\s+/g, '-')}-${duration}days-${travelStyle.toLowerCase().replace(/\s+/g, '-')}`;
    
    const existing = db.prepare('SELECT * FROM planned_trips WHERE slug = ?').get(slug);
    if (existing) {
      return res.json(existing);
    }

    const { generateTravelPlan } = await import('./src/lib/travelPlanner.ts');
    const plan = await generateTravelPlan({ destination, duration, budget, travelStyle, departureCity });

    const result = db.prepare(`
      INSERT INTO planned_trips (slug, destination, duration, budget, travel_style, departure_city, generated_plan, map_points)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      slug,
      destination,
      duration,
      budget,
      travelStyle,
      departureCity || null,
      JSON.stringify(plan),
      JSON.stringify(plan.mapPoints)
    );

    const plannedTrip = db.prepare('SELECT * FROM planned_trips WHERE id = ?').get(result.lastInsertRowid);
    res.json(plannedTrip);
  });

  app.get('/api/planner/:slug', (req, res) => {
    const { slug } = req.params;
    const trip = db.prepare('SELECT * FROM planned_trips WHERE slug = ?').get(slug);
    
    if (!trip) {
      return res.status(404).json({ error: 'Trip not found' });
    }

    db.prepare('UPDATE planned_trips SET views = views + 1 WHERE slug = ?').run(slug);
    
    res.json(trip);
  });

  app.post('/api/planner/:slug/share', (req, res) => {
    const { slug } = req.params;
    db.prepare('UPDATE planned_trips SET shares = shares + 1 WHERE slug = ?').run(slug);
    res.json({ success: true });
  });

  app.get('/api/planner/trending/list', (_req, res) => {
    const trips = db.prepare(`
      SELECT * FROM planned_trips 
      ORDER BY (shares * 2 + views) DESC 
      LIMIT 10
    `).all();
    res.json(trips);
  });

  // Property Routes
  app.get('/api/properties', (req, res) => {
    const { location, minPrice, maxPrice, guests } = req.query;
    let query = 'SELECT * FROM properties WHERE status = ?';
    const params: any[] = ['active'];

    if (location) {
      query += ' AND location LIKE ?';
      params.push(`%${location}%`);
    }
    if (minPrice) {
      query += ' AND price_per_night >= ?';
      params.push(minPrice);
    }
    if (maxPrice) {
      query += ' AND price_per_night <= ?';
      params.push(maxPrice);
    }
    if (guests) {
      query += ' AND max_guests >= ?';
      params.push(guests);
    }

    const properties = db.prepare(query).all(...params);
    res.json(properties);
  });

  app.get('/api/properties/:id', (req, res) => {
    const { id } = req.params;
    const property = db.prepare('SELECT * FROM properties WHERE id = ?').get(id);
    
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }

    res.json(property);
  });

  app.post('/api/properties', authenticateToken, (req, res) => {
    const { title, description, location, address, propertyType, bedrooms, bathrooms, maxGuests, pricePerNight, amenities, images, latitude, longitude } = req.body;
    
    const result = db.prepare(`
      INSERT INTO properties (user_id, title, description, location, address, property_type, bedrooms, bathrooms, max_guests, price_per_night, amenities, images, latitude, longitude)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run((req as any).user.id, title, description, location, address, propertyType, bedrooms, bathrooms, maxGuests, pricePerNight, JSON.stringify(amenities), JSON.stringify(images), latitude, longitude);

    res.json({ id: result.lastInsertRowid });
  });

  // Calendar & Availability Routes
  app.get('/api/properties/:id/availability', (req, res) => {
    const { id } = req.params;
    const { startDate, endDate } = req.query;

    const blocks = db.prepare(`
      SELECT * FROM calendar_blocks 
      WHERE property_id = ? 
      AND ((start_date BETWEEN ? AND ?) OR (end_date BETWEEN ? AND ?) OR (start_date <= ? AND end_date >= ?))
    `).all(id, startDate, endDate, startDate, endDate, startDate, endDate);

    res.json(blocks);
  });

  app.post('/api/properties/:id/calendar-block', authenticateToken, (req, res) => {
    const { id } = req.params;
    const { startDate, endDate, blockType, notes } = req.body;

    const result = db.prepare(`
      INSERT INTO calendar_blocks (property_id, start_date, end_date, block_type, source, notes)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(id, startDate, endDate, blockType, 'manual', notes);

    res.json({ id: result.lastInsertRowid });
  });

  // Booking Routes
  app.post('/api/bookings', async (req, res) => {
    const { propertyId, guestName, guestEmail, guestPhone, checkIn, checkOut, numGuests, specialRequests } = req.body;

    const property: any = db.prepare('SELECT * FROM properties WHERE id = ?').get(propertyId);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }

    const conflicts = db.prepare(`
      SELECT * FROM calendar_blocks 
      WHERE property_id = ? 
      AND ((start_date BETWEEN ? AND ?) OR (end_date BETWEEN ? AND ?) OR (start_date <= ? AND end_date >= ?))
    `).all(propertyId, checkIn, checkOut, checkIn, checkOut, checkIn, checkOut);

    if (conflicts.length > 0) {
      return res.status(400).json({ error: 'Dates not available' });
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const nights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24));
    const totalPrice = nights * property.price_per_night;

    const result = db.prepare(`
      INSERT INTO bookings (property_id, user_id, guest_name, guest_email, guest_phone, check_in, check_out, num_guests, total_price, special_requests)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(propertyId, (req as any).user?.id || null, guestName, guestEmail, guestPhone, checkIn, checkOut, numGuests, totalPrice, specialRequests);

    const bookingId = result.lastInsertRowid;

    db.prepare(`
      INSERT INTO calendar_blocks (property_id, start_date, end_date, block_type, source, booking_id)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(propertyId, checkIn, checkOut, 'booking', 'direct', bookingId);

    res.json({ id: bookingId, totalPrice, nights });
  });

  app.get('/api/bookings/:id', (req, res) => {
    const { id } = req.params;
    const booking = db.prepare('SELECT * FROM bookings WHERE id = ?').get(id);
    
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    res.json(booking);
  });

  app.patch('/api/bookings/:id/status', authenticateToken, (req, res) => {
    const { id } = req.params;
    const { status, paymentStatus, paymentIntentId } = req.body;

    db.prepare(`
      UPDATE bookings 
      SET status = ?, payment_status = ?, payment_intent_id = ?
      WHERE id = ?
    `).run(status, paymentStatus, paymentIntentId, id);

    res.json({ success: true });
  });

  // iCal Routes
  app.post('/api/properties/:id/ical-import', authenticateToken, async (req, res) => {
    const { id } = req.params;
    const { sourceName, sourceUrl } = req.body;

    try {
      const { fetchAndParseICal } = await import('./src/lib/icalParser.ts');
      const events = await fetchAndParseICal(sourceUrl);

      const sourceResult = db.prepare(`
        INSERT INTO ical_sources (property_id, source_name, source_url, last_sync, sync_status)
        VALUES (?, ?, ?, datetime('now'), 'success')
      `).run(id, sourceName, sourceUrl);

      events.forEach(event => {
        db.prepare(`
          INSERT INTO calendar_blocks (property_id, start_date, end_date, block_type, source, notes)
          VALUES (?, ?, ?, ?, ?, ?)
        `).run(id, event.startDate.toISOString().split('T')[0], event.endDate.toISOString().split('T')[0], 'external', sourceName, event.summary);
      });

      res.json({ success: true, eventsImported: events.length, sourceId: sourceResult.lastInsertRowid });
    } catch (error: any) {
      db.prepare(`
        INSERT INTO ical_sources (property_id, source_name, source_url, last_sync, sync_status, sync_error)
        VALUES (?, ?, ?, datetime('now'), 'error', ?)
      `).run(id, sourceName, sourceUrl, error.message);

      res.status(500).json({ error: 'Failed to import iCal', message: error.message });
    }
  });

  app.get('/api/ical/property/:id', async (req, res) => {
    const { id } = req.params;
    
    const property: any = db.prepare('SELECT * FROM properties WHERE id = ?').get(id);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }

    const bookings = db.prepare(`
      SELECT id, guest_name, check_in, check_out 
      FROM bookings 
      WHERE property_id = ? AND status IN ('confirmed', 'pending')
    `).all(id);

    const { generateICalendar } = await import('./src/lib/icalParser.ts');
    const icalData = generateICalendar(property.title, bookings.map((b: any) => ({
      id: b.id,
      guestName: b.guest_name,
      checkIn: b.check_in,
      checkOut: b.check_out,
    })));

    res.setHeader('Content-Type', 'text/calendar');
    res.setHeader('Content-Disposition', `attachment; filename="property-${id}.ics"`);
    res.send(icalData);
  });

  app.post('/api/properties/:id/ical-sync', authenticateToken, async (req, res) => {
    const { id } = req.params;

    const sources: any[] = db.prepare('SELECT * FROM ical_sources WHERE property_id = ?').all(id);

    let totalImported = 0;
    const results = [];

    for (const source of sources) {
      try {
        const { fetchAndParseICal } = await import('./src/lib/icalParser.ts');
        const events = await fetchAndParseICal(source.source_url);

        db.prepare('DELETE FROM calendar_blocks WHERE property_id = ? AND source = ?').run(id, source.source_name);

        events.forEach(event => {
          db.prepare(`
            INSERT INTO calendar_blocks (property_id, start_date, end_date, block_type, source, notes)
            VALUES (?, ?, ?, ?, ?, ?)
          `).run(id, event.startDate.toISOString().split('T')[0], event.endDate.toISOString().split('T')[0], 'external', source.source_name, event.summary);
        });

        db.prepare(`
          UPDATE ical_sources 
          SET last_sync = datetime('now'), sync_status = 'success', sync_error = NULL
          WHERE id = ?
        `).run(source.id);

        totalImported += events.length;
        results.push({ source: source.source_name, status: 'success', events: events.length });
      } catch (error: any) {
        db.prepare(`
          UPDATE ical_sources 
          SET last_sync = datetime('now'), sync_status = 'error', sync_error = ?
          WHERE id = ?
        `).run(error.message, source.id);

        results.push({ source: source.source_name, status: 'error', error: error.message });
      }
    }

    res.json({ totalImported, results });
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
