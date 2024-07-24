// using html element in javascript
let expence = document.querySelector('#expence')
let description = document.querySelector('#description')
let list = document.querySelector('#list')
let form = document.querySelector('form')

// Expenece Data
let expenceData = []
// let sendLocalStorage = () => {
//     localStorage.setItem('sendLocal', JSON.stringify(expenceData))
// }

form.addEventListener('submit', event => {
    event.preventDefault()

    if (expence.value === '' || description.value === '') {
        alert('please enter value!')
    } else {
        // save data to expence data
        expenceData.push({
            expence: expence.value,
            description: description.value
        })
        // console.log(expenceData);
        renderScreen()

        // for empty input
        expence.value = ''
        description.value = ''
    }
})

// let getLocalData = JSON.parse(localStorage.getItem('sendLocal'))
// console.log(getLocalData);

let renderScreen = () => {
    list.innerHTML = ''
    expenceData.map((item, index) => {
        list.innerHTML += `
        <li class='textlarg d-flex mt-3 justify-content-between'>${item.expence} <div>${item.description}</div> <div><button onclick='deleteBtn(${index})' class='btn btn-danger'>Delete</button><button onclick='editBtn(${index})' class='btn btn-primary'>Edit</button></div></li>
        `
    })

}

// DELETE BUTTON CREATED
function deleteBtn(index) {
    console.log(index);
    expenceData.splice(index, 1)
    renderScreen()
}

// EDIT BUTTON CREATED
function editBtn(index){
    // console.log(index);
    let ubdateValue = prompt('Edit Expenece')
    expenceData.splice(expenceData.expence, 1, ubdateValue)
    renderScreen()
}

