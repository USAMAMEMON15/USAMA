let btn = document.getElementById("addBtn")
btn.addEventListener("click",addfood);
function addfood (e){
    let currbt = e.currentTarget;
    console.log(currbt);
    let currinput = currbt.previousElementSibling;
    console.log(currinput.value);
    let foodname = currinput.value
    console.log(foodname);

    let newElem = document.createElement("li");
    newElem.className = "list-group-item disabled d-flex justify-content-between mt-2"
    newElem.innerHTML = `
    <h2 class="flex-grow-1 text-dark">${foodname}</h2>
                        <button class="btn btn-dark ">READ</button>
                        <button class="btn btn-danger mx-1"onclick="removeFood(this)">DELETE</button>
    `
    
    let parentList = document.getElementById("parentList")
    parentList.appendChild(newElem)
    console.log(newElem);
}
function removeFood (newElem){
    newElem.parentElement.remove()
}
