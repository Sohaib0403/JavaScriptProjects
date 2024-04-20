let addBtn = document.getElementById('AddBtn')
let parentList = document.getElementById('parentList')

addBtn.addEventListener('click',addTask)

function addTask(e){
    if(parentList.children[0].className == "emptyMsg"){
        parentList.children[0].remove()
    }
    let currentBtn = e.currentTarget;
    let currentInput = currentBtn.previousElementSibling
    let currentTask = currentInput.value

    let newLi  = document.createElement('li')
    //newLi.classList.add('list-group-item')
    newLi.className = "list-group-item d-flex justify-content-center"
    newLi.innerHTML = `<h3 class="flex-grow-1">${currentTask}</h2>  
                       <button class="btn btn-warning mx-3"onclick="editChapter(this)" >Edit</button> 
                       <button class="btn btn-danger" onclick="removeChapter(this)">Remove</button>`

    
    parentList.appendChild(newLi)
}

function removeChapter(currElement){
    currElement.parentElement.remove()
    let parentList = document.getElementById('parentList')
    if(parentList.children.length <= 0){
        let newEmptyMsg = document.createElement("h3")
        newEmptyMsg.classList.add("emptyMsg")
        newEmptyMsg.textContent = "there is no task for today"
        parentList.appendChild(newEmptyMsg)
    }
}

function editChapter(currElement){
    if(currElement.textContent == "Done"){
      currElement.textContent = "Edit"
      let currChapterName = currElement.previousElementSibling.value
      let currHeading = document.createElement('h3')
      currHeading.className = "flex-grow-1"
      currHeading.textContent = currChapterName
      currElement.parentElement.replaceChild(currHeading,currElement.previousElementSibling)
    }
    else{
    currElement.textContent = "Done"
    let currChapterName = currElement.previousElementSibling.textContent
    let currInput = document.createElement('input')
    currInput.type = "text"
    currInput.placeholder = "Enter your new task"
    currInput.className = "form-control"
    currInput.value = currChapterName

    currElement.parentElement.replaceChild(currInput,currElement.previousElementSibling)
}
}