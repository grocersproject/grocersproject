var app = require("express")();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");

// database url details
let url = "mongodb://localhost:27017/TCSCapstone";

// middleware enable data from post method
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//database connection without warning
const mongooseDbOptions = {
  // to avoid warnings with mongobd
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

var allowCrossDomain = function(req, res, next) {
  // console.log(Object.keys(req));
  // console.log(req.headers['ip-address']);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);
  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
      //res.send(200);
      res.status(200).end()
  } else {
      next();
  }
};
app.use(allowCrossDomain);


mongoose.connect(url, mongooseDbOptions);


mongoose.connection;
process.env.SECRET_KEY = 'secret';


var AdminRouter = require("./routers/admin.router");

var ProductRotuer = require("./routers/product.router");

var User = require("./api/users/users.router.js");

var EmployeeRouter = require("./routers/employee.router");



// http://localhost:9090/admin_dashboard/storeProductDetails/         {"pname":"laptop","price":1500,"pquantity":50}
// http://localhost:9090/admin_dashboard/deleteProductByName/pname   
// http://localhost:9090/admin_dashboard/updateProductDetails         {"pname":"tv","price":567,"pquantity":89}   
// http://localhost:9090/employee/storeRequest/                       {"request":"Please change the car price"}  sarafudeen API
// http://localhost:9090/employee/viewRequest/

app.use("/admin_dashboard", AdminRouter);
// middleware
app.use("/user", User);


app.use("/product", ProductRotuer);

app.use("/employee", EmployeeRouter);

app.listen(9090, () => console.log("Running on server 9090"));