const express = require('express')
const router = require('./router')
const app = express()
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 3001;
// Then use it before your routes are set up:
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static('public/build'));
const path = require('path');

app.use('/', router)
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'build', 'index.html'));
});
router.get(['/', '/*'], function(req, res, next) {
    res.sendFile(path.resolve(__dirname, 'public', 'build', 'index.html'));
});
app.listen(PORT, () => console.log(`The server is running on port ${PORT} `))


module.exports = app

