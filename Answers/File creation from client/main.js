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
console.log('Successfully started serving at : '+port);
