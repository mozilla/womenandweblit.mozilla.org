# Women and Web Literacy

[![Build Status](https://travis-ci.org/mozilla/womenandweb.svg)](https://travis-ci.org/mozilla/womenandweb)
[![Shipping fast with zenHub](https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png)](https://zenhub.com)
[![Uses Mofo Standards](https://MozillaFoundation.github.io/mofo-standards/badge.svg)](https://github.com/MozillaFoundation/mofo-standards)

This repository hosts the code used to power the Women and Web Literacy hub's website.

## Development

### Setup

**Requirements**: Node, npm, git.

Run the following terminal commands to get started:

- `git clone https://github.com/mozilla/womenandweb.git`
- `cd womenandweb`
- `npm start`

This will install all dependencies, build the code, start a server at [http://127.0.0.1:2040](http://127.0.0.1:2040), and launch it in your default browser.

### File Structure

```
.
├── dest <- Compiled code generated from source. Don't edit!
├── scripts <- Scripts run by npm tasks
└── source <- Source code
    ├── images <- Image assets
    ├── index.pug <- Pug/Jade template for index page
    ├── markdown <- Markdown partials
    └── sass <- Sass code
```

### Deployment

#### Production

Any commits to the `master` branch on this repo will trigger an automatic build and deploy to [GitHub Pages](https://mozilla.github.io/womenandweb/).

#### Staging

There is currently no common staging environment for this project. However, you can easily deploy a staged build to your own fork using the following command: `npm run stage REMOTE`. Be sure to substitute `REMOTE` with the name of your personal remote. Also, be sure not to have `npm start` or `npm server` running when you run the staging command.
