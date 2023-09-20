const pool = require("../connectionPool");

module.exports = async (req, res, next) => {
  const { todo, user_id } = req.query;
  try {
    const data = await pool.query(
      `SELECT * FROM todos WHERE title = ? AND user_id = ?`,
      [todo, user_id]
    );
    if (data[0][0]) {
      res.json({ msg: "Todo Found!", result: data[0][0] });
      return;
    }
    res.status(404).json({ msg: "Todo NOT FOUND" });
  } catch (err) {
    next(err);
  }
};
