let my_form=document.querySelector("form");
let my_task=document.getElementById("task");
let priority=document.getElementById("priority");
let t_body=document.querySelector("tbody");

let user_data=[];

my_form.addEventListener("submit",function(event){
 event.preventDefault()

 let data={
    input : my_task.value ,
    priority : priority.value
 }
 user_data.push(data)
 t_body.innerHTML=""
  user_data.map((el)=>{
    const tr=document.createElement("tr")
    const td1=document.createElement("td")
    const td2=document.createElement("td")
    td1.innerText=el.input
    td2.innerText=el.priority
    tr.append(td1,td2)
    t_body.append(tr)
  })
})