const getUsers = document.getElementById('getUsers');
const userGrid = document.getElementById('userGrid');
const loader = document.getElementById('loader');

getUsers.addEventListener('click', () => {
  loader.style.display = 'flex';
  setTimeout(function(){
  fetch('https://reqres.in/api/users?page=1')
    .then((response) => response.json())
    .then((data) => {
      userGrid.innerHTML = '';
      loader.style.display = 'none';
      data.data.forEach((user) => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');
        userCard.innerHTML = `
          <img src="${user.avatar}" alt="User Avatar">
          <h3>${user.first_name} ${user.last_name}</h3>
          <p>Email: ${user.email}</p>
        `;
        userGrid.appendChild(userCard);
      });
    })
    .catch((error) => {
      console.error('Error fetching users:', error);
    });
},1000)
});
