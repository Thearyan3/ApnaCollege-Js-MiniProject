// 1. Event Bubbling - Jab hamare html ke andar bhot sare nested elements hote h aur har ek element ka ek eventlistener hota h to jitne bhi internal elements ke event listener honge vo bahar wale elements ke event listeners ko bhi target krenge. Isi phenomena ko Event Bubbling bolte h. 

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function(){
//     console.log("div was clicked");
// });

// ul.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// for(li of lis){
// li.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("li was clicked");
// });
// }

// 2. Activity Todo 
// Event Delegation - jab bhi ham koi naya element create krte h dom ki help se aur ham chahte h ki jo event listeners hamne already created elements par lagaye hue h vo newly created elements with dom par bhi apply ho to ham Event Delgation ko use krte h. Isme ham bubbling property ko use krte h. Isme ham jo bhi eventlistener apne child element ke liye create krte h vo ham child element ke liye create na krke parent element ke liye create krenge. 

let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

inp.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        let task = document.createElement("li");
        task.innerText = inp.value;

        let del = document.createElement("button");
        del.innerText = "delete";
        del.classList.add("delete");

        task.appendChild(del);
        ul.append(task);
        inp.value = "";
    }
})

btn.addEventListener("click", function () {
    let task = document.createElement("li");
    task.innerText = inp.value;

    let del = document.createElement("button");
    del.innerText = "delete";
    del.classList.add("delete");

    task.appendChild(del);
    ul.append(task);
    inp.value = "";
});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})
