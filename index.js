const port = process.env.PORT || 1000;
var express=require("express");
const app = express();

var bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type, access_token,Authorization');
  res.header('Access-Control-Allow-Credentials',true);
  next();
});

app.use('/auth', require('./routes/auth_route'));

  
app.route("/").get((req, res) =>{
  res.status(200).json({
      "success":true,
      "message":"Selamat datang di service auth"
  });
});

app.listen(port, "0.0.0.0", () =>
console.log(`welcome your listening at port ${port}`)
);
