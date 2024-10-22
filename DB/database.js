const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Initialize database
const dbPath = path.resolve(__dirname, 'financial_records.db');
const db = new sqlite3.Database(dbPath);

const setupDatabase = () => {
    db.serialize(() => {
        // Execute SQL migration to create tables if they do not exist
        db.run(`
            CREATE TABLE IF NOT EXISTS transactions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                type TEXT NOT NULL, 
                category TEXT NOT NULL,
                amount REAL NOT NULL,
                date TEXT NOT NULL,
                description TEXT
            );
        `);

        db.run(`
            CREATE TABLE IF NOT EXISTS categories (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                type TEXT NOT NULL
            );
        `);
    });
};

module.exports = { db, setupDatabase };
