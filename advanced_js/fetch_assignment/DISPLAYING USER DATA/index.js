let container = document.getElementById("container");

let data = [];

// console.log("--->", data);
function display_user_data() {
  fetch("https://reqres.in/api/users")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      data = res.data;
      createElement(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
function createElement(data) {
  data.forEach(function (user) {
    console.log(user);
    let card_div = document.createElement("div");

    let avatar = document.createElement("img");
    avatar.src = user.avatar;

    let name = document.createElement("p");
    name.textContent = 'Name : '+user.first_name + user.last_name;

    let email = document.createElement("p");
    email.textContent='Email : ' +user.email

    card_div.append(avatar, name,email);
    container.appendChild(card_div);
  });
}
