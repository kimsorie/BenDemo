// weather plugin_http://simpleweatherjs.com

/* Does your browser support geolocation? */
if ("geolocation" in navigator) {
  $('.js-geolocation').show();
} else {
  $('.js-geolocation').hide();
}

/* Where in the world are you? */
$('.js-geolocation').ready(function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
  });
});



function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    success: function(weather) {

      html = '<ul><li>'+weather.city+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';


      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}

// function ShowLocalDate(){
  var d = new Date();
  var monthname=new Array("January","February","March","April","May","June","July","August","September","October","November","December")
  var weekday=new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat")
  var localdate= (d.getFullYear() + '. ' + monthname[d.getMonth()] + ' ' + d.getDate() + ' ' + weekday[d.getDay()])

// console.log(localdate);
document.getElementById("localdate").innerHTML = localdate;

// document.write(localdate); <--wasn't working?

  var idVar = setInterval(function(){ timer() }, 0);
  setTimeout(() => { clearInterval(idVar); }, 1000);

function timer() {
    var tNow = new Date();
    var t = tNow.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    document.getElementById("clock").innerHTML = t;
};

    // function StopTimer() {clearInterval(idVar)};


//random shape generator START----------------------
var canvas = document.getElementById('Canvas');
var ctx = canvas.getContext('2d');
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
// ctx.fillRect(40,40,10,10);

var posX = 10;
var posY = 10;
var height = 50;
var width = 50;
var color = "#FFF";

// drawRandShape();
// $("#Button").click( function() {
//   ctx.clearRect(0, 0, canvas.offsetWidth,canvas.offsetHeight);
//   drawRandShape();
// });


//ASK BEN ------------------------------------
drawRandShape();
$("#Button").click( function() {
  ctx.save();
  // drawRandShape();
});
//ASK BEN ------------------------------------ DON'T WANT THEM TO GENERATE DIFFERENT SHAPES UNLESS THE NEXT DAY

function drawRandShape() {

ctx.fillStyle = '#f00';
ctx.beginPath();
ctx.moveTo(GetRandNum(50, 100), GetRandNum(50, 100));
ctx.lineTo(GetRandNum(120, 200),GetRandNum(120, 150));
ctx.lineTo(GetRandNum(120, 150), GetRandNum(170, 200));
ctx.lineTo(GetRandNum(70, 100), GetRandNum(170, 190));
ctx.lineTo(GetRandNum(30, 50), GetRandNum(110, 190));
ctx.closePath();
ctx.stroke();

//ctx.fill();
}

function GetRandNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}


//GETUSERMEDIA
/*
 *  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

//WEBRTC  START--------------------

// window.onload = function() {
//
//   var constraints = {
//         audio: { echoCancellation: true }, video:true};
//   navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream){
//     var video = document.querySelector('video');
//     video.srcObject = mediaStream
//     video.play();
//   }).catch(function(err){
//     console.log("error!" + err.message);
// })
// }
//WEBRTC  END--------------------
// ///////////////////////////////////////////////////////////////////////////////////////////////////////
(function() {
  'use strict';
  var video = document.querySelector('video')
    , canvas;

  /**
   *  generates a still frame image from the stream in the <video>
   *  appends the image to the <body>
   */
  function takeSnapshot() {
    var img = document.querySelector('img') || document.createElement('img');
    var context;
    var width = video.offsetWidth
      , height = video.offsetHeight;

    canvas = canvas || document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, width, height);

    img.src = canvas.toDataURL('image/png');
    document.body.appendChild(img);
  }

  // use MediaDevices API
  // docs: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
  if (navigator.mediaDevices) {
    // access the web cam
    navigator.mediaDevices.getUserMedia({video: true})
    // permission granted:
      .then(function(stream) {
        video.src = window.URL.createObjectURL(stream);
        video.addEventListener('click', takeSnapshot)
        .c;
      })
      // permission denied:
      .catch(function(error) {
        document.body.textContent = 'Could not access the camera. Error: ' + error.name;
      });
  }

})();

////////////////////drawing pad

//CUSTOMIZE BELOW
var thickness = 0.0075,
	color = "rgb(0, 0, 0)";
//CUSTOMIZE ABOVE





var c = document.getElementById("#drawing"),
	ctx = c.getContext("2d"),
	x,
	y,
	s = 0;
function getXY(event) {
	x = event.clientX;
	y = event.clientY;
}
window.onload = function() {
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.strokeStyle = color;
	ctx.lineWidth = thickness;
	setInterval(function() {
		if(s === 1) {
			ctx.lineTo(x, y);
			ctx.stroke();
		} else{}
	}, 1);
}

/////////////////////////text editor
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// window.onload = function() {
//
//     //Compatibility
//     navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
//
//     var canvas = document.getElementById("CamCanvas"),
//         context = canvas.getContext("2d"),
//         video = document.getElementById("video"),
//         btnStart = document.getElementById("btnStart"),
//         btnPhoto = document.getElementById("btnPhoto"),
//         videoObj = {
//             video: true,
//             audio: true
//         };
//
//     btnStart.addEventListener("click", function() {
//         var localMediaStream;
//
//         if (navigator.getUserMedia) {
//             navigator.getUserMedia(videoObj, function(stream) {
//                 video.src = (navigator.webkitGetUserMedia) ? window.webkitURL.createObjectURL(stream) : stream;
//                 localMediaStream = stream;
//
//             }, function(error) {
//                 console.error("Video capture error: ", error.code);
//             });
//
//             btnPhoto.addEventListener("click", function() {
//                 context.drawImage(video, 0, 0, 320, 240);
//
//             });
//         }
//     });
// };
