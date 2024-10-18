// Your Gravatar API Key and email hash
const apiKey = '1321:gk-wv0Nra44364zrsYcK3ZzKSHmHAaF_39LlaUWE4_Io8fm-7hWyqQyr4W2fvM5T';  // Replace with the actual key
const emailHash = 'cd92f76eda6c62c924ad41c6ca5f02cf'; // You can use MD5 hash of your email

// Fetch the Gravatar profile
fetch(`https://en.gravatar.com/${emailHash}.json?apikey=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const profile = data.entry[0];
    const container = document.getElementById('gravatar-container');

    // Display profile details
    container.innerHTML = `
      <img src="${profile.photos[0].value}" alt="Gravatar Profile Photo" style="border-radius: 50%;">
      <h3>${profile.displayName}</h3>
      <p>${profile.aboutMe}</p>
      <a href="${profile.profileUrl}" target="_blank">View Full Gravatar Profile</a>
    `;
  })
  .catch(error => console.error('Error fetching Gravatar profile:', error));