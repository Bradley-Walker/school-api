var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var exec = require('child_process').exec;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/payload', (req, res) => {
  exec('git -C /home/bradley/schoolApi reset --hard', execCallback);
  exec('git -C /home/bradley/schoolApi clean -df', execCallback);
  exec('git -C /home/bradley/schoolApi pull -f', execCallback);
  exec('npm -C /home/bradley/schoolApi install --production', execCallback);
});

app.listen(5000, () => {
  console.log('Listening for webhooks on port 5000');
})

function execCallback(err, stdout, stderr) {
  if(stdout) console.log(stdout);
  if(stderr) console.log(stderr);
}
