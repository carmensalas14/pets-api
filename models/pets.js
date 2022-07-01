const { pool } = require("../dbconfig");

class Pets {
  static async findAll() {
    const result = await pool.query(`SELECT * from pets";`);
    return result.rows;
  }
}

module.exports = Pets;
