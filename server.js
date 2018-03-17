var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var db = require('./models');

var app = express();

var PORT = process.env.PORT || 3000;

//Implements bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var AudioContext = require("web-audio-api").AudioContext;
var MusicTempo = require("music-tempo");
var fs = require("fs");
var tempo = 0;
var duration = 0;
// const audio = require("/assets/audio");

var soundTag = ["./audio/09Mirrors.m4a",
"./audio/01Grenade.m4a",
"./audio/01JohnCougar,JohnDeere,John3_16.m4a",
"./audio/01LookAtMeNow(feat.LilWayne&BustaRhymes).m4a",
"./audio/01MyLife(feat.Eminem&AdamLevine).m4a",
"./audio/01StartedfromtheBottom.m4a",
"./audio/01WakeMeUp.m4a",
"./audio/1-04IDon'tFuckWithYou(feat.E-40).mp3",
"./audio/03Climax.m4a",
"./audio/03Lucky(feat.ColbieCaillat).m4a",
"./audio/04LilFreak(feat.NickiMinaj).m4a",
"./audio/04RunThisTown(feat.Rihanna&KanyeWest).m4a",
"./audio/04StillD.R.E.(feat.SnoopDogg).m4a",
"./audio/04WhoSays.m4a",
"./audio/05Superstar(feat.MatthewSantos).m4a",
"./audio/07BeforeHeCheats.m4a",
"./audio/07LikeaWreckingBall.m4a",
"./audio/07NotAfraid.m4a",
"./audio/08OrdinaryPeople.m4a",
"./audio/27TearsInHeaven.m4a"
];

$("#songChoice").click(function(){
  $("#songlist").hide();
});
// var soundTag = ["mirrors","grenade","johncougar","lookatmenow","life","bottom","wake","withyou",
// "climax","lucky","freak","run","dre","who","superstar","before","wrecking","afraid","ordinary","tears"];

random = Math.floor(Math.random() * soundTag.length);
song = soundTag[random];

var data = fs.readFileSync(song);
console.log(song);
>>>>>>> a60b88e705cbd82c50144631f0f5ca3042a4f3d5

// Spotify Widget Player
// <iframe src="https://open.spotify.com/embed/user/1233302581/playlist/0CxcHM5HGzoAIyrbG8jeZM" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media">

var calcTempo = function (buffer) {
  var audioData = [];
  // Take the average of the two channels
  if (buffer.numberOfChannels == 2) {
    var channel1Data = buffer.getChannelData(0);
    var channel2Data = buffer.getChannelData(1);
    var length = channel1Data.length;
    for (var i = 0; i < length; i++) {
      audioData[i] = (channel1Data[i] + channel2Data[i]) / 2;
    }
  } else {
    audioData = buffer.getChannelData(0);
  }
  var p = { expiryTime: 30, maxBeatInterval: 1.5 };
  var mt = new MusicTempo(audioData, p);


  tempo = mt.tempo;
  duration = ((length/2)/22090);
  console.log("Tempo: " + mt.tempo);
  console.log("Duration: " + duration);

  // console.log("Duration in seconds: "+ (length/2)/22090);
//   console.log(mt.beats);
  // console.log(mt.spectralFlux);
  // console.log(mt.peaks);
//   console.log(mt.events);

}

// var data = fs.readFileSync("../audio/01 Wake Me Up.m4a");
// var data = fs.readFileSync("../audio/seinfeld.mp3");

var context = new AudioContext();
// turning off
// context.decodeAudioData(data, calcTempo);

// test();

// console.log(HP);
// console.log(duration);
// console.log(tempo);
// console.log(duration);
// console.log(context);


// module.exports = slayer;

random2 = Math.floor(Math.random() * soundTag.length);
song2 = soundTag[random2];
var data = fs.readFileSync(song2);
console.log(song2);

// Spotify Widget Player
// <iframe src="https://open.spotify.com/embed/user/1233302581/playlist/0CxcHM5HGzoAIyrbG8jeZM" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media">

var calcTempo2 = function (buffer) {
  var audioData = [];
  // Take the average of the two channels
  if (buffer.numberOfChannels == 2) {
    var channel1Data = buffer.getChannelData(0);
    var channel2Data = buffer.getChannelData(1);
    var length = channel1Data.length;
    for (var i = 0; i < length; i++) {
      audioData[i] = (channel1Data[i] + channel2Data[i]) / 2;
    }
  } else {
    audioData = buffer.getChannelData(0);
  }
  var p = { expiryTime: 30, maxBeatInterval: 1.5 };
  var mt = new MusicTempo(audioData, p);


  tempo2 = mt.tempo;
  duration = ((length/2)/22090);
  console.log("Tempo2: " + mt.tempo);
  console.log("Duration2: " + duration);
  // console.log("Duration in seconds: "+ (length/2)/22090);
//   console.log(mt.beats);
  // console.log(mt.spectralFlux);
  // console.log(mt.peaks);
//   console.log(mt.events);
}

// var data = fs.readFileSync("../audio/01 Wake Me Up.m4a");
// var data = fs.readFileSync("../audio/seinfeld.mp3");

var context = new AudioContext();
// turning off
// context.decodeAudioData(data, calcTempo2);



var routes = require("./controllers/controller.js");

app.use("/", routes);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
      console.log(tempo);
    });
  });
