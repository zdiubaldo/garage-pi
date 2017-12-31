var express = require('express'),
    app = express(),
    port = process.env.PORT || 10009,
    bodyParser = require('body-parser');
    jsonwebtoken = require("jsonwebtoken");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(function(req, res, next) {
  console.log('here')
  
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  if(token){
    //Decode the token
    jsonwebtoken.verify(token,"samplesecret",(err,decod)=>{
      if(err){
        res.status(403).json({
          message:"Wrong Token"
        });
      }
      else{
        //If decoded then call next() so that respective route is called.
        req.decoded=decod;
        next();
      }
    });
  }
  else{
    res.status(403).json({
      message:"No Token"
    });
  }
});

// import and add the routes
var routes = require('./api/routes/garageRoutes');
routes(app);

app.listen(port);

var token =  jsonwebtoken.sign( {data: 'foobar'},
                                'secret',
                                { expiresIn: 60 * 60 });
console.log(token);
console.log('garage pi RESTful API Server started on: ' + port);
