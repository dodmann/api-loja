const express = require('express');
const app = express();

app.get("/", (req, resp) => { 
    resp.send("Ok edilson");
});

app.listen(1234, () => {
    console.log('Funcionou');
})