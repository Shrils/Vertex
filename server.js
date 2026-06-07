const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'mailing-list.json');

app.use(express.json());
app.use(express.static(__dirname));

// Ensure the data file exists
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, '[]', 'utf8');
}

function readEmails() {
    try {
        const raw = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(raw);
    } catch {
        return [];
    }
}

function writeEmails(list) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(list, null, 2), 'utf8');
}

// Subscribe endpoint
app.post('/api/subscribe', (req, res) => {
    const { email } = req.body;
    if (!email || !email.includes('@')) {
        return res.status(400).json({ success: false, message: 'Invalid email' });
    }

    const normalized = email.trim().toLowerCase();
    const list = readEmails();

    const already = list.some(e => e.toLowerCase() === normalized);
    if (already) {
        return res.json({ success: true, already: true });
    }

    list.push(normalized);
    writeEmails(list);

    res.json({ success: true, already: false });
});

app.listen(PORT, () => {
    console.log(`Vertex server running at http://localhost:${PORT}`);
});
