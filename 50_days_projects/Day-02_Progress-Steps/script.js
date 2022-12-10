

const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');
const progress = document.getElementById('progress');
const circles = document.querySelectorAll(".circle");

let countUpdate = 1;


btnNext.addEventListener("click", () =>{
  
   countUpdate ++;
   if(countUpdate > circles.length){
      countUpdate = circles.length;
   }

   update();
});

btnPrev.addEventListener("click", () =>{

   countUpdate--;
   if (countUpdate < 1){
      countUpdate = 1;
   }

   update();
})

const update = () =>{
   console.log("In update function......")
   circles.forEach((circle, index) =>{
      if(index < countUpdate){
         circle.classList.add("active");
      }
      else{
         circle.classList.remove("active");
      }
   });

   const actives = document.querySelectorAll(".active");

   progress.style.width = (actives.length - 1 ) / (circles.length -1 ) * 100 + "%";

   if(countUpdate === 1){
      btnPrev.disabled = true;
   }
   else if(countUpdate === circles.length){
      btnNext.disabled = true;
   }
   else{
      btnPrev.disabled = false;
      btnNext.disabled = false;
   }

}

// const circles = document.querySelectorAll(".circle");

// const progress = document.getElementById('progress');
// const prev = document.getElementById('prev');
// const next = document.getElementById('next');


// let currentActve = 1;

// next.addEventListener("click", () => {

//    currentActve++;
   
//    if(currentActve > circles.length){
//       currentActve = circles.length;
//    }

//    update();


// });


// prev.addEventListener("click", () => {
   
//    currentActve--;

//    if (currentActve < 1){
//       currentActve = 1;
//    }

//    update();

// })



// const update = () => {
//    console.log("in update func...")

//    circles.forEach((circle, index) => {

//       if(index < currentActve){
//          circle.classList.add("active");
//       }
//       else{
//          circle.classList.remove("active");
//       }

//    });


//    const actives = document.querySelectorAll(".active");

//    progress.style.width = (actives.length - 1 ) / (circles.length -1 ) * 100 + "%";

//    if(currentActve === 1){
//       prev.disabled = true;
//    }
//    else if(currentActve === circles.length){
//       next.disabled = true;
//    }else{
//       next.disabled = false;
//       prev.disabled = false;
//    }

// }
