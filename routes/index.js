const router = require("express").Router();
const v1Routes = require("./v1")
const path = require("path")

router.use("/v1", v1Routes);

// Program in a fall back route for missed calls
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../app/build/index.html"));
});

module.exports = router;