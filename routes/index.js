const indexctrl = require("../controllers/index.controller.js");
const express = require("express");
const router = express.Router();

router.get("/",indexctrl.getReq);
router.post("/",indexctrl.postReq);
router.put("/",indexctrl.putReq);

module.exports = router;
