# Webringie Documentation

## Introduction
Welcome to **Webringie**! This tool helps you boost your website’s SEO by allowing you to easily share metadata and backlinks with similar sites. Join a community of websites working together to improve their search engine visibility.

## Getting Started
Getting started with Webringie is simple! Just follow these steps to add your site.

### Adding Your Site to Webringie

**Step 1: Set Up Your API**

Create a `metadata.json` file that includes the necessary metadata for your site. Here's a sample structure:

```json
[
    {
        "website": "https://yourwebsite.com",
        "title": "Your Website Title",
        "description": "A brief description of your website.",
        "keywords": ["keyword1", "keyword2", "keyword3"],
        "backlink": "https://yourwebsite.com/backlink"
    }
]
```

**Step 2: Add the Script Tag**

Add the following `<script>` tag to your HTML:

```html
<script src="https://juliusthejules.github.io/webringie/js/webringie.js" defer></script>
```

This will automatically connect your site to the Webringie API and enable the sharing of your metadata.

**Step 3: Configuration (if necessary)**

If there are any specific configurations needed for the Webringie script, you can outline them here.

## Example Metadata Structure
Provide an example of a `metadata.json` file:

```json
[
    {
        "website": "https://yourwebsite.com",
        "title": "Your Website Title",
        "description": "A brief description of your website.",
        "keywords": ["keyword1", "keyword2", "keyword3"],
        "backlink": "https://yourwebsite.com/backlink"
    }
]
```

### Best Practices for SEO
- **Choose Effective Keywords**: Use keywords relevant to your content and audience.
- **Write Engaging Descriptions**: Capture attention with concise and compelling descriptions.
- **Regularly Update Your Metadata**: Keep your `metadata.json` file current with any changes to your site.

## Troubleshooting
If you encounter any issues while setting up Webringie, check the following:
- **Correct File Path**: Ensure your `metadata.json` is accessible via the correct URL.
- **CORS Issues**: Make sure your server allows cross-origin requests.

## Community Contributions
We welcome contributions! Feel free to suggest features, report bugs, or ask questions on our [GitHub Issues page](https://github.com/juliusthejules/webringie/issues).
