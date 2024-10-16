// Webringie API for fetching and applying metadata
async function fetchMetadata(apiUrl) {
  try {
    let response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Error fetching data");
    let data = await response.json();
    console.log("Fetched Metadata:", data);
    updateContent(data[0]); // You can extend this to iterate through all available metadata
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("webringie-content").innerText = "Error fetching metadata.";
  }
}

function updateContent(metadata) {
  if (metadata) {
    // Dynamically update meta tags with fetched metadata
    document.querySelector('meta[name="keywords"]').setAttribute('content', metadata.keywords.join(', '));
    document.querySelector('meta[name="description"]').setAttribute('content', metadata.description);

    // Update the div content with fetched metadata
    let contentDiv = document.getElementById("webringie-content");
    contentDiv.innerHTML = `
      <h2>${metadata.title}</h2>
      <p>${metadata.description}</p>
      <p><strong>Keywords:</strong> ${metadata.keywords.join(', ')}</p>
      <a href="${metadata.backlink}" target="_blank">Visit ${metadata.website}</a>
    `;

    console.log("Metadata applied successfully!");
  } else {
    console.error("No metadata available to update");
    document.getElementById("webringie-content").innerText = "No metadata available.";
  }
}

// Example of calling the fetch function
fetchMetadata("https://juliusthejules.github.io/webringie/api/metadata.json");
