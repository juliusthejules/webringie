fetch('./API/metadata.json')
    .then(response => response.json())
    .then(data => {
        // Inject metadata into the head section
        if (data.keywords) {
            let metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            metaKeywords.content = data.keywords.join(', ');
            document.head.appendChild(metaKeywords);
        }

        if (data.viewport) {
            let metaViewport = document.createElement('meta');
            metaViewport.name = 'viewport';
            metaViewport.content = data.viewport;
            document.head.appendChild(metaViewport);
        }

        if (data.robots) {
            let metaRobots = document.createElement('meta');
            metaRobots.name = 'robots';
            metaRobots.content = data.robots;
            document.head.appendChild(metaRobots);
        }
    })
    .catch(error => console.error('Error loading metadata:', error));
