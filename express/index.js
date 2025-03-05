const express = require('express')  //commonjs  //es6 
const app = express()
const port = 4000
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/aicommerce');
app.use(express.json()) //body parse

const Product = mongoose.model('Product', 
{ 
  productName: String,
  productPrice: Number,
  isFeatured: Boolean,
}
);

//user model for ride sharing app
const User = mongoose.model('User', 
{ 
  name: String,
  email: String,
  password: String,
  role: {type: String, enum: ['admin', 'user', 'driver'], default: 'user'},
  phoneNumber: Number,
  avatar: String
}
);

app.post('/register', async(req, res) => {
  const data = await User.create(req.body)
  if(data) res.send('Created User')
})



app.get('/users',async (req, res) => {
  const data = await User.find()
  res.send(data)
})



app.post('/products',async(req, res) => {
  const data = await Product.create(req.body)
  if(data) res.send('Product User')
})

app.get('/products',async  (req, res) => {
 const data = await Product.find()
 res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// - Protocol - (HTTP, SMTP, TCP, FTP , UDP, SSH)
// - HTTP
// - HTTP




// HTTP METHODS:
// - GET, POST, PUT, DELETE, PATCH
// - controller, models , routes, middlewares in express

// CRUD---> Create, Read, Update, Delete

// HTTP methods:

// GET --> fetch, Read, fetch product list

// POST: --> Create, LOGIN (POST), LOGOUT (POST) , REGISTER (POST)

// PUT: --> Update, form update

// PATCH: ---> Partial update

// DELETE: ---> remove product




// {
//   skills: 'football, badminton',
//   name: 'ram',
//   age: 25,
//   hobbies: ['reading', 'swimming'],
// }



// //ride: 
// {
//   passengerId: 1,
//   driverId: 2,
//   rideId: 3,
//   status: 'ongoing',
//   pickup: 'delhi',
//   drop: 'mumbai',
//   fare: 1000,
//   paymentMethod: 'card',
//   paymentStatus: 'paid',
// }

