# MERNLite &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> A Clean & Minimal Boilerplate for MongoDB + Express + ReactJS + NodeJS Applications

_**Note**: The boilerplate is currently under heavy development!_

## Setup
```bash
git clone https://github.com/dragonman225/mernlite.git
npm install
```
## Feature
* Development server auto reloading
* Path alias
    * e.g. `import { server } from 'config'`
* ESLint

## Available Commands
* `npm run dev` - Start development server
* `npm run build:app` - Build ReactJS production app bundle
* `npm run build:server` - Build NodeJS production server
* `npm run build` - Build both ReactJS app bundle and NodeJS server

## Project Structure
```bash
src
├── app
│   └── index.js
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
* `src/server/`: Backend code
* `src/api/`: `index.js` define routes.
* `src/api/controllers/`: Handle routes. One controller for one feature group.
* `src/config/`: Store settings.
* `src/models/`: Mongoose Schemas. One file for one Schema group, registered in `index.js`

## Current status
- [x] #### Mongodb interfacing
    * Test with:
        * `GET` `/api/testa` -  Get all data from collection `testa` in database `fongmun` in `json` format.
        * `POST` `/api/testa` -  Save data to collection `testa` in database `fongmun`. Request body format: `{ "name": "a string" }`.
- [x] #### Build for Production
- [ ] #### ReactJS hot reloading
- [ ] #### Test real app development experience
