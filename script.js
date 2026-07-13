//portfolio loaded
let name = "Edward"
let company = "Eddy Tech"
function greet(){
  alert("Welcome to my portfolio");
}
function about(){
  alert("I am " + name);
}
function hire(){
  alert("Welcome to " + company + ". We are ready to create your website,flyers and banners your business needs.Also, business adverts with high leads your business needs to reach its peak." );
}
function changeMessage(){
  document.getElementById("home").innerHTML = "Thanks for visiting Eddy Tech. We build websites, designs, logo and business adverts";
}
function sayHello(){
  let name = 
  document.getElementById("name").value
  if(name == ""){
  alert("please enter your name");
  return
}
  document.getElementById("message").innerHTML = "👋 Hello, " + name + "! Welcome to Eddy Tech.We're glad to have you here";
  document.getElementById("welcomeText").innerHTML =
    "👋 Welcome, " + name + "!";

    document.getElementById("introPopup").style.display = "flex";

    document.getElementById("introVideo").play();
}
function closeIntro(){
    document.getElementById("introPopup").style.display = "none";

    document.getElementById("introVideo").pause();

    document.getElementById("introVideo").currentTime = 0;
}
function openImage(image){
  document.getElementById("lightbox").style.display="flex";
  document.getElementById("popup-image").src=image.src;
}

document.querySelector(".close").onclick=function(){
    document.getElementById("lightbox").style.display="none";
}

document.getElementById("lightbox").onclick=function(e){
    if(e.target===this){
        this.style.display="none";
    }
}
function closeImage(){
    document.getElementById("lightbox").style.display = "none";
}
function openVideo(videoFile){

    document.getElementById("videoPopup").style.display = "flex";

    document.getElementById("popupVideo").src = videoFile;

    document.getElementById("popupVideo").play();

}
function closeVideo(){

    document.getElementById("videoPopup").style.display = "none";

    document.getElementById("popupVideo").pause();

    document.getElementById("popupVideo").currentTime = 0;

}
mediumZoom('.zoomable');
