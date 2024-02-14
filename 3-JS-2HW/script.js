const idInput = document.getElementById('idInput');
const getDataBtn = document.getElementById('getDataBtn');
const nameElement = document.getElementById('name');
const usernameElement = document.getElementById('username');
const phoneElement = document.getElementById('phone');

getDataBtn.addEventListener('click', fetchData);

function fetchData() {
  const id = idInput.value;
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;   

  fetch(url)
    .then(response => response.json())
    .then(data => {
      nameElement.textContent = data.name;
      usernameElement.textContent = data.username;
      phoneElement.textContent = data.phone;
    })
    .catch(error => console.log(error));
}

idInput.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    fetchData();
  }
});