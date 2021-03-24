const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('yahoo world')
})

app.listen(5000, () => console.log('listenign to 5000'))