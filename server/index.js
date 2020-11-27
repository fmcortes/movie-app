const next = require('next');
const express = require('express');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const fs = require('fs');
const path = require('path');
const moviesData = require('./data.json');
const filePath = './data.json';

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());

  // custom end point
  server.get('/api/v1/movies', (req, res) => {
    return res.json(moviesData);
  });

  server.get('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params;
    const movie = moviesData.find((m) => m.id === id);
    return res.json(movie);
  });

  server.post('/api/v1/movies', (req, res) => {
    const movie = req.body;
    moviesData.push(movie);

    const pathToFile = path.join(__dirname, filePath);
    const stringifieData = JSON.stringify(moviesData, null, 2);

    fs.writeFile(pathToFile, stringifieData, (err) => {
      if (err) {
        return res.status(422).send(err);
      }

      return res.json('Movie has been succesfully added!!');
    });
  });

  server.patch('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params;
    const movie = req.body;
    const movieIndex = moviesData.findIndex((m) => m.id === id);

    moviesData[movieIndex] = movie;
    const pathToFile = path.join(__dirname, filePath);
    const stringifieData = JSON.stringify(moviesData, null, 2);

    fs.writeFile(pathToFile, stringifieData, (err) => {
      if (err) {
        return res.status(422).send(err);
      }

      return res.json(movie);
    });
  });

  server.delete('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params;

    const movieIndex = moviesData.findIndex((m) => m.id === id);

    moviesData.splice(movieIndex, 1);

    const pathToFile = path.join(__dirname, filePath);
    const stringifieData = JSON.stringify(moviesData, null, 2);

    fs.writeFile(pathToFile, stringifieData, (err) => {
      if (err) {
        return res.status(422).send(err);
      }

      return res.json('Movie has been succesfully removed!!');
    });
  });

  // server.get('/faq', (req, res) => {
  //   res.send(`
  //     <html>
  //       <head></head>
  //       <body><h1>Hello world!</h1>
  //       </body>
  //     </html>
  //   `);
  // });

  // we are handling all of the request coming to our server
  // server.get('*', (req, res) => {
  //   return handle(req, res);
  // });

  // server.post('*', (req, res) => {
  //   return handle(req, res);
  // });

  const PORT = process.env.PORT || 3000;

  server.use(handle).listen(PORT, (err) => {
    if (err) throw err;
    console.log('> Ready on port ' + PORT);
  });
});
