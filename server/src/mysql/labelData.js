const { query } = require("./config");

class LabelData {
  insertData(param) {
    let { title } = param;
    let createTime = Date.now();
    let updateTime = createTime;
    let status = "0";
    let sql =
      "INSERT INTO sagaStudy(title,createTime,updateTime,status) VALUES(?,?,?,?)";
    return query(sql, [title, createTime, updateTime, status]);
  }
  deleteData(param) {
    let { id } = param;
    let sql = "DELETE FROM sagaStudy WHERE id=?";
    return query(sql, [id]);
  }
  updateTitle(param) {
    let { title, id } = param;
    let sql = "UPDATE sagaStudy SET title=? WHERE id=?";
    return query(sql, [title, id]);
  }
  updateStatus(param) {
    let { status, id } = param;
    let newStatus = status === "0" ? "1" : "0";
    let sql = "UPDATE sagaStudy SET newStatus=? WHERE id=?";
    return query(sql, [newStatus, id]);
  }
  selectData() {
    let sql = "SELECT * FROM sagaStudy ORDER BY createTime DESC";
    return query(sql, []);
  }
}

module.exports = new LabelData();
