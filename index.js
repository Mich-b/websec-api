const express = require('express');
const app = express();
var cors = require('cors');

app.use(
    cors({
        credentials: true,
        origin: 'http://127.0.0.1:5500',
        methods: 'GET',
        credentials: 'false',
        })
);

app.options('*', cors());

app.get('/', (req, res) => res.send('This api works.'));

app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});
