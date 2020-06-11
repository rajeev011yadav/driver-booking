const timeDifferenInHours = ({startTime, endTime}) => {
    const millSecToHrs = 60*60*1000;
    return(endTime - startTime)/millSecToHrs;
}

const calculateCost = ({startTime, endTime}, costPerHr=1) => {
    if (endTime <= startTime) return -1;
    const diff = timeDifferenInHours({startTime, endTime});
    return  diff*costPerHr;
}

const handleCostCalculation = (req, res) => {
    let {startDate, endDate} = req.body;
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    if (!startDate.getTime() || !endDate.getTime()) {
        res.status(400)
        return res.send({error: "Invalid Date format."});
    }
    if (startDate >= endDate) {
        res.status(400)
        return res.send({error: "start time must be earlier then end time."});
    }
    res.status(200);
    res.send({
        cost: calculateCost({startTime: startDate, endTime: endDate}), 
        hours: timeDifferenInHours({startTime: startDate, endTime: endDate}), 
        charge:"1 rupee per hour"}
    );
}

module.exports = {handleCostCalculation}
