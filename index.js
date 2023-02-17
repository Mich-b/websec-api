const express = require('express');
const app = express();
var cors = require('cors');

app.use(
    cors({
        credentials: true,
        origin: 'http://127.0.0.1:5500',
        methods: 'GET',
        headers: 'none',
        credentials: 'false',
        })
);

app.options('*', cors());
app.get('/', (req, res) => res.send('This api works.'));
app.post('/',  (req, res) => res.send('This post works.'));

app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});
