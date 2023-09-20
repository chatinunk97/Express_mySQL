const pool = require("../connectionPool");

module.exports = async (req, res, next) => {
  const { user, pw } = req.body;
  try {
    const [{ insertId }] = await pool.query(
      `INSERT INTO users (username , password)VALUES (?,?)`,
      [user, pw]
    );

    const [newUser] = await pool.query(`SELECT * FROM users WHERE id = ?`, [
      insertId,
    ]);

    res.json({ msg: "Register Completed", newUserData: newUser });
  } catch (err) {
    next(err);
  }
};
