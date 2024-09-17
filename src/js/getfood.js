const getFood = (id="potato") => {
   // let inputText = document.getElementById("potato").value;
   var mainpart = document.getElementById("mainpart");
    //     var btns = header.getElementsByClassName("btn");
    //     for (var i = 0; i < btns.length; i++) {
    //     btns[i].addEventListener("click", function() {
    //     var current = document.getElementsByClassName("active");
    //     if (current.length > 0) { 
    //         current[0].className = current[0].className.replace(" active", "");
    //     }
    //     this.className += " active";
    //    });
//}

      // mainpart.classList.add("-translate-y-6");

    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => getitems(data.meals))
        .catch(error => console.log('Error: ', error));
}

getFood();

//document.getElementById("potato").addEventListener("click", getFood);
//  function myFunction() {
//      alert ("YOU CLICKED ME!");
//   }


const getitems = (meals) => {
    //console.log('Data is: ', meals);
    let container = document.getElementById("card-data");
    container.innerHTML = '';
    meals.forEach(meal => {
        let mealCard = document.createElement('div');    
        mealCard.classList = 'card card-compact bg-base-100 shadow-xl border-solid  border-2 border-x-gray-300 hover:border-x-indigo-600';
        
        mealCard.innerHTML = `
            <figure>
                <img src=${meal.strMealThumb} alt="Image of ${meal.strMeal}" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">${meal.strMeal}</h2>
                <p title="${meal.strInstructions}" >${meal.strInstructions.slice(0,200)}...</p>
            </div>   
        `;
    container.appendChild(mealCard);
    });
}
