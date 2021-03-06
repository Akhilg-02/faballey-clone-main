const express = require("express");

const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors());

app.get('/', function (req, res) {
    return res.redirect('https://faballey-clone.vercel.app/');
});


const productController = require("./controllers/product.controller");
const productDetailsController = require("./controllers/productDetails.controller");
const cartController = require("./controllers/cart.controller");
const signUp = require("./controllers/user.controller");
const login = require("./controllers/login.controller")

// app.use("/", productController);

app.use("/products", productController);

app.use("/productDetail", productDetailsController);

app.use("/cart", cartController);

app.use("/users", signUp);

app.use("/login", login);

// app.get('', function (req, res) {
//     return res.redirect('http://localhost:3000');
// });

module.exports = app;
