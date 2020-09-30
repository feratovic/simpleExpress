const express = require('express')
const app = express()
const port = 5050

app.get('/', (req, res) => {
  res.send('Hello Elmaz!')
})


let PORT = process.env.PORT || 5050;

app.listen(PORT, console.log(`Server started on port ${PORT}`));