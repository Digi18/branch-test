const express = require('express');
const app = express();

const port = process.env.PORT || 2100;

app.get('/',(req,res) => {
    res.send('HEllo from home');
});

app.listen(port,() => console.log(`App is running on ${port} port`));