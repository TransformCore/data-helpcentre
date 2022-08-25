# Helpcentre

## Contents
- [Working Locally](#working-locally)  

## Working Locally

### Dependencies

- NodeJS

### Running

Any number of the commands to minify the assets can be run such as `npm run minify:js` or there's a `npm start` command that'll build the majority of the assets and then serve the application on `http://localhost:5000`

At the moment this hasn't been written to _watch_ files and/or generate minified css on the fly.

### Adding new clients

If you wish to add a new client, add a new folder to the `clients/` folder with the project number, then add the `index.html` file either from the root or one of the clients. If you require overrides add the `client.css` file and make your changes.

This is all picked up on build as we look for `client.css` and `index.html` within `clients/*`

Note: If you use the `index.html` file from the root directory it doesn't include the `<link rel="stylesheet" href="client.min.css" type="text/css"/>` you probably need to include the stylesheet overrides in that folder.

You can also just add `<style> // your styles </style>` to the `<head></head>` as there's nothing really stopping you doing that either.
