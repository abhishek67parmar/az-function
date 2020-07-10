const fetch = require('node-fetch');

module.exports = async function (context, myTimer) {
    var timeStamp = new Date().toISOString();
    
    if (myTimer.isPastDue)
    {
        context.log('JavaScript is running late!');
    }

    let response = await fetch('API_LINK');
    let data = await response.json();
    context.log(data);
    context.bindings.signalRMessages = [{
        "target": "latestData",
        "arguments": [data]
    }];
    context.done();
};


