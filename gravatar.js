const hash = 'ce1037032b7a2e5497532f46a3e62d8fcaf2eae6b9c9463672bf29012568d4b4'; // Your MD5 hash

// API Key for the request
const apiKey = '1321:gk-wv0Nra44364zrsYcK3ZzKSHmHAaF_39LlaUWE4_Io8fm-7hWyqQyr4W2fvM5T';

// Make the API request
fetch(`https://en.gravatar.com/${hash}.json?key=${apiKey}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        // Here you can insert the data into your webpage, for example:
        document.getElementById('gravatar-profile').innerHTML = `
            <h3>${data.entry[0].displayName}</h3>
            <p>${data.entry[0].aboutMe}</p>
            <img src="${data.entry[0].thumbnailUrl}" alt="Gravatar Profile Picture">
        `;
    })
    .catch(error => console.error('There was a problem with the fetch operation:', error));
