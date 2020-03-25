var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20356",
        "ok": "19333",
        "ko": "1023"
    },
    "minResponseTime": {
        "total": "14",
        "ok": "14",
        "ko": "19237"
    },
    "maxResponseTime": {
        "total": "72922",
        "ok": "72922",
        "ko": "70000"
    },
    "meanResponseTime": {
        "total": "19659",
        "ok": "19289",
        "ko": "26659"
    },
    "standardDeviation": {
        "total": "21742",
        "ok": "22069",
        "ko": "12273"
    },
    "percentiles1": {
        "total": "10054",
        "ok": "9784",
        "ko": "23983"
    },
    "percentiles2": {
        "total": "30500",
        "ok": "31869",
        "ko": "25561"
    },
    "percentiles3": {
        "total": "64952",
        "ok": "64840",
        "ko": "69063"
    },
    "percentiles4": {
        "total": "68873",
        "ok": "67877",
        "ko": "69940"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2933,
    "percentage": 14
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 915,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 15485,
    "percentage": 76
},
    "group4": {
    "name": "failed",
    "count": 1023,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "150.785",
        "ok": "143.207",
        "ko": "7.578"
    }
},
contents: {
"req_echo-request-38d4a": {
        type: "REQUEST",
        name: "Echo Request",
path: "Echo Request",
pathFormatted: "req_echo-request-38d4a",
stats: {
    "name": "Echo Request",
    "numberOfRequests": {
        "total": "20356",
        "ok": "19333",
        "ko": "1023"
    },
    "minResponseTime": {
        "total": "14",
        "ok": "14",
        "ko": "19237"
    },
    "maxResponseTime": {
        "total": "72922",
        "ok": "72922",
        "ko": "70000"
    },
    "meanResponseTime": {
        "total": "19659",
        "ok": "19289",
        "ko": "26659"
    },
    "standardDeviation": {
        "total": "21742",
        "ok": "22069",
        "ko": "12273"
    },
    "percentiles1": {
        "total": "10053",
        "ok": "9784",
        "ko": "23983"
    },
    "percentiles2": {
        "total": "30550",
        "ok": "31853",
        "ko": "25561"
    },
    "percentiles3": {
        "total": "64952",
        "ok": "64840",
        "ko": "69063"
    },
    "percentiles4": {
        "total": "68873",
        "ok": "67877",
        "ko": "69940"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2933,
    "percentage": 14
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 915,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 15485,
    "percentage": 76
},
    "group4": {
    "name": "failed",
    "count": 1023,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "150.785",
        "ok": "143.207",
        "ko": "7.578"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
