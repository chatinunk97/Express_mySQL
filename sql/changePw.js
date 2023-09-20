const pool = require("../connectionPool");

module.exports = async (req, res, next) => {
    const {user,pw} = req.body
    try {
    const data = await pool.query(
      `
        UPDATE users SET password = ?
          WHERE username = ?;`,
      [pw,user]
    );

    res.json({ msg: data[0].info });
  } catch (err) {
    next(err);
  }
};
