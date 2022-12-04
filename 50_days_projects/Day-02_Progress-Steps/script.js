
const circles = document.querySelectorAll(".circle");

const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');


let currentActve = 1;

next.addEventListener("click", () => {

   currentActve++;
   
   if(currentActve > circles.length){
      currentActve = circles.length;
   }

   update();


});


prev.addEventListener("click", () => {
   
   currentActve--;

   if (currentActve < 1){
      currentActve = 1;
   }

   update();

})



const update = () => {
   console.log("in update func...")

   circles.forEach((circle, index) => {

      if(index < currentActve){
         circle.classList.add("active");
      }
      else{
         circle.classList.remove("active");
      }

   });


   const actives = document.querySelectorAll(".active");

   progress.style.width = (actives.length - 1 ) / (circles.length -1 ) * 100 + "%";

   if(currentActve === 1){
      prev.disabled = true;
   }
   else if(currentActve === circles.length){
      next.disabled = true;
   }else{
      next.disabled = false;
      prev.disabled = false;
   }

}
