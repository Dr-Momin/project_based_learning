
const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {

   panel.addEventListener("click", () => {
      
      removeOtherActivePanels();

      panel.classList.add("active");

   })
   
})


const removeOtherActivePanels = () => {

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