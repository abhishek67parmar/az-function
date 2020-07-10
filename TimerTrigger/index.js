const fetch = require('node-fetch');

module.exports = async function (context, myTimer) {
    var timeStamp = new Date().toISOString();
    
    if (myTimer.isPastDue)
    {
        context.log('JavaScript is running late!');
    }

    let response = await fetch('https://api.aurizon.com.au/cps-api/crewprestart-api/health');
    let data = await response.json();
    context.log(data);
    context.bindings.signalRMessages = [{
        "target": "latestData",
        "arguments": [data]
    }];
    context.done();
};


