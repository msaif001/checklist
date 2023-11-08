let listItem=document.getElementById("listItem")
let listContainer=document.getElementById("listContainer")
listItem.style.display = 'flex';
listContainer.appendChild(listItem)
let listItem2=document.getElementById("listItem")
listItem2.style.display = 'flex';
listItem2.setAttribute("key","list")
console.log(listItem2)
listContainer.appendChild(listItem2)
console.log(listContainer)





let clear= document.getElementById("textInput")

let todoArray=[ ]
function plus(){
     let store = clear.value
     todoArray.push(store)
     clear.value=""
     showListItem()
}

function showListItem(){
     for(i=0; i<todoArray.length;i++){
          console.log(todoArray[i])
     }
}


