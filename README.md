# Webringie

## Overview
**Webringie** is a decentralized SEO tool designed to help websites within the same niche or community share metadata and backlinks to improve their visibility in search engines. By connecting websites, Webringie enables enhanced cross-linking and metadata updates, boosting discoverability for all participants.

## Features
- **Metadata Exchange**: Fetch SEO-related metadata such as keywords and descriptions from other websites in the ring.
- **Backlinks**: Automatically generate backlinks to other sites in the ring.
- **Asynchronous Updates**: Integrate and update metadata seamlessly with JavaScript.

## How to Use
1. Add the following code to your website to integrate Webringie:

```html
<script src="https://juliusthejules.github.io/webringie/js/webringie.js" defer></script>
```

2. Ensure the API is fetching data from the correct endpoint:

```javascript
fetchMetadata("https://juliusthejules.github.io/webringie/api/metadata.json");
```

3. The script will automatically update your meta tags and insert backlinks into your page.

## License
This project is licensed under the [Apache 2.0 License](LICENSE).