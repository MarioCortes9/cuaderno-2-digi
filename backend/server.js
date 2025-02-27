require('dotenv').config();  // Carga las variables del archivo .env

const express = require('express');
const { Pool } = require('pg');
const app = express();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: 'postgres',
    password: process.env.DB_PASS,
    port: 5432,
    ssl: { rejectUnauthorized: false }  // Habilitar SSL si es necesario
});


pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err.stack);
    } else {
        console.log('Conexión exitosa a la base de datos:', res.rows);
    }
});

app.get('/', (req, res) => res.send('API funcionando con PostgreSQL'));

app.listen(3001, () => console.log('Servidor en puerto 3001'));
