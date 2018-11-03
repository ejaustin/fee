/**
 * Site for Fourth Era Explorers Elder Scrolls Online Guild.
 *
 * Code references:
 * - github.com/aws-samples/eb-node-express-sample
 */

const express = require('express');
const app = express();

console.log('Starting FFE log.');

// Routing.
app.get('/', (req, resp) => {
  resp.send('Hello there from Fourth Era Explorers');
});

// Start the server.
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}.`));