let listContainer=document.getElementById("listContainer")
let listItem=document.getElementById("listItem")

let inputElement = document.getElementById("textInput")

function plus(){
     if(inputElement.value !== ''){
          let clonedItem = listItem.cloneNode(true);
          clonedItem.style.display = 'flex';
          clonedItem.querySelector("#first").innerText = inputElement.value
          listContainer.appendChild(clonedItem)
          inputElement.value = ""
     }else{
          alert("Please enter before submit")
     }
}

function deleteItem(x){
     let element = x.parentNode
     element.remove()
}