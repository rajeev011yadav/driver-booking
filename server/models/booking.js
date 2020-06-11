const router = require("express").Router();

router.post("/calculate-cost", (req, res) => {
    const cost = calculateCost(req.body, 10);
    res.send({cost: cost});
});

