const express = require('express');
const router = express.Router();

var client_id = 'D2E5jX4B9fBfIvI9GZCT';
var client_secret = 'HIaffOHWES';


router.get('/:name', function (req, res) {
       console.log(req.params.name)
   var api_url = 'https://openapi.naver.com/v1/search/blog.json?query=' + encodeURI(req.params.name); // json 결과
//   var api_url = 'https://openapi.naver.com/v1/search/blog.xml?query=' + encodeURI(req.query.query); // xml 결과
   var request = require('request');
   var options = {
       url: api_url,
       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
   request.get(options, function (error, response, body) {
     if (!error && response.statusCode == 200) {
       // res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
       //  console.log(body);
      res.json(body);
     } else {
       res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
             console.log('error = ' + response.body);
     }
   });
});
 
module.exports = router;