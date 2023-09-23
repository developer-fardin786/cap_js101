function set_data() {
  let user_name = document.querySelector("#name").value;
  let user_age = document.querySelector("#age").value;
  localStorage.setItem("user_name", user_name);
  localStorage.setItem("user_age", user_age);
}
let tbody = document.querySelector("tbody");
let table = document.querySelector("table");
function retrive_display() {
  if (localStorage !== "") {
    let tr = document.createElement("tr");
    let th1 = document.createElement("td");
    let th2 = document.createElement("td");
    let name = localStorage.getItem("user_name");
    let age = localStorage.getItem("user_age");
    th1.textContent = name;
    th2.textContent = age;
    tr.append(th1, th2);
    tbody.append(tr);
    localStorage.clear();
  }
}
