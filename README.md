# MERNLite &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> A Clean & Minimal Boilerplate for MongoDB + Express + ReactJS + NodeJS Applications

_**Note**: The boilerplate is currently under heavy development!_

## Setup
```bash
git clone https://github.com/dragonman225/mernlite.git
npm install
```
## Feature
#### Development
* Backend server auto restarting
* React hot reloading
* Path alias
    * e.g. `import { server } from '~config'`
* ESLint

## Available Commands
* `npm run dev:app` - Start ReactJS development server
* `npm run dev:server` - Start NodeJS development server
* `npm run build:app` - Build ReactJS production app bundle
* `npm run build:server` - Build NodeJS production server
* `npm run build` - Build both ReactJS app bundle and NodeJS server

## Project Structure
```bash
src
├── app
│   ├── container
│   │   ├── components
│   │   └── Root.js
│   ├── index_dev.js
│   ├── index_prod.js
│   └── template.html
└── server
    ├── api
    │   ├── controllers
    │   │   └── test_controller.js
    │   └── index.js
    ├── config
    │   ├── index.js
    │   └── server.js
    ├── models
    │   ├── index.js
    │   └── test.js
    └── server.js
```
* `src/app/`: React frontend code
    * `container/components`: React components
    * `container/Root.js`: Root component
    * `index_dev.js`: Entry with hot-reloading
    * `index_prod.js`: Entry without hot-reloading
    * `template.html`: HTML base for React app bundle
* `src/server/`: Backend code
    * `api/controllers/`: Controllers to handle routes. One controller for one feature group.
    * `api/index.js`: Define routes.
    * `config/`: Store settings.
    * `models/`: Mongoose Schemas. One file for one Schema group, registered in `index.js`
    * `server.js`: Entry for server

## Current status
- [x] #### Mongodb interfacing
    * Test with:
        * `GET` `/api/testa` -  Get all data from collection `testa` in database `mernlite` in `json` format.
        * `POST` `/api/testa` -  Save data to collection `testa` in database `mernlite`. Request body format: `{ "name": "a string" }`.
- [x] #### Build for Production
- [x] #### ReactJS hot reloading
- [ ] #### Improve full-stack development flow
    * Integrate fronend dev server into backend dev server.
- [ ] #### Test real app development experience
