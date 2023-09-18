const mysql = require('mysql2');
const { getEnv } = require('../utils/env');

exports.ping = (_, res) => res.send('pong');

exports.testConnection = async (_, res) => {
  const connection = mysql.createConnection({
    host: getEnv('DB_HOST'),
    user: getEnv('DB_USER'),
    password: getEnv('DB_PWD'),
    port: getEnv('DB_PORT'),
  });

  connection.connect((err) => {
    if (err) {
      res.status(500).send({ message: `Connection failed ${err}`, error: err });
      return;
    }

    res.status(200).send({ message: 'Connection successful' });
  });

  connection.end;
};
