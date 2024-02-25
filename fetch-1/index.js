let form = document.querySelector('form');
let nameField = document.getElementById('name');
let ageField = document.getElementById('age');
let btn = document.querySelector('button');
btn.addEventListener('click',displayData);
let arr = JSON.parse(localStorage.getItem('info')) || [];
form.addEventListener('submit',takeData);
function takeData(e){
    e.preventDefault();
    console.log('xyz');
    let name = nameField.value;
    let age = ageField.value;
    let obj = {
        name,
        age
    }
    arr.push(obj);
    localStorage.setItem('info',JSON.stringify(arr));
    nameField.value = "";
    ageField.value = "";
}
function displayData(){
    let thead = document.querySelector('thead');
    thead.style.display = 'table-header-group';
    let storedArr = JSON.parse(localStorage.getItem('info'));
    storedArr.forEach((obj) => {
        let tr = document.createElement('tr');
        for(let key in obj){
            let td = document.createElement('td');
            td.textContent = obj[key];
            tr.append(td);
        }
        let tBody = document.querySelector('tbody');
        tBody.append(tr);
    })
}

