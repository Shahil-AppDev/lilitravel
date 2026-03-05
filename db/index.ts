import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
import bcrypt from 'bcryptjs';

const dbPath = path.resolve('lili_travel.db');
const db = new Database(dbPath);

// Enable foreign keys
db.pragma('foreign_keys = ON');

export function initDb() {
  console.log('Initializing database...');

  const schema = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      name TEXT,
      bio TEXT,
      avatar_url TEXT,
      role TEXT DEFAULT 'creator',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS destinations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      title TEXT NOT NULL,
      description TEXT,
      location TEXT,
      tips TEXT,
      cover_image_url TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS guides (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      title TEXT NOT NULL,
      description TEXT,
      price REAL DEFAULT 0,
      cover_image_url TEXT,
      download_url TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS excursions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      title TEXT NOT NULL,
      description TEXT,
      location TEXT,
      price REAL,
      affiliate_link TEXT,
      image_url TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS stays (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      title TEXT NOT NULL,
      location TEXT,
      price_range TEXT,
      affiliate_link TEXT,
      photo_url TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS affiliate_links (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      original_url TEXT NOT NULL,
      tracking_code TEXT UNIQUE NOT NULL,
      clicks INTEGER DEFAULT 0,
      conversions INTEGER DEFAULT 0,
      revenue REAL DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS generated_trips (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT UNIQUE NOT NULL,
      destination TEXT NOT NULL,
      travel_style TEXT NOT NULL,
      duration TEXT NOT NULL,
      budget TEXT NOT NULL,
      hook TEXT NOT NULL,
      script TEXT NOT NULL,
      caption TEXT NOT NULL,
      hashtags TEXT NOT NULL,
      itinerary TEXT NOT NULL,
      excursions TEXT,
      stays TEXT,
      shares INTEGER DEFAULT 0,
      views INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `;

  db.exec(schema);

  // Seed initial user if not exists
  const user = db.prepare('SELECT * FROM users WHERE email = ?').get('demo@lilitravel.com');
  let userId = 1;
  if (!user) {
    const hashedPassword = bcrypt.hashSync('password123', 10);
    const result = db.prepare(`
      INSERT INTO users (email, password, name, bio, role)
      VALUES (?, ?, ?, ?, ?)
    `).run('demo@lilitravel.com', hashedPassword, 'Lili Demo', 'Travel enthusiast and creator.', 'creator');
    userId = result.lastInsertRowid as number;
    console.log('Demo user created: demo@lilitravel.com / password123');
  } else {
    userId = (user as any).id;
  }

  // Seed Vietnam Data
  const vietnamExists = db.prepare('SELECT * FROM destinations WHERE title = ?').get('Hanoi');
  if (!vietnamExists) {
    console.log('Seeding Vietnam content...');
    
    const destinations = [
      {
        title: 'Hanoi',
        description: 'The capital of Vietnam, overflowing with cultural treasures and authentic experiences. Wander the Old Quarter, visit St. Joseph\'s Cathedral, try the famous Egg Coffee, and explore the Temple of Literature. Don\'t miss the iconic Train Street!',
        location: 'Hanoi, Vietnam',
        tips: 'Must-try addresses: Phở 10 Lý Quốc Sư (Michelin), Cha Ca Thang Long, Bun Cha Dac Kim, Loading T café (Egg coffee), King Roti. Best time: March-April.',
        cover_image_url: 'https://images.unsplash.com/photo-1555921015-5532091f6026?q=80&w=2070&auto=format&fit=crop'
      },
      {
        title: 'Sapa',
        description: 'A must-visit for nature lovers. Explore iconic rice terraces, trek to ethnic villages (H\'mong, Dao, Tay), and admire Mount Fansipan. Experience the local life in homestays.',
        location: 'Sapa, Vietnam',
        tips: 'Restaurants: Chợ Tình Quán (Hotpot), Good Morning View, Le Petit Gecko. Bring warm clothes for the evening!',
        cover_image_url: 'https://images.unsplash.com/photo-1570696568862-2292f3922330?q=80&w=2070&auto=format&fit=crop'
      },
      {
        title: 'Ha Long Bay',
        description: 'A natural jewel with emerald waters and limestone karsts. Cruise, kayak, and visit floating villages. A UNESCO World Heritage site that is truly breathtaking.',
        location: 'Quang Ninh, Vietnam',
        tips: 'Minimum 1 night/2 days recommended. Consider Lan Ha Bay for a less touristy alternative. Don\'t forget your swimsuit!',
        cover_image_url: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=2070&auto=format&fit=crop'
      },
      {
        title: 'Ha Giang Loop',
        description: 'An unforgettable motorbike adventure through spectacular mountain landscapes and ethnic minority villages. Conquer the Ma Pi Leng Pass for breathtaking views.',
        location: 'Ha Giang, Vietnam',
        tips: 'Plan 3-4 days. International Driving Permit required if driving. Contact Vietnam Buffalo Travel for organized tours.',
        cover_image_url: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=2070&auto=format&fit=crop'
      },
      {
        title: 'Ho Chi Minh City',
        description: 'A vibrant metropolis blending modernity and colonial history. Visit the War Remnants Museum, Cu Chi Tunnels, and enjoy the bustling nightlife and street food.',
        location: 'Ho Chi Minh City, Vietnam',
        tips: 'Try Bánh mì, Phở, and Bún thịt nướng. Visit the Mekong Delta for a day trip.',
        cover_image_url: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=2070&auto=format&fit=crop' // Placeholder, reused Ha Giang for now or find better
      },
      {
        title: 'Phu Quoc',
        description: 'Paradise island with white sand beaches and turquoise waters. Perfect for relaxation, snorkeling, and enjoying fresh seafood.',
        location: 'Phu Quoc, Vietnam',
        tips: 'Visit Long Beach and Sao Beach. Try the local Nuoc-mam (fish sauce).',
        cover_image_url: 'https://images.unsplash.com/photo-1540202404-a6f296f52c6d?q=80&w=2070&auto=format&fit=crop'
      },
      {
        title: 'Central Vietnam (Hue, Da Nang, Hoi An)',
        description: 'The perfect blend of history and charm. Hue\'s Imperial City, Da Nang\'s Dragon Bridge, and Hoi An\'s ancient lantern-lit streets.',
        location: 'Central Vietnam',
        tips: 'Hoi An is a must for its UNESCO ancient town and tailors.',
        cover_image_url: 'https://images.unsplash.com/photo-1552382343-23964923126c?q=80&w=2070&auto=format&fit=crop'
      }
    ];

    const insertDest = db.prepare(`
      INSERT INTO destinations (user_id, title, description, location, tips, cover_image_url)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    destinations.forEach(dest => {
      insertDest.run(userId, dest.title, dest.description, dest.location, dest.tips, dest.cover_image_url);
    });

    // Guides
    db.prepare(`
      INSERT INTO guides (user_id, title, description, price, cover_image_url)
      VALUES (?, ?, ?, ?, ?)
    `).run(userId, 'Vietnam Ultimate Guide', 'The complete guide to exploring Vietnam, from North to South. Includes detailed itineraries, food recommendations, and practical tips.', 19.99, 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop');

    // Excursions
    db.prepare(`
      INSERT INTO excursions (user_id, title, description, location, price, affiliate_link, image_url)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(userId, 'Ha Giang Loop Adventure', '3-Day motorbike tour with easy rider. Experience the breathtaking landscapes of Northern Vietnam safely.', 'Ha Giang', 150.00, 'https://example.com/book-ha-giang', 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=2070&auto=format&fit=crop');

    db.prepare(`
      INSERT INTO excursions (user_id, title, description, location, price, affiliate_link, image_url)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(userId, 'Ha Long Bay Luxury Cruise', '2 Days / 1 Night on a 5-star cruise. Kayaking, cave exploration, and cooking class included.', 'Ha Long Bay', 220.00, 'https://example.com/book-halong', 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=2070&auto=format&fit=crop');

    // Stays (Addresses from PDF)
    const stays = [
      { title: 'Chợ Tình Quán (Sapa)', location: 'Sapa', price_range: '$10 - $30', photo_url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop' },
      { title: 'Phở 10 Lý Quốc Sư', location: 'Hanoi', price_range: '$5 - $15', photo_url: 'https://images.unsplash.com/photo-1582878826618-c05326eff935?q=80&w=2070&auto=format&fit=crop' },
      { title: 'Loading T café', location: 'Hanoi', price_range: '$2 - $5', photo_url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2070&auto=format&fit=crop' }
    ];

    const insertStay = db.prepare(`
      INSERT INTO stays (user_id, title, location, price_range, photo_url)
      VALUES (?, ?, ?, ?, ?)
    `);

    stays.forEach(stay => {
      insertStay.run(userId, stay.title, stay.location, stay.price_range, stay.photo_url);
    });

    console.log('Vietnam content seeded.');
  }

  console.log('Database initialized.');
}

export default db;
