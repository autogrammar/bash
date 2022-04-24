var express = require('express');
var app = express();

app.use('/', express.static("app"));
app.use('/api', express.static("api"));

app.get('/query', function (req, res) {
    res.send('<html><body><h1>Hello World</h1></body></html>');
});


const exec = require('child_process').exec;
app.get('/command/:command', (req, res) => {
    req.params; // { userId: '42' }
    console.log(req.params.command);
    //shell
    const cmd = `./load.sh "2/in.csv" "2/out.csv" "2/status.csv"`
    const myShellScript = exec(cmd);
    myShellScript.stdout.on('data', (data)=>{
        console.log(data);
        res.json(data);
        // do whatever you want here with data
    });
    myShellScript.stderr.on('data', (data)=>{
        console.error(data);
        res.json(data);
    });
    //res.json(req.params);
});

app.get('/status', function (req, res) {
    res.send('<html><body><h1>Hello World</h1></body></html>');
});



app.listen(3000, function () {
    console.log('listening')
});
