document.addEventListener('DOMContentLoaded', function () {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const usersContainer = document.getElementById('usersContainer');
            usersContainer.innerHTML = ''; 

            users.forEach(user => {
                const userCard = document.createElement('div');
                userCard.className = 'user-card';
                userCard.innerHTML = `
                    <h2>${user.name}</h2>
                    <p>${user.email}</p>
                    <a href="posts.html?userId=${user.id}">Gönderileri görüntüle</a>
                `;
                usersContainer.appendChild(userCard);
            });
        });
});
