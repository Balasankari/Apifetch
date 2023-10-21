// Function to fetch data from the API
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to render data in cards
async function renderData() {
    const container = document.querySelector('.container');
    const data = await fetchData();

    if (!data) {
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const postId = document.createElement('h2');
        postId.textContent = item.postID;

        const id = document.createElement('p');
        id.textContent = item.id;

        const name = document.createElement('h2');
        name.textContent = item.name;

        const email = document.createElement('h2');
        email.textContent = item.email;

        const body = document.createElement('p');
        body.textContent = item.body;

        card.appendChild(postId);
        card.appendChild(id);
        card.appendChild(name);
        card.appendChild(email);
        card.appendChild(body);
        container.appendChild(card);
    });
}

// Call the renderData function to display data
renderData();