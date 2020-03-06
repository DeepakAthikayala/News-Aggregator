const express = require('express');
const app = express();
const request = require('request');

app.use(express.static(__dirname + '/dist/news-aggregator'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if(req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
        return res.status(200).json({});
    }
    next();
  });

app.get('/business', (req, res) => {
    request('http://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=cb61591e9d41498f8cc45a37e21e47a6', function (error, response, body) {
        if(error){
            console.error('error:', error); // Print the error if one occurred
        }
        console.log(body);
        res.send(body);
    });
});
app.get('/entertainment', (req, res) => {
    request('http://newsapi.org/v2/top-headlines?country=de&category=entertainment&apiKey=cb61591e9d41498f8cc45a37e21e47a6', function (error, response, body) {
        if(error){
            console.error('error:', error); // Print the error if one occurred
        }
        console.log(body);
        res.send(body);
    });
});
app.get('/general', (req, res) => {
    request('http://newsapi.org/v2/top-headlines?country=de&category=general&apiKey=cb61591e9d41498f8cc45a37e21e47a6', function (error, response, body) {
        if(error){
            console.error('error:', error); // Print the error if one occurred
        }
        console.log(body);
        res.send(body);
    });
});
app.get('/health', (req, res) => {
    request('http://newsapi.org/v2/top-headlines?country=de&category=health&apiKey=cb61591e9d41498f8cc45a37e21e47a6', function (error, response, body) {
        if(error){
            console.error('error:', error); // Print the error if one occurred
        }
        console.log(body);
        res.send(body);
    });
});
app.get('/science', (req, res) => {
    request('http://newsapi.org/v2/top-headlines?country=de&category=science&apiKey=cb61591e9d41498f8cc45a37e21e47a6', function (error, response, body) {
        if(error){
            console.error('error:', error); // Print the error if one occurred
        }
        console.log(body);
        res.send(body);
    });
});
app.get('/sports', (req, res) => {
    request('http://newsapi.org/v2/top-headlines?country=de&category=sports&apiKey=cb61591e9d41498f8cc45a37e21e47a6', function (error, response, body) {
        if(error){
            console.error('error:', error); // Print the error if one occurred
        }
        console.log(body);
        res.send(body);
    });
});
app.get('/technology', (req, res) => {
    request('http://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=cb61591e9d41498f8cc45a37e21e47a6', function (error, response, body) {
        if(error){
            console.error('error:', error); // Print the error if one occurred
        }
        console.log(body);
        res.send(body);
    });
});

app.listen(2000, () => {
    console.log("Server started at http://localhost:2000");
})