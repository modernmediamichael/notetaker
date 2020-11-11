const express=require('express');
const app=express();
const path=require('path');
const fs=require('fs');

const PORT=3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT,() => {
    console.log(`This server is listening on ${PORT}`)
});