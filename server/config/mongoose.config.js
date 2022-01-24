// import mongoose
const mongoose = require('mongoose')
const db_name = "product_DB"
// connect to db
mongoose.connect(`mongodb://localhost/${db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log(`Established a connection to the database ${db_name}`))
    .catch(err => console.log({
        message: `Something Wrong connection to ${db_name}`,
        error: err
    }))