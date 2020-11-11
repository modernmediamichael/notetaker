const path = require("path");

module.exports = function(app) {
    app.get("/",(req,res)=>{
        res.send("Note Taking Homework")
    });
    
    app.get("/notes",(req,res)=>{
        res.sendFile(path.join(__dirname,"../public/html/notes.html"));
    });
    
    app.get("*",(req,res)=>{
        res.sendFile(__dirname,"../public/html/index.html")
    });
};  