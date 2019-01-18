const express = require('express')
const app = express();
const port = 9111;

app.get('/', (req, res) => res.sendfile('./index.html'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))