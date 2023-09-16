// เปลี่ยนจาก require เป็น import
import express from 'express';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
const app = express();
const port = 3300;


// สร้างการเชื่อมต่อกับฐานข้อมูล MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Taohookaitun',
    database: 'shorter_url'
});

// เชื่อมต่อกับฐานข้อมูล
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
        const shortUrl = `http://rbdomain.com/${shortCode}`;
        console.log(`Short URL created: ${shortUrl}`);
        res.json({ shortUrl });
    });
});

function generateShortCode() {
    // สร้างรหัสย่อแบบสุ่มไม่ซ้ำกัน
    return Math.random().toString(36).substring(2, 8);
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

function openTab(tabName) {
    // รับรายการทั้งหมดของเนื้อหาทั้งหมดที่มีคลาส "tab-content"
    const tabContents = document.querySelectorAll('.tab-content');

    // ซ่อนเนื้อหาทั้งหมด
    tabContents.forEach(content => {
        content.style.display = 'none';
    });

    // แสดงเนื้อหาที่ตรงกับ tabName
    const tabContent = document.getElementById(tabName);
    if (tabContent) {
        tabContent.style.display = 'block';
    }
}
app.post('/shorten', (req, res) => {
    // โค้ดที่คุณต้องการสำหรับการร้องขอ POST "/shorten" จะไปที่นี่
  });
  