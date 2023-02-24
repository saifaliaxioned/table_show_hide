const serialNum = document.querySelectorAll('.serial-num'),
  firstName = document.querySelectorAll('.f-name'),
  lastName = document.querySelectorAll('.l-name'),
  dob = document.querySelectorAll('.dob'),
  address = document.querySelectorAll('.address'),
  headingRow = document.querySelector('.heading-row'),
  isNo = document.querySelector('#No'),
  isFirstName = document.querySelector('#first-name'),
  isLastName = document.querySelector('#last-name'),
  isDob = document.querySelector('#date-of-birth'),
  isAddress = document.querySelector('#address'),
  allInput = document.querySelectorAll('.filter-form input'),
  form = document.querySelector('.filter-form'),
  body = document.querySelector('body');

let timeout;
// function to filter list by inputs
let checkedCount;
allInput.forEach(inp => {
  inp.checked = true;
  inp.addEventListener('click', () => {
    if (checkedCount != 0) {
      form.classList.add('hide-content');
      getChecked();
    }
  });
});

// function to show filter form
headingRow.addEventListener('click', (e) => {
  checkedCount = isFirstName.checked + isLastName.checked + isDob.checked + isAddress.checked + isNo.checked;
  getChecked();
  let pLeft = e.clientX;
  let pTop = e.clientY;
  form.style.top = pTop + 'px';
  form.style.left = pLeft + 'px';
  form.classList.toggle('hide-content');
});

// function to validate input is checked or not
const getChecked = () => {
  const checkInput = (input, param) => {
    param.forEach((list) => {
      if (!input.checked) {
        list.classList.add('hide-content');
      } else {
        if (checkedCount == 1) {
          input.checked = true;
          input.disabled = true;
        } else {
          input.disabled = false;
        }
        list.classList.remove('hide-content');
      }
    });
  };
  checkInput(isNo, serialNum);
  checkInput(isFirstName, firstName);
  checkInput(isLastName, lastName);
  checkInput(isDob, dob);
  checkInput(isAddress, address);
}



























