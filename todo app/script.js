const input = document.getElementById("input-box")
const button = document.querySelector("button")
const listContainer = document.getElementById("list-container")


function addTask(){
    button.addEventListener("click", function(){
        if(input.value === ""){
            alert("You can't add empty todo.")
        }else{
            const li = document.createElement("li")
            li.innerHTML = input.value
            listContainer.appendChild(li)
    
            let span = document.createElement("span")
            span.innerHTML = "\u00d7"
            li.appendChild(span)
    
            li.addEventListener("click", () => {
                li.classList.toggle("checked")
            })
    
            span.addEventListener("click", () => {
                listContainer.removeChild(li)
            })
        }
        input.value = ""
    })
}
addTask()