const express = require('express');

const fs = require('fs');

const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

const DB_PATH = './server/database.json';

// Получить всех

app.get('/members', (req, res) => {

    const data = JSON.parse(fs.readFileSync(DB_PATH));

    res.json(data);

});

// Добавить

app.post('/members', (req, res) => {

    const data = JSON.parse(fs.readFileSync(DB_PATH));

    data.push(req.body);

    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

    res.json({ success: true });

});

// Удалить

app.delete('/members/:id', (req, res) => {

    let data = JSON.parse(fs.readFileSync(DB_PATH));

    data = data.filter(m => m.id !== req.params.id);

    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

    res.json({ success: true });

});

app.listen(3000, () => console.log('SERVER RUNNING 🔥'));
