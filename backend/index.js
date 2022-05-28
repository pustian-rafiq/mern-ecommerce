const express = require('express');
const env = require('dotenv');
const app = express()
const mongoose = require('mongoose')

//Configuartion environment variable

env.config();

//Import routes
const authRoute = require('./src/routes/userRoutes')
const adminRoute = require('./src/routes/admin/adminRoutes')
const categoryRoute = require('./src/routes/categoryRoutes')
const productRoute = require('./src/routes/productRoutes')
const cartRoute = require('./src/routes/cartRoutes')




//Configure middleware
app.use(express.urlencoded({ extended: true })),
    app.use(express.json()),

    //app.use(express.json())
    // app.use(urlencoded)
    // bodyParser.json()
    //app.use(bodyParser.urlencoded({ extended: false }))

//Call the api
//Api routes must be call in the bottom section but before server creating
app.use('/auth',authRoute);
app.use('/auth/admin',adminRoute);
app.use('/category',categoryRoute);
app.use('/product',productRoute);
app.use('/cart',cartRoute);


app.post('/data', (req, res, next) => {
    console.log("jj", req.body)
    res.status(200).json({
        message: req.body,
    })
})
app.get('/', (req, res, next) => {
    console.log("jj")
    res.status(200).json({
        message: "Hello!, this message from the server",
    })
})

// Create database
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Database Created successfully")
    // app.listen(PORT,()=> {
    //     console.log(`Server is running on port ${PORT}`)
    // })
}).catch(err => {
    console.log(err)
})
//Run the server
app.listen(process.env.PORT || 8800, (req, res) => {
    console.log(`server is running on the port ${process.env.PORT}`)
})