# FongMUN

## Development Environment
### Install dependencies
```
npm install
```

### NPM Scripts
* Start development server
```
npm run dev
```

### Project Structure
```
src
├── app
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
* `app/`: React frontend code
* `server/`: Backend code
* `api/`: `index.js` define routes.
* `api/controllers/`: Handle routes. One controller for one feature group.
* `config/`: Store settings.
* `models/`: Mongoose Schemas. One file for one Schema group, registered in `index.js`

### Current status
* Finish mongodb interfacing, test with:
    * `GET` `/api/testa`: Get all data from collection `testa` in database `fongmun` in `json` format.
    * `POST` `/api/testa`: Save data to collection `testa` in database `fongmun`. Request body format: `{ "name": "a string" }`.
