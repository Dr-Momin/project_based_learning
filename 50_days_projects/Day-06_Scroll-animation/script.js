


const boxes = document.querySelectorAll(".box");

const checkboxes = () => {

   const triggerBottom = window.innerHeight / 7*3;
   
   boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;

      if(boxTop < triggerBottom){
         box.classList.add("show");
      }
      else{
         box.classList.remove("show");
      }


   })

}

checkboxes();

window.addEventListener("scroll", checkboxes);























// console.log("Allooo");
// const boxes = document.querySelectorAll(".box");

// const checkboxes = () => {

//    const triggerBottom = window.innerHeight / 7*3;
//    console.log(triggerBottom);

//    boxes.forEach((box) => {
//       const boxTop = box.getBoundingClientRect().top;


//       if(boxTop < triggerBottom) {
//          box.classList.add("show");
//       }
//       else{
//          box.classList.remove("show");
//       }

//    });
   

// }

// checkboxes();


// window.addEventListener("scroll", checkboxes);