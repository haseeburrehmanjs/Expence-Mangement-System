// using html element in javascript
let expence = document.querySelector('#expence')
let description = document.querySelector('#description')
let form = document.querySelector('form')

// Expenece Data
let expenceData = []
let sendLocalStorage = () => {
    localStorage.setItem('sendLocal' , JSON.stringify(expenceData))
}

form.addEventListener('submit', event => {
    event.preventDefault()
    
    if(expence.value === '' || description.value === ''){
        alert('please enter value!')
    }else {
        // save data to expence data
    expenceData.push({
        expence : expence.value,
        description : description.value
    })
    sendLocalStorage()
    // console.log(expenceData);

    // for empty input
    expence.value = ''
    description.value = ''
    }
})

let getLocalData = JSON.parse(localStorage.getItem('sendLocal'))
console.log(getLocalData);

let renderScreen = ()=> {
    getLocalData.map((item, index) => {
        console.log(item);
    })
}
renderScreen()