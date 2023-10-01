let t_body = document.querySelector("tbody");
async function todos() {
  try {
    let res = await fetch(`http://localhost:3000/datas`);
    let data = await res.json();
    print_todos(data);
  } catch (error) {
    console.log(error);
  }
}
todos();

function print_todos(array) {
  array.forEach((element) => {
    console.log(element);
    // table data row element
    let tr = document.createElement("tr");
    // id element table data
    let id = document.createElement("td");
    id.textContent = element.id;
    // title
    let title = document.createElement("td");
    title.textContent = element.title;
    // staus
    let status = document.createElement("td");
    status.textContent = `Is task completed:${element.completed.toString()}`;

    tr.append(id, title, status);
    t_body.append(tr);
  });
}