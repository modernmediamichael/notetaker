const fs = require('fs');
const uuid = require('uuid');

let notesData;

module.exports = function(app) {
    app.get("/api/notes",(req, res)=>{
        notesData = fs.readFileSync('./db/data.json');
        notesData = JSON.parse(notesData);
        res.json(notesData);
    });

    app.post("/api/notes",(req,res)=>{
        notesData = fs.readFileSync('./db/data.json');
        notesData = JSON.parse(notesData);
        note = {
            title: req.body.title,
            text: req.body.text,
            id: uuid.v1()
        }
        notesData.push(note);
        notesData = JSON.stringify(notesData);
        fs.writeFileSync('./db/data.json', notesData);
        res.send(notesData)
    });

    app.delete("/api/notes/:id", function(req,res) {
        notesData = fs.readFileSync('./db/data.json');
        notesData = JSON.parse(notesData);

        const { id } = req.params;
        notesData = notesData.filter(function(note) {
            return note.id != id;
        });
        notesData = JSON.stringify(notesData);
        fs.writeFileSync('./db/data.json', notesData);
        res.send(notesData);
    });
};