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
  var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.header('authorization');
  if(token){
    console.log('here2')
    //Decode the token
    jsonwebtoken.verify(token.split(' ')[1],"zxc",(err,decod)=>{
      if(err){
        console.log('here3' + " " + err + " " + token)
        res.status(403).json({
          message:"Wrong Token"
        });
      }
      else{
        //If decoded then call next() so that respective route is called.
        console.log('here6')
        req.decoded=decod;
        next();
      }
    });
  }
  else{
    console.log('here7')
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
                                'zxc',
                                { expiresIn: '5h' });
console.log(token);
console.log('garage pi RESTful API Server started on: ' + port);
