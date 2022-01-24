const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./routes/auth')
const categoryRouter = require('./routes/category')
const productRouter = require('./routes/product')
const orderRouter = require('./routes/order')
const order_itemRouter = require('./routes/order_item')
const product_categoryRouter = require('./routes/product_category')
const cartRouter = require('./routes/cart')
const cart_itemRouter = require('./routes/cart_item')
const User_profileRouter = require('./routes/user_profile')
require('dotenv').config()
const app=express()


app.use(express.json())

const connectDB = async () => {
    try {
       await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@web.wd1u3.mongodb.net/Web?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('MongoDB connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

connectDB()


app.use(authRouter)

app.use('/api/auth', authRouter)
app.use('/category', categoryRouter)
app.use('/product', productRouter)
app.use('/order', orderRouter)
app.use('/order_item', order_itemRouter)
app.use('/product_category', product_categoryRouter)
app.use('/cart', cartRouter)
app.use('/cart_item', cart_itemRouter)
app.use('/user_profile', User_profileRouter)

app.get('/', (req,res) => res.send('Hello world'))

const PORT = 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT} `))