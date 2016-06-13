var express = require('express');
var router = express.Router();
var appdata=require('../data.json');
//have to go back one dir sin its in routes to get dataS
//passing data through route to template in views this is 
//alternative way as locaapp way actually the local app wont 
//get into route for sure or route folder i think
/* GET home page. */
router.get('/', function(req, res, next) {
  var myArtwork=[];
  var myArtists=[];
  myArtists=appdata.speakers;
  appdata.speakers.forEach(function(item){
  	myArtwork=myArtwork.concat(item.artwork);//pure javas
  });//a loop to pupulate each of the item.artwork the 
  //array that contains each artists artwork into this 
  //var my artwork
  //if speaker with s then error forEach undif
    res.render('index', { 
    	title: 'Home',
    	artwork: myArtwork,//another var passed to index like the tile
      artists: myArtists,
      page:'Home'
    });//atw is a local var inside the temp index feeded from myArtwork    
});//router.get(/)
 
//when router so mething did not need to change ejs extension which is index under view
router.get('/speakers', function(req, res, next) {
    var myArtwork=[];
    var myArtists=[];
  myArtists=appdata.speakers;
  appdata.speakers.forEach(function(item){
    myArtwork=myArtwork.concat(item.artwork);
  });//forEach
    res.render('speakers', { 
      title: 'speakers',
      artwork: myArtwork,
      artists: myArtists,
      page:'artistlist'
    });//render speakers
});//router.get(.speakers)

// get speaker page
//this & above tow routers use the same template spearker.ejs under views
//if : is in front in the router then it makes it as a local varialbe so you can use it 
router.get('/speakers/:speakerid', function(req, res, next) {
  var myArtwork=[];
  var myArtists=[];
  appdata.speakers.forEach(function(item){
    if(item.shortname==req.params.speakerid){//this params is how to get to spearkid
    myArtists.push(item);/*add it to the myArtists array which is 0 or nothing*/
    //myArtists=myArtists.concat(item);//=push
    myArtwork=myArtwork.concat(item.artwork);//pure javascript
   }//if shortname=req.params
  });//forEach
    res.render('speakers', { 
      title: 'speakers',
      artwork: myArtwork,
      artists: myArtists,
      page:'artistDetail'
    });//render
});//router.get

module.exports = router;
