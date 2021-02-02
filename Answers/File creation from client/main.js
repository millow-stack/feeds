/*var http = require('http');
var qs = require('querystring');
var formOutput = '<html><body>'
  + '<h1>XYZ Repository Commit Monitor</h1>'
  + '<form method="post" action="inbound" enctype="application/x-www-form-urlencoded"><fieldset>'
  + '<div><label for="UserName">User Name:</label><input type="text" id="UserName" name="UserName" /></div>'
  + '<div><label for="Repository">Repository:</label><input type="text" id="Repository" name="Repository" /></div>'
  + '<div><label for="Branch">Branch:</label><input type="text" id="Branch" name="Branch" value="master" /></div>'
  + '<div><input id="ListCommits" type="submit" value="List Commits" /></div></fieldset></form></body></html>';
var serverPort = 8124;
http.createServer(function (request, response) {
  if(request.method === "GET") {
    if (request.url === "/favicon.ico") {
      response.writeHead(404, {'Content-Type': 'text/html'});
      response.write('<!doctype html><html><head><title>404</title></head><body>404: Resource Not Found</body></html>');
      response.end();
    } else {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(formOutput);
    }
  } else if(request.method === "POST") {
    if (request.url === "/inbound") {
      var requestBody = '';
      request.on('data', function(data) {
        requestBody += data;
        if(requestBody.length > 1e7) {
          response.writeHead(413, 'Request Entity Too Large', {'Content-Type': 'text/html'});
          response.end('<!doctype html><html><head><title>413</title></head><body>413: Request Entity Too Large</body></html>');
        }
      });
      request.on('end', function() {
        var formData = qs.parse(requestBody);
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('<!doctype html><html><head><title>response</title></head><body>');
        response.write('Thanks for the data!<br />User Name: '+formData.UserName);
        response.write('<br />Repository Name: '+formData.Repository);
        response.write('<br />Branch: '+formData.Branch);
        response.end('</body></html>');
      });
    } else {
      response.writeHead(404, 'Resource Not Found', {'Content-Type': 'text/html'});
      response.end('<!doctype html><html><head><title>404</title></head><body>404: Resource Not Found</body></html>');
    }
  } else {
    response.writeHead(405, 'Method Not Supported', {'Content-Type': 'text/html'});
    return response.end('<!doctype html><html><head><title>405</title></head><body>405: Method Not Supported</body></html>');
  }
}).listen(serverPort);
console.log('Server running at localhost:'+serverPort);*/

////////////////////////////////////////////////////////////////////////////

/*var http = require('http');
var qs = require('querystring');
http.createServer(function (request, response) {
  if(request.method === "POST") {
    if (request.url === "/favicon.ico") {
      response.writeHead(404, {'Content-Type': 'text/html'});
      response.write('<!doctype html><html><head><title>404</title></head><body>404: Resource Not Found</body></html>');
      response.end();
    } else {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(formOutput);
    }
  }
}).listen(serverPort);
console.log('Server running at localhost:'+serverPort);*/

var http=require('http');
var util=require('util');
var querystring=require('querystring');
var fs = require('fs');
var filename = 'your_file.txt';
var port = '80';



var server=http.createServer(function(req,res){
    res.writeHead(200, {  
        'Content-Type': 'text/html'  
    });
    if (req.method=='GET'){
        res.write(fs.readFileSync('index.html', 'utf8'));
        res.end();
    }else{

        var chunk = '';
        req.on('data', function (data) {
            chunk += data;
        });
        req.on('end', function () {
            console.log(chunk);
            fs.readFile(filename, 'utf-8', function(err, data) { 
           
              if( !err ) {
                  fs.writeFile(filename, data+'\n'+chunk, (err)=>{ 
                      if( err ) { 
                          throw err; 
                      } 
                  }); 
                }
              else{
                  throw err;
                }
          });
            //any function to perform on clint side webpage.
            res.end();
        });

    }
}).listen(port);
console.log('Successfully started serving at : '+port)

//util.inspect(querystring.parse(chunk));