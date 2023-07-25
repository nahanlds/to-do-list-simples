const enviar = document.querySelector('#todo-form')
const tarefaValue = document.querySelector('#tarefa')
const tarefa = document.querySelector('#addTask')
const inputTask = document.querySelector('#tarefa')
const erro = document.querySelector('#erro');


enviar.addEventListener("submit",  function(e){
    e.preventDefault();

    if(tarefaValue.value.length == 0){
        erro.innerText = 'Por favor, insira uma tarefa'
        erro.style.display = "block"
    } else {
        tarefa.innerHTML += ` 
            <div class="task">
                <span id="taskname">
                    ${inputTask.value}
                </span>
                <button class="delete"></button>
                </div>
                `;
                erro.style.display = "none"
            }
            
            const delet = document.querySelectorAll('.delete');
            for(let i = 0; i< delet.length; i++){
                delet[i].onclick = function(){
                    this.parentNode.remove();
                }
                
            }
            
            const task = document.querySelectorAll('#taskname');
            for (let i = 0; i < task.length; i++) {
        task[i].onclick = function(){
            this.classList.toggle('completed');
        }
    }
    
    // <button class="edit"></button>
    // const edit = document.querySelectorAll('.edit');
    // const editForm =document.querySelector('#edit-form');
    // const atTask = document.querySelector('#atualizarTask');
    // const ta = document.querySelector('span');
    // console.log(ta.innerText)
    // for (let i = 0; i < edit.length; i++) {
        //     edit[i].onclick = function(e) {
            //         e.preventDefault();
            //         enviar.classList.toggle('hide');
    //         editForm.classList.toggle('hide');
    //         atTask.value = ta.innerText;
    //     }
        
    // }

    
    tarefaValue.value = ""
})
    
