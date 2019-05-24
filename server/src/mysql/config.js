const mysql = require("mysql");

const pool = mysql.createPool({
  database: "study",
  user: "root",
  password: "root",
  host: "localhost",
  connectionLimit: 30,
  connectTimeout: 180 * 1000
});

const query = (sql, holder) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.log("mysql connection is err!", err);
        reject(err);
      } else {
        connection.query(sql, holder, (err, result, fields) => {
          if (err) {
            console.log("query sql is err!", err);
            reject(err);
          } else {
            resolve(result, fields);
          }
          connection.release();
        });
      }
    });
  });
};

module.exports = {
  query
};
