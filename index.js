document.querySelector('#add').onclick=function (){
    if(document.querySelector('#addtask input').
    value.length == 0){
        alert("Please enter a task")
    }
    else{
        document.querySelector('#displaytasks').innerHTML +=
        `
        <div class="task">
                <span id="taskname">
                ${document.querySelector('#addtask input').value}
                </span>
                <button class="delete">
                    <i class="fa-regular fa-trash-can"></i>
                </button>   
        </div>
        `
        let current_task= document.querySelectorAll(".delete")
        for (let i=0; i<current_task.length; i++){
            current_task[i].onclick=function(){
                this.parentNode.remove()
            }
        }
        let tasks=document.querySelectorAll('.task')
        for(let i=0; i<tasks.length; i++){
            tasks[i].onclick=function(){
               this.classList.toggle('completed')
            }
        }
        document.querySelector("#addtask input").value=""
    

    }
}