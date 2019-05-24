const {
  addLabelItem,
  deleteLabelItem,
  updateLabelName,
  updateLabelStatus,
  getLabelList
} = require("./controller/label");

module.exports = router => {
  router.prefix("/api");
  router.post("/label/add", addLabelItem);
  router.get("/label/list", getLabelList);
  router.post("/label/delete", deleteLabelItem);
  router.post("/label/updateName", updateLabelName);
  router.post("/label/updateStatus", updateLabelStatus);
};
