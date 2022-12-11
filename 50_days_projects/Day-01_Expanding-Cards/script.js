

const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
   panel.addEventListener("click", () => {
      removeActivePanel();
      panel.classList.add("active");

   });
});


const removeActivePanel = () => {
   panels.forEach(panel => {
      panel.classList.remove("active");
   })
}




























// const panels = document.querySelectorAll('.panel');

// panels.forEach(panel => {
//    panel.addEventListener('click', () => {
//       removeActivePanel();
//       panel.classList.add("active");
//    })
// })


// const removeActivePanel = () => {
//    panels.forEach(panel => {
//       panel.classList.remove("active");
//    })
// }