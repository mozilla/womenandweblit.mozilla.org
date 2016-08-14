# Women and Web Literacy

[![Build Status](https://travis-ci.org/mozilla/womenandweb.svg)](https://travis-ci.org/mozilla/woemnandweb)
[![Shipping fast with zenHub](https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png)](https://zenhub.com)

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
