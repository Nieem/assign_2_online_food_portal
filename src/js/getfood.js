const getFood = (id="potato") => {
   // let inputText = document.getElementById("potato").value;
        //    nav button active change
        var header = document.getElementById("navbtnId");
        var btns = header.getElementsByClassName("navbtn");
        console.log(btns);
        for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active1");
        if (current.length > 0) { 
            current[0].className = current[0].className.replace(" active1", "");
        }
        this.className += " active1";
       });
     }  //  end  nav button active change  
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => getitems(data.meals))
        .catch(error => console.log('Error: ', error));
           // Create a MediaQueryList object 
        var x = window.matchMedia("(max-width: 640px)") 
        // start nav bar hide on scroll
       var prevScrollpos = window.scrollY;
           window.onscroll = function() {
           var currentScrollPos = window.scrollY;
           if (prevScrollpos > currentScrollPos) {
               document.getElementById("nabbarhide").style.top = "0";
           } else if(x.matches) {
               document.getElementById("nabbarhide").style.top = "-80px";
           }
           else{
               document.getElementById("nabbarhide").style.top = "-70px";
           }
           prevScrollpos = currentScrollPos;
        }
        //end nav bar hide on scroll
}
//   index page loading
const reload=()=>{
    location.href="index.html";
   }
//    initial data load
getFood();

const getitems = (meals) => {
    let container = document.getElementById("card-data");
    container.innerHTML = '';
    meals.forEach(meal => {
        let mealCard = document.createElement('div');    
        mealCard.classList = 'card card-compact bg-base-100 shadow-xl border-solid  border-2 border-x-gray-300 hover:border-x-red-500';
        
        mealCard.innerHTML = `
            <figure>
                <img src=${meal.strMealThumb} alt="Image of ${meal.strMeal}" />
            </figure>
            <div class="card-body border-solid border-1  border-gray-400">
                <h2 class="card-title">${meal.strMeal}</h2>
                <p title="${meal.strInstructions}" >${meal.strInstructions.slice(0,200)}...</p>
                <div class="card-actions justify-center">
                     <button class="btn btn-primary bg-red-900">Order Now</button>
                 </div>
            </div>   
        `;
    container.appendChild(mealCard);
    });
}
