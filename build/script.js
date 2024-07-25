let expenseName = document.querySelector('#expenseName')
let expenseAmount = document.querySelector('#expenseAmount')
let expenseForm = document.querySelector('#expenseForm')
let expenseTable = document.querySelector('#expenseTable')

let expence = []

let renderScreen = () => {
    expenseTable.innerHTML = ''

    expence.map((item, index) => {
        console.log(item);
        expenseTable.innerHTML += `
      <th scope="row">${index + 1}</th>
      <td>${item.expenseName}</td>
      <td>${item.expenseAmount}</td>
      <td>
        <button class="btn btn-danger btn-sm" onclick="deleteExpense(${index})">Delete</button>
      </td>
    `
    })
}

expenseForm.addEventListener('submit', event => {
    event.preventDefault()

    expence.push({
        expenseName: expenseName.value,
        expenseAmount: expenseAmount.value
    })
    console.log(expence);
    expenseName.value = ''
    expenseAmount.value = ''
    renderScreen()

})


function deleteExpense(index) {
    expence.splice(index, 1)
    renderScreen()
}
