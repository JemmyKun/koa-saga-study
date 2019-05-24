const {
  insertData,
  deleteData,
  updateTitle,
  updateStatus,
  selectData
} = require("../mysql/labelData");

class Label {
  async addLabelItem(ctx) {
    let param = ctx.request.body;
    let { title } = param;
    if (title === "") {
      ctx.body = {
        status: 200,
        content: false,
        message: "名称不能为空"
      };
      return;
    }
    await insertData(param)
      .then(data => {
        if (data.affectedRows > 0) {
          ctx.body = {
            status: 200,
            content: true,
            message: "添加成功"
          };
        } else {
          ctx.body = {
            status: 200,
            content: false,
            message: "添加失败"
          };
        }
      })
      .catch(err => {
        console.log(err);
        ctx.body = {
          status: 200,
          content: false,
          message: "服务异常"
        };
      });
  }
  async deleteLabelItem(ctx) {
    let param = ctx.request.body;
    let { id } = param;
    if (id === "") {
      ctx.body = {
        status: 401,
        content: false,
        message: "参数异常"
      };
      return;
    }
    await deleteData(param)
      .then(data => {
        if (data.affectedRows > 0) {
          ctx.body = {
            status: 200,
            content: true,
            message: "删除成功"
          };
        } else {
          ctx.body = {
            status: 200,
            content: true,
            message: "删除失败"
          };
        }
      })
      .catch(err => {
        console.log("err", err);
      });
  }
  async updateLabelName(ctx) {
    let param = ctx.request.body;
    let { title, id } = param;
    if (title === "" || id === "") {
      ctx.body = {
        status: 401,
        content: false,
        message: "参数异常"
      };
      return;
    }
    await updateTitle(param)
      .then(data => {
        if (data.affectedRows > 0) {
          ctx.body = {
            status: 200,
            content: false,
            message: "修改成功"
          };
        } else {
          ctx.body = {
            status: 500,
            content: false,
            message: "修改失败"
          };
        }
      })
      .catch(err => {
        console.log("修改标题err", err);
      });
  }
  async updateLabelStatus(ctx) {
    let param = ctx.request.body;
    let { id } = param;
    if (id === "") {
      ctx.body = {
        status: 401,
        content: false,
        message: "参数异常"
      };
      return;
    }
    await updateStatus(param)
      .then(data => {
        if (data.affectedRows > 0) {
          ctx.body = {
            status: 200,
            content: false,
            message: "修改成功"
          };
        } else {
          ctx.body = {
            status: 500,
            content: false,
            message: "修改失败"
          };
        }
      })
      .catch(err => {
        console.log("修改状态err", err);
      });
  }
  async getLabelList(ctx) {
    let param = ctx.request.body;
    let { title } = param;
    if (title === "") {
      ctx.body = {
        status: 401,
        content: false,
        message: "参数异常"
      };
      return;
    }
    await selectData(param)
      .then(data => {
        console.log("select data!!!", data);
        ctx.body = {
          status: 200,
          content: data,
          message: "查询成功"
        };
      })
      .catch(err => {
        console.log("查询失败err", err);
      });
  }
}

module.exports = new Label();
