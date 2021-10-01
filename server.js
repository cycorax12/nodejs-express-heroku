const express = require('express');
const app = express();

const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Service is UP on heroku.');
});

app.listen(port, () => console.log(`Express Server starting on ${port}!`))