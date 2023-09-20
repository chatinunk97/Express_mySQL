const pool = require("../connectionPool");

module.exports = async (req, res, next) => {
  const { title, completed, user_id } = req.query;

  try {
    const [{ insertId }] = await pool.query(
      `INSERT INTO todos (title,completed,user_id) VALUES (?,?,?)`,
      [title, completed, user_id]
    );
    const [[data]] = await pool.query(`SELECT * FROM todos WHERE id = ?`, 
    [insertId]);
    res.json({ msg: "Created a new Todo!", newTodo: data });
  } catch (err) {
    next(err);
  }
};
