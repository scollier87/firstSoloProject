#!/usr/bin/env node
// backend/bin/www
const { port } = require('../config');

const app = require('../app');
const db = require('../db/models');

// Check the database connection before starting the app
db.sequelize
  .authenticate()
  .then(() => {

    app.listen(port, () => console.log(`Listening on port ${port}...`));
  })
  .catch((err) => {
    console.error(err);
  });
