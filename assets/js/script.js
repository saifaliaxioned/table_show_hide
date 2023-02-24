const data = [{
  serialid: '1',
  firstname: 'Andrea',
  lastname: 'Ross',
  dob: '1985-12-24',
  address: '95945 Rodrick Crossroad'
}, {
  serialid: '2',
  firstname: 'Penelope',
  lastname: 'Mills',
  dob: '1978-8-11',
  address: '81328 Eleazar Fork'
}, {
  serialid: '3',
  firstname: 'Sarah',
  lastname: 'Grant',
  dob: '1981-5-9',
  address: '5050 Boyer Forks'
}, {
  serialid: '4',
  firstname: 'Vanessa',
  lastname: 'Roberts',
  dob: '1980-9-27',
  address: '765 Daryl Street'
}, {
  serialid: '5',
  firstname: 'Oliver',
  lastname: 'Alsop',
  dob: '1986-10-30',
  address: '1424 Ritchie Garden'
}, {
  serialid: '6',
  firstname: 'Jennifer',
  lastname: 'Forsyth',
  dob: '1983-3-13',
  address: '04640 Nader Ramp'
}, {
  serialid: '7',
  firstname: 'Michelle',
  lastname: 'King',
  dob: '1980-8-29',
  address: '272 Alysa Fall'
}, {
  serialid: '8',
  firstname: 'Steven',
  lastname: 'Kelly',
  dob: '1989-8-6',
  address: '5749 Foster Pike'
}, {
  serialid: '9',
  firstname: 'Julian',
  lastname: 'Ferguson',
  dob: '1981-9-17',
  address: '6196 Wilkinson Parkways'
}, {
  serialid: '10',
  firstname: 'Chloe',
  lastname: 'Ince',
  dob: '1983-10-28',
  address: '9069 Daniel Shoals'
}];
const table = document.querySelector('.table');
// function to create table data
const buildTable = (data) => {
  data.forEach((obj) => {
    const tr = document.createElement('tr');
    tr.classList.add('user-row');
    tr.innerHTML = ` <td class="serial-num">${obj.serialid}</td>
    <td class="f-name">${obj.firstname}</td>
    <td class="l-name">${obj.lastname}</td>
    <td class="dob">${obj.dob}</td>
    <td class="address">${obj.address}</td>`;
    table.appendChild(tr);
  });
}
// initial table created
buildTable(data);

const serialNum = document.querySelectorAll('.serial-num'),
  firstName = document.querySelectorAll('.f-name'),
  lastName = document.querySelectorAll('.l-name'),
  dob = document.querySelectorAll('.dob'),
  address = document.querySelectorAll('.address'),
  headingRow = document.querySelector('.heading-row');

// function to generate form
const generateForm = () => {
  const formContainer = document.createElement('div');
  formContainer.classList.add('form-container');
  formContainer.innerHTML = `<form action="#FIXME" method="post" class="filter-form hide-content">
  <div class="input-group">
    <input type="checkbox" name="No" id="No">
    <label for="No">No.</label>
  </div>
  <div class="input-group">
    <input type="checkbox" name="first-name" id="first-name">
    <label for="first-name">First name</label>
  </div>
  <div class="input-group">
    <input type="checkbox" name="last-name" id="last-name">
    <label for="last-name">Last name</label>
  </div>
  <div class="input-group">
    <input type="checkbox" name="date-of-birth" id="date-of-birth">
    <label for="date-of-birth">Date of birth</label>
  </div>
  <div class="input-group">
    <input type="checkbox" name="address" id="address">
    <label for="address">Address</label>
  </div>
</form>`;
  table.appendChild(formContainer);
}

generateForm();
const isNo = document.querySelector('#No'),
  isFirstName = document.querySelector('#first-name'),
  isLastName = document.querySelector('#last-name'),
  isDob = document.querySelector('#date-of-birth'),
  isAddress = document.querySelector('#address'),
  allInput = document.querySelectorAll('.filter-form input'),
  form = document.querySelector('.filter-form');

let timeout;

// function to filter list by inputs
let checkedCount;
allInput.forEach(inp => {
  inp.checked = true;
  inp.addEventListener('click', () => {
    checkedCount = isFirstName.checked + isLastName.checked + isDob.checked + isAddress.checked + isNo.checked;
    if (checkedCount < 1) {
      inp.checked = true;
    } else {
      form.classList.add('hide-content');
      checkInput(isNo, serialNum);
      checkInput(isFirstName, firstName);
      checkInput(isLastName, lastName);
      checkInput(isDob, dob);
      checkInput(isAddress, address);
    }
  });
});

// function to show filter form
headingRow.addEventListener('click', (e) => {
  clearTimeout(timeout);
  allInput.forEach((inp) => {
    if (checkedCount === 1) {
      inp.disabled = true;
    }
  })
  let pLeft = e.clientX;
  let pTop = e.clientY;
  form.style.top = pTop + 'px';
  form.style.left = pLeft + 'px';
  form.classList.remove('hide-content');
  timeout = setTimeout(() => {
    form.classList.add('hide-content');
  }, 4000);
});

// function to validate input is checked or not
const checkInput = (input, param) => {
  param.forEach((list) => {
    if (!input.checked) {
      list.classList.add('hide-content');
    } else {
      list.classList.remove('hide-content');
    }
  });
};



























