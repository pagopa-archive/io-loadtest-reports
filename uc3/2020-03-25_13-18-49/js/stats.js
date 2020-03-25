var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "26346",
        "ok": "24092",
        "ko": "2254"
    },
    "minResponseTime": {
        "total": "2085",
        "ok": "2085",
        "ko": "10578"
    },
    "maxResponseTime": {
        "total": "70365",
        "ok": "70365",
        "ko": "70063"
    },
    "meanResponseTime": {
        "total": "29377",
        "ok": "29038",
        "ko": "32995"
    },
    "standardDeviation": {
        "total": "19694",
        "ok": "19326",
        "ko": "22956"
    },
    "percentiles1": {
        "total": "22393",
        "ok": "22632",
        "ko": "21056"
    },
    "percentiles2": {
        "total": "43362",
        "ok": "43193",
        "ko": "66096"
    },
    "percentiles3": {
        "total": "64785",
        "ok": "63004",
        "ko": "69340"
    },
    "percentiles4": {
        "total": "68327",
        "ok": "66018",
        "ko": "69882"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 24092,
    "percentage": 91
},
    "group4": {
    "name": "failed",
    "count": 2254,
    "percentage": 9
},
    "meanNumberOfRequestsPerSecond": {
        "total": "154.976",
        "ok": "141.718",
        "ko": "13.259"
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
        "total": "26346",
        "ok": "24092",
        "ko": "2254"
    },
    "minResponseTime": {
        "total": "2085",
        "ok": "2085",
        "ko": "10578"
    },
    "maxResponseTime": {
        "total": "70365",
        "ok": "70365",
        "ko": "70063"
    },
    "meanResponseTime": {
        "total": "29377",
        "ok": "29038",
        "ko": "32995"
    },
    "standardDeviation": {
        "total": "19694",
        "ok": "19326",
        "ko": "22956"
    },
    "percentiles1": {
        "total": "22391",
        "ok": "22627",
        "ko": "21056"
    },
    "percentiles2": {
        "total": "43356",
        "ok": "43195",
        "ko": "66096"
    },
    "percentiles3": {
        "total": "64785",
        "ok": "63004",
        "ko": "69340"
    },
    "percentiles4": {
        "total": "68327",
        "ok": "66018",
        "ko": "69882"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 24092,
    "percentage": 91
},
    "group4": {
    "name": "failed",
    "count": 2254,
    "percentage": 9
},
    "meanNumberOfRequestsPerSecond": {
        "total": "154.976",
        "ok": "141.718",
        "ko": "13.259"
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
