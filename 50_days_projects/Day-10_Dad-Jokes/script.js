
const joke = document.getElementById("joke");
const btn = document.getElementById("jokeBtn");

// ============== using .then =================

// const fetchJoke = () => {

//    const config = {
//       headers: {
//          Accept: "application/json",
//       }
//    }

//    fetch("https://icanhazdadjoke.com", config)
//       .then(res => res.json())
//       .then(data => {
//          // console.log(data);
//          joke.innerHTML = data.joke;
//       })

// }



// Using Async / Await
const  fetchJoke = async () => {

   const config = {
      headers: {
         Accept: "application/json",
      }
   }

   const res = await fetch("https://icanhazdadjoke.com", config);
   const data = await res.json();
   
   console.log(data);
   joke.innerHTML = data.joke;

}




fetchJoke();
btn.addEventListener("click", fetchJoke);
