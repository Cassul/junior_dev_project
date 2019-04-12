const express = require('express')
const app = express()

// start simple hello world app on port 7777
app.get('/', (req, res) => {
    res.send('Hello World')
})
app.listen(7777, () => {
    console.log('server is running on http://localhost:7777')
})