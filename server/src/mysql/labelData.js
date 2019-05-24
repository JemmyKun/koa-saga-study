const { query } = require("./config");

class LabelData {
  insertData(param) {
    let { title } = param;
    let createTime = Date.now();
    let updateTime = createTime;
    let status = "0";
    let sql =
      "INSERT INTO saga_study(title,createTime,updateTime,status) VALUES(?,?,?,?)";
    return query(sql, [title, createTime, updateTime, status]);
  }
  deleteData(param) {
    let { id } = param;
    let sql = "DELETE FROM saga_study WHERE id=?";
    return query(sql, [id]);
  }
  updateTitle(param) {
    let { title, id } = param;
    let sql = "UPDATE saga_study SET title=? WHERE id=?";
    return query(sql, [title, id]);
  }
  updateStatus(param) {
    let { status, id } = param;
    let newStatus = status === "0" ? "1" : "0";
    let sql = "UPDATE saga_study SET newStatus=? WHERE id=?";
    return query(sql, [newStatus, id]);
  }
  selectData() {
    let sql = "SELECT * FROM saga_study ORDER BY createTime DESC";
    return query(sql, []);
  }
}

module.exports = new LabelData();
