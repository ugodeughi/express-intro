const { log } = require('console');
const express = require('express');
const app = express();
const path = require('path')

const port = 3000;

// rendo pubblici i file statici presenti nella cartella public
app.use(express.static('public'))


app.get('/', (req, res) => {

  const filePath = path.join(__dirname, 'public', 'index.html');
  log(filePath)

  //res.send('Entry point'); // risposta in formato HTML
  res.sendFile(filePath, (err) => {
    if(err){
      log('Errore:', err)
      res.status(500).send('Errore nel caricamento del file')
    }
  })
})



app.get('/download', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'files', 'white-christmas.pdf');

  res.download(filePath, 'bianco-natale.pdf', (err) => {
    if(err){
      log('Errore:', err)
      res.status(500).send('Errore nel caricamento del file')
    }
  })
})

app.get('/user', (req, res) => {
  const user = {
    firstname: 'Ugo',
    lastname: 'De Ughi'
  }
  res.json(user);
})

app.get('/logo', (req, res) => {
  res.send('<img src="/logo.png" >')
})

app.listen(port, () => {
  console.log(`Sono in alsoloto alla porta ${port}`);
})
