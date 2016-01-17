
//Get HD Video link
var optionsLink = document.getElementsByClassName("options")[0];
var optionsLinkItems = optionsLink.getElementsByTagName("li");

//Get the first a element inside the ul (first element inside the li)
var hdVideoElement = optionsLinkItems[0].getElementsByTagName("a")[0];
var hdVideoURL = hdVideoElement.getAttribute("href");

//Get the video element
var bustedAssVideo = document.getElementsByClassName("video center")[0];

//This is the url of the video that you will be shown if using Chrome
var badVideoUrl = bustedAssVideo.getElementsByTagName("Source")[1].getAttribute("src");
console.log("Bad video url: "+badVideoUrl);

//Replace the video URL
bustedAssVideo.setAttribute("src",hdVideoURL);
