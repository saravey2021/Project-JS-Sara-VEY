// date day month year
let date="Dates:";
let time = new Date();
let result = document.querySelector('h1');
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let dayIndex = time.getDay();
let dates = time.getDate();
let years = time.getFullYear();
let monthIndex = time.getMonth();
result.innerHTML = date + " " + dates + " - " + days[dayIndex] + " - " + months[monthIndex] + " - " + years;
// done

// for remmove item
function deleteFood(event) {
    const buttonName = event.target.className;
    if (buttonName == "delete") {
        const delBtn = event.target.parentElement;
        delBtn.remove();
    }
}
//done

//  for input food, fruice, price
function addfood(event) {
    event.preventDefault();

    let item1 = document.querySelector("#add-food");
    let item2 = document.querySelector("#add-fruit");
    let item3 = document.querySelector("#add-price");
    let item4 = document.querySelector("#add-firstDate");
    let item5 = document.querySelector("#add-lastDate");
    
    let nameOfItem1 = item1.value;
    let nameOfItem2 = item2.value;
    let nameOfItem3 = item3.value;

    // frist date and last date
    let first =new Date(item4.value);
    let last =new Date(item5.value);

    // input all, if not input all you can not enter show result
    if (nameOfItem1 != "" && nameOfItem2 != "" && nameOfItem3 != "" && date != "") {

    // conditions of First date be smaller than last date
        if (first.getTime() > last.getTime()){
            alert("First date be smaller than last date");  
        }
        else{

    // result of input food, fruit, price and last date
            let date=item5.value;
            let result = nameOfItem1 + "  /  " + nameOfItem2 + "  /  " + nameOfItem3 + "$" + "  /  " + date;

    // 2- Create a new spam bookName for the book name, class name = name
            let foodName = document.createElement("span");
            foodName.className = "name";
            foodName.textContent = result;
            
    // 3- Create a new spam deleteBtn for the button delete, class name = delete
            let deleteBtn = document.createElement("span");
            let editBtn = document.createElement("span");
                deleteBtn.className = "delete";
                deleteBtn.textContent = "x"

    // 4- Create a new li
            let li = document.createElement("li");

    // 5- Add bookName and deleteBtn to li and li to the  bookList UL
            li.appendChild(foodName);
            li.appendChild(deleteBtn);
                foodList.appendChild(li);
                
                item1.value = "";
                item2.value = "";
                item3.value = "";
                item4.value = "";
                item5.value = "";
        }   
    }
};

function searchFood(event) {
// 1- Get the search text
    let input = document.querySelector("#search-food input");
    let filter = input.value.toUpperCase();
    let ul = document.querySelector("#food-list ul");
    let li = ul.getElementsByTagName("li");

// 2- Loop on all LI of reach
    for (i = 0; i < li.length; i++) {
    // Update the style of the LI (visible or hidden)
        let span = li[i].getElementsByTagName("span")[0];
        let txtValue = span.textContent || span.innerText;
        if (txtValue.toUpperCase().indexOf(filter) >= 0) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
let searchFoodInput = document
    .getElementById("search-food")
    .querySelector("input");
searchFoodInput.addEventListener("keyup", searchFood);

function myFunction() {
    let x = document.getElementById("food-list");
    if (x.style.display === "none") {
        x.style.display = "block";
    }else {
        x.style.display = "none";
    }
};
let foodList = document.querySelector("#food-list ul");
foodList.addEventListener("click", deleteFood);
let addForm = document.getElementById("addAll");
addForm.addEventListener("submit", addfood);
// Done

// hide show
function showElement(element, isShow){
    if (isShow){
        element.style.display="block";
    }else{
        element.style.display="none";
    }
}
const createBtn=document.querySelector('#close');
const closeBtn=document.querySelector('#create');
const formBox=document.querySelector('#addAll');

createBtn.addEventListener('click', e => {
    showElement(closeBtn, true);
    showElement(formBox, true);
    showElement(createBtn, false);
});
closeBtn.addEventListener('click', e => {
    showElement(closeBtn, false);
    showElement(formBox, false);
    showElement(createBtn, true);
});
// done



