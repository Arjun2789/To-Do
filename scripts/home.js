let todos=[]
get_todo()
function get_todo(){
    fetch("http://localhost:3000/to-dos").then(response => response.json())
    .then(data => show_todo_list(data))
    .catch(error => console.error('Error:', error));
}
function show_todo_list(data) {
    let todolist = document.getElementById("todolist")
    data.map((p, i) => {
        todos.push(p)
        let todo=document.createElement("div")
        let name=document.createElement("h2")
        name.innerHTML=p.id+") "+p.title
        let status=document.createElement("p")
        status.innerHTML=p.status
        let edit=document.createElement("button")
        if (p.status=="pending"){
            edit.innerHTML="start task"
        }
        else if(p.status=="in progress"){
            edit.innerHTML="mark as complete"
        }
        else if(p.status=="completed"){
            edit.innerHTML=""
            edit.setAttribute("class","button_hide")
            console.log("abcd")
        }
        todo.append(name,status,edit)

        todolist.append(todo)
    })
}

let button = document.getElementById("button")
button.addEventListener("click", () => {
    let inp = document.getElementById("inpbox").value
    // todos.push({"id":todos.length+1,"title":inp,status:"pending"})
    // console.log(todos)
    fetch("http://localhost:3000/to-dos", {
        method: "post",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        
        //make sure to serialize your JSON body
        body: JSON.stringify({"id":todos.length+1,"title":inp,status:"pending"})
        })

})