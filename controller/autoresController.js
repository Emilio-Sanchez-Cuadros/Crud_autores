const connection = require('../config/database.js');

const controller = {};

controller.list = function(req, res) {
    let sql = "SELECT * FROM artists JOIN book USING(idBook)"
    connection.query(sql, function(err, results) {
        res.render('index.ejs', { results: results })
    });
};

// controller.saveBook = function(req, res) {
//     let title = req.body.title;
//     let genre = req.body.genre;
//     connection.query("INSERT INTO book SET ?", { title, genre },
//         function(err, results) {
//             console.log(results);
//             res.redirect('/');
//         });
// };

controller.saveArtist = function(req, res) {
    let name = req.body.name;
    let lastname = req.body.lastname;
    let year = req.body.year;
    connection.query("INSERT INTO artists SET ?", { name, lastname, year },
        function(err, results) {
            console.log(results);
            res.redirect('/');
        });
};

// controller.deleteBook = function(req, res) {
//     let id = req.params.idbook;
//     connection.query("DELETE FROM books WHERE id=" + id, function(err, results) {
//         res.redirect('/');
//     });
// };

controller.deleteArtist = function(req, res) {
    let id = req.params.idartist;
    connection.query("DELETE FROM artists WHERE id=" + id, function(err, results) {
        res.redirect('/');
    });
};

// controller.editBook = function(req, res) {
//     let id = req.params.id;
//     connection.query("SELECT * FROM book WHERE id=" + id, function(err, results) {
//         res.render('editBook.ejs', { results: results[0] })
//     });
// };

controller.editArtist = function(req, res) {
    let id = req.params.id;
    connection.query("SELECT * FROM artists WHERE id=" + id, function(err, results) {
        res.render('editArtist.ejs', )
    });
};

controller.updateArtist = function(req, res) {
    let id = req.params.id;
    let newArtist = req.body;
    connection.query("UPDATE artists SET ? WHERE id=?", [newArtist, id], function(err, results) {
        res.redirect('/');
    });
};


module.exports = controller;