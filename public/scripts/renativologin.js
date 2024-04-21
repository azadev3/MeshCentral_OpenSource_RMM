 // animations on background images//
 const prevImg = document.getElementById("prevImg");
 const nextImage = document.getElementById("nextimg");

 function animateImages() {
   prevImg.style.transition = "opacity 2s ease-out, transform 2s ease-out";
   prevImg.style.opacity = "100%";
   prevImg.style.transform = "translateX(0px)";
   nextImage.style.opacity = "0";

   setTimeout(() => {
     prevImg.style.transition =
       "opacity 2s ease-out, transform 2s ease-out";
     prevImg.style.opacity = "0%";
     prevImg.style.transform = "translateX(-100px)";

     nextImage.style.transition =
       "opacity 2s ease-out, transform 2s ease-out";
     nextImage.style.opacity = "100%";
     nextImage.style.transform = "translateY(0px)";

     setTimeout(() => {
       nextImage.style.transition =
         "opacity 2s ease-out, transform 2s ease-out";
       nextImage.style.opacity = "0%";
       nextImage.style.transform = "translateY(-100px)";

       setTimeout(animateImages, 500);
     }, 2000);
   }, 2000);
 }

 document.addEventListener("DOMContentLoaded", animateImages);

 //input type password click the enabled eye and click the disabled eye //
 const showEye = document.getElementById("showEye");
 const hiddenEye = document.getElementById("hiddenEye");
 const passwordInput = document.getElementById("passwordInput");

 showEye.addEventListener("click", () => {
   passwordInput.type = "text"; // password type the text
   showEye.style.display = "none"; // hidden eye
   hiddenEye.style.display = "inline-block"; // showing eye
 });

 hiddenEye.addEventListener("click", () => {
   passwordInput.type = "password"; // password type the password
   hiddenEye.style.display = "none"; // hidden eye
   showEye.style.display = "inline-block"; // showing eye
 });


