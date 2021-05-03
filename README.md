# NYC Planning Labs Website

[planninglabs.nyc](https://planninglabs.nyc/) built with [Gatsby.js](https://www.gatsbyjs.org/docs/building-with-components/)


![image](https://user-images.githubusercontent.com/409279/34015575-dd993eb6-e0ec-11e7-922e-f545b95819ca.png)


## How you can help

In the spirit of free software, everyone is encouraged to help improve this project.  Here are some ways you can contribute.

- Comment on or clarify [issues](link to issues)
- Report [bugs](link to bugs)
- Suggest new features
- Write or edit documentation
- Write code (no patch is too small):
  - Fix typos
  - Add comments
  - Clean up code
  - Add new features
**[Read more about contributing.](CONTRIBUTING.md)**

## Requirements

You will need the following things properly installed on your computer.

* **[Git](https://git-scm.com/)**
* **[Node.js](https://nodejs.org/)** (with NPM)
  - This installation was tested using Node v14.15.0
* **[gatsby-cli](https://www.npmjs.com/package/gatsby-cli)** (to run [Gatsby](https://www.gatsbyjs.org/) commands)
* **[Yarn](https://yarnpkg.com/)**

## Local development

1. Clone this repo  
   ```sh
   git clone git@github.com:NYCPlanning/labs-planninglabs-home.git
   ```
2. Navigate to the project directory 
   ```sh
   cd labs-planninglabs-home
   ```
3. Install dependencies
   ```sh
   yarn
   ```
4. Start your development server
   ```sh
   gatsby develop
   ```
5.  Go to `localhost:8000` in your web browser, make any code changes in the [src directory](src) and watch as your webpage automatically reloads to show your changes.

_Optional_
- `gatsby build` — Gatsby will perform an optimized production build for your site generating static HTML and per-route JavaScript code bundles.
- `gatsby serve` — Gatsby starts a local HTML server for testing your built site.

## Backend services

- **[Airtable](https://airtable.com/)** (used to manage project content)
- **[labs-ideas-api](https://github.com/NYCPlanning/labs-ideas/)** (pulls in projects from Airtable)

## Deployment

This project can be deployed on any static web server.

- Deploy via Dokku using `npm run deploy`

## Contact us

You can find us on Twitter at [@nycplanninglabs](https://twitter.com/nycplanninglabs), or comment on issues and we'll follow up as soon as we can. If you'd like to send an email, use [labs_dl@planning.nyc.gov](mailto:labs_dl@planning.nyc.gov)
