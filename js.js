let table = document.querySelector('#table');
table.addEventListener('click', function(event) {
  let tag = event.target.tagName.toLowerCase();
  if (tag != 'th') {
    let value = prompt('Enter name/surname');
     if (value != null) {
       event.target.innerHTML = value;
     };
  };
});

function addValue() {
  let name = document.querySelector('#name');
  let surname = document.querySelector('#surname');
 
  if (!isNaN(name.value) || !isNaN(surname.value)) {
     alert('Enter name/surname!');     
  } else {
    let tr = document.createElement('tr');
     for (let i = 1; i <= 2; i++) {
       let td = document.createElement('td');
       if (i == 1) {
         td.innerHTML = name.value;
         name.value = '';
       } else if (i == 2) {
         td.innerHTML = surname.value;
         surname.value = '';
       };
       tr.appendChild(td);
     };
    table.appendChild(tr);
  };
};