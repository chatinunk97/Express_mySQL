const pool = require("../connectionPool");

module.exports = async(req,res)=>{
    const {id} = req.params
    
    const [{affectedRows}] = await pool.query(`DELETE FROM todos WHERE id = ?`,[id])
    console.log(affectedRows)
    res.json({affectedRows : affectedRows})
}