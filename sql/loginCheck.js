const pool = require("../connectionPool");

module.exports = async (req, res,next) => {
  const { user, pw } = req.body;

  try{
    const data = await pool.query(
        `SELECT * FROM users u WHERE u.username = ? AND u.password = ? `,
        [user, pw]
      );
    
        if(data[0][0]){
            res.json({ msg: "Login Sucess!" , userInfo :data[0][0] })
            return
        }
        res.status(404).json({ msg: "Login Failed" });

  }catch(err){
    next(err)
  }

};
