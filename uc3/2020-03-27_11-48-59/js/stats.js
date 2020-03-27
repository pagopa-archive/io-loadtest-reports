var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "35665",
        "ok": "35665",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "16",
        "ok": "16",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5438",
        "ok": "5438",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "933",
        "ok": "933",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "963",
        "ok": "963",
        "ko": "-"
    },
    "percentiles1": {
        "total": "746",
        "ok": "746",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1434",
        "ok": "1434",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2800",
        "ok": "2800",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4338",
        "ok": "4338",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 18398,
    "percentage": 52
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4880,
    "percentage": 14
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12387,
    "percentage": 35
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "184.793",
        "ok": "184.793",
        "ko": "-"
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
        "total": "35665",
        "ok": "35665",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "16",
        "ok": "16",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5438",
        "ok": "5438",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "933",
        "ok": "933",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "963",
        "ok": "963",
        "ko": "-"
    },
    "percentiles1": {
        "total": "745",
        "ok": "745",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1432",
        "ok": "1432",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2800",
        "ok": "2800",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4338",
        "ok": "4338",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 18398,
    "percentage": 52
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4880,
    "percentage": 14
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12387,
    "percentage": 35
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "184.793",
        "ok": "184.793",
        "ko": "-"
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
