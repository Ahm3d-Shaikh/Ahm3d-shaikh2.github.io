const MyForm=document.forms["MyForm"]
const input=MyForm["Bar"]
const ul=document.getElementById("Tasklist")
MyForm.addEventListener("submit",(e)=>{
    e.preventDefault()

    const task=input.value
    const Li=document.createElement("li")

    Li.innerHTML=task+"<i onclick=\"deleteTask(this)\" class=\"fa-solid fa-xmark\" style=\"float: right;\"></i>"

    ul.appendChild(Li)

})


function deleteTask(element){
    element.parentElement.remove()
}