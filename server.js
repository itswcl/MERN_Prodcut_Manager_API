// import express
const express = require('express');
const app = express();
const PORT = 8000;

require('./server/config/mongoose.config')

// after step 10 cors installed add this line
const cors = require('cors')
app.use(cors())

// after step 13 we add middleware
app.use(express.json());
app.use(express.urlencoded({ extend: true }));

require('./server/routes/product.route')(app)

app.listen(PORT, () => console.log(`listening on port:${PORT}`))