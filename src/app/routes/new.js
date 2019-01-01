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

    app.get('/news/:productId', (req, res) => {
        let id = req.params.productId

        connection.query(`select * from news where id = ${[id]}`, (err, result) => {
            res.render('show', {
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

    //app.delete('/delete:productId', (req, res) => {
    //  let id = req.params.productId
    //connection.query(`delete from mysql.news where news.id=${id}`, (err, result) => {
    //  result
    //res.redirect('/news')


    //})


    //})
};