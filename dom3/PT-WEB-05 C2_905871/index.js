// fill in javascript code here
let my_form = document.querySelector("form")
let user_name = document.querySelector("#name")
let Id = document.querySelector("#docID")
let depertment = document.querySelector("#dept")
let exp = document.querySelector("#exp")
let email = document.querySelector("#email")
let contact_num = document.querySelector("#mbl")
let t_body = document.querySelector("tbody")

let user_data = []

my_form.addEventListener("submit", function (event) {
    event.preventDefault()
    let emp_role = ""
    if (exp.value > 5) {
        emp_role = "Senior"
    } else if (exp.value >= 2 && exp.value <= 5) {
        emp_role = "Junior"

    } else {
        emp_role = "Trainee"
    }

    let data = {
        name: user_name.value,
        doc_ID:Id.value,
        depertment: depertment.value,
        experience: exp.value,
        email: email.value,
        mobile_number: contact_num.value,
        role: emp_role,

    }
    user_data.push(data)
    t_body.innerHTML = ""
    displayData(user_data)

})

function displayData(user_datas) {
    sorting(user_datas)
    user_datas.map((el,) => {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let td5 = document.createElement("td")
        let td6 = document.createElement("td")
        let td7 = document.createElement("td")
        let td8 = document.createElement("button")

        td1.innerText = el.name
        td2.innerText = el.doc_ID
        td3.innerText = el.depertment
        td4.innerText = el.experience
        td5.innerText = el.email
        td6.innerText = el.mobile_number
        td7.innerText = el.role
        td8.innerText = "Delete"
        td8.addEventListener("click", function removeItem() {
            let updatedData = user_datas.filter((filter) => filter.doc_ID != el.doc_ID)
            user_data = updatedData
            t_body.innerHTML = ""
            displayData(user_data)
        })
        tr.append(td1, td2, td3, td4, td5, td6, td7, td8)
        t_body.append(tr)
       console.log(user_data);
    })
}

function sorting(sorting_datas) {
    sorting_datas.sort((a, b) => {
        return a.experience - b.experience

    })
}

