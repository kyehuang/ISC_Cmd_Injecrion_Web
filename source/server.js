const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

const {exec} = require('child_process');
const { stdout, stderr } = require('process');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {         
    res.render('index', {weather: null, error: null, name: null});
});


app.get('*',function (req, res) {
    res.send("Please enter a valid path !");
});

app.post('/', function (req, res) {    	
    let usrname = req.body.username;
    let city = req.body.city;   
	let arr = [
	{city: 'taipei', degree: 27.34},
	{city: 'newtaipei', degree: 26.3},
	{city: 'taoyuan', degree: 27.8},
	{city: 'taichung', degree: 28.3},
	{city: 'tainan', degree: 29.4},
	{city: 'kaohsiung', degree: 30.5},
	];
	let data = arr.find(element => element.city == city)
	console.log(data);
	if(data){
		try{
			const username = eval(req.body.username);			
            let weatherText = `It's ${data.degree} degrees in ${data.city}!`;                
            res.render('index', {weather: weatherText, error: null, name: username});
		}catch(e){
            let weatherText = `It's ${data.degree} degrees in ${data.city}!`; 
            res.render('index', {weather: weatherText, error: null, name: req.body.username});
		}
	}else{
		res.render('index', {weather: null, error: 'Error, please try again', name: null});
	}			  
});

app.set('port', (process.env.PORT || 8000));
app.listen(app.get('port'), function(){
	    console.log('Server listening on port http://localhost:' +app.get('port'));
});