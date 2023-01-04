document.addEventListener("DOMContentLoaded", () => {

   // active navbar
   const nav = document.querySelector(".navigation-wrap");
   console.log(nav);
   window.onscroll = function () {
      if (document.documentElement.scrollTop > 20) {
         nav.classList.add("scroll-on");
      }
      else {
         nav.classList.remove("scroll-on");
      }
   }



   // nav hide
   let navBar = document.querySelectorAll(".nav-link");
   console.log(navBar);
   let navCollapse = document.querySelector(".navbar-collapse.collapse");
   navBar.forEach(function(a){
      a.addEventListener("click", function(){
         navCollapse.classList.remove("show");
      });
   });


   // document.addEventListener("click", () => {
   //    navCollapse.classList.remove("show");
   // })



   // counter design
   const counters = document.querySelectorAll(".count");

   counters.forEach(counter => {

      counter.innerText = "0";

      updateCounter();


      function updateCounter() {

         const target = +counter.getAttribute("data-target");
         const c = +counter.innerText;
         const increment = target / 200;

         if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);

         } else {
            counter.innerText = target;
         }



      }

   })







});
