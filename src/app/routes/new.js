const dbConnection = require('../../config/conexion');

module.exports = app => {

    const connection = dbConnection();

    app.get('/news', (req, res) => {
        connection.query('SELECT * FROM news', (err, result) => {
            res.render('index', {
                news: result
            });
        });
    });

    app.post('/news', (req, res) => {
        const {
            title,
            news
        } = req.body;
        connection.query('INSERT INTO news SET ? ', {
            title,
            news
        }, (err, result) => {
            res.redirect('/news');
        });
    });
};