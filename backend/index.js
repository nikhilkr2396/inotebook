const connectToMongo = require('./db');
const express = require('express')
connectToMongo();

const app = express()
const port = 5000

// this is available route
app.get('/', (req, res) => {
  res.send('Hello Notebook!')
})

app.use(express.json())

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`iNotebook listening at http://localhost:${port}`)
})
