document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    let userId = params.get('userId');


    if (!userId) {
        userId = prompt('Lütfen bir kullanıcı ID girin (1-10 arasında):');
        if (isNaN(userId) || userId < 1 || userId > 10) {
            alert('Geçersiz kullanıcı ID');
            throw new Error('Geçersiz kullanıcı ID');
        }
    }

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => {
            const postsContainer = document.getElementById('postsContainer');
            postsContainer.innerHTML = ''; 

            posts.forEach(post => {
                const postCard = document.createElement('div');
                postCard.className = 'post-card';
                postCard.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                `;
                postsContainer.appendChild(postCard);
            });
        });

    document.getElementById('backToUsers').addEventListener('click', function () {
        window.location.href = 'index.html';
    });
});
