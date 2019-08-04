// let apple = 5;

// if(apple>4){
//     console.log('only 5 quantity available');
// }
// let http = require('http')
// let ourApp = http.createServer(function(req, res){
//     //console.log(req.url);
//     console.log("JS RUNNNG");
//     if (req.url == "/"){
//         res.end('Hello welcome to our site')
//     }
//     if (req.url == "/about"){
//         res.end('Thank you for your interest')
//     }
//     res.end('404 Not Found')
// })

// ourApp.listen(4300);

let express = require('express')
let ourApp = express()
ourApp.use(express.urlencoded({extended:false}))
ourApp.get('/',function(req, res){
res.send(`
<p>What is the color of sky?</P>
<form action="/answer" method="POST">
<input type="text" name="skyColor" plceholder="Answer">
<input type="submit" placeholder="submit">
</form>
`)
})

ourApp.post('/answer', function(req, res){
   if(req.body.skyColor.toUpperCase() == "BLUE"){
        res.send(`
        <h3>Thank for your answer</h3>
        <a href="/">Back To Homepage</a>
        `)
    }
    else{
        res.send(`
        <h3>Sorry your answer is incorrect plese</h3>
        <a href="/">Back To Homepage</a>
        `)
    }
})

ourApp.listen(4300);

