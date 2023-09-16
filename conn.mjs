const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Taohookaitun',
    database: 'shorter_url'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to the database');
});

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/shorten', (req, res) => {
    const originalUrl = req.body.originalUrl;
    const shortCode = generateShortCode();

    const sql = 'INSERT INTO short_urls (original_url, short_code) VALUES (?, ?)';
    db.query(sql, [originalUrl, shortCode], (err, result) => {
        if (err) throw err;
        console.log(`Short URL created: http://yourdomain.com/${shortCode}`);
        res.json({ shortUrl: `http://yourdomain.com/${shortCode}` });
    });
});

function openTab(tabName) {
    // ซ่อนเนื้อหาของทุกแท็บที่เปิดในตอนนี้
    document.getElementById('shorturl').style.display = 'none';
    document.getElementById('Qrcode').style.display = 'none';

    // แสดงเนื้อหาของแท็บที่เลือก
    if (tabName === 'shorturl') {
        document.getElementById('shorturl').style.display = 'block';
    } else if (tabName === 'Qrcode') {
        document.getElementById('Qrcode').style.display = 'block';
    }
}


function generateShortCode() {
    // สร้างรหัสย่อแบบสุ่มไม่ซ้ำกัน
    return Math.random().toString(36).substring(2, 8);
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});





