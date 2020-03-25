var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "24384",
        "ok": "20892",
        "ko": "3492"
    },
    "minResponseTime": {
        "total": "372",
        "ok": "372",
        "ko": "9983"
    },
    "maxResponseTime": {
        "total": "78424",
        "ok": "78424",
        "ko": "73283"
    },
    "meanResponseTime": {
        "total": "36319",
        "ok": "38675",
        "ko": "22220"
    },
    "standardDeviation": {
        "total": "19066",
        "ok": "19353",
        "ko": "8091"
    },
    "percentiles1": {
        "total": "31998",
        "ok": "36407",
        "ko": "21378"
    },
    "percentiles2": {
        "total": "50707",
        "ok": "54155",
        "ko": "25965"
    },
    "percentiles3": {
        "total": "69508",
        "ok": "70582",
        "ko": "29958"
    },
    "percentiles4": {
        "total": "76377",
        "ok": "76487",
        "ko": "72632"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 23,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 46,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 20823,
    "percentage": 85
},
    "group4": {
    "name": "failed",
    "count": 3492,
    "percentage": 14
},
    "meanNumberOfRequestsPerSecond": {
        "total": "150.519",
        "ok": "128.963",
        "ko": "21.556"
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
        "total": "24384",
        "ok": "20892",
        "ko": "3492"
    },
    "minResponseTime": {
        "total": "372",
        "ok": "372",
        "ko": "9983"
    },
    "maxResponseTime": {
        "total": "78424",
        "ok": "78424",
        "ko": "73283"
    },
    "meanResponseTime": {
        "total": "36319",
        "ok": "38675",
        "ko": "22220"
    },
    "standardDeviation": {
        "total": "19066",
        "ok": "19353",
        "ko": "8091"
    },
    "percentiles1": {
        "total": "32034",
        "ok": "36418",
        "ko": "21378"
    },
    "percentiles2": {
        "total": "50726",
        "ok": "54152",
        "ko": "25965"
    },
    "percentiles3": {
        "total": "69508",
        "ok": "70582",
        "ko": "29958"
    },
    "percentiles4": {
        "total": "76377",
        "ok": "76487",
        "ko": "72632"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 23,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 46,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 20823,
    "percentage": 85
},
    "group4": {
    "name": "failed",
    "count": 3492,
    "percentage": 14
},
    "meanNumberOfRequestsPerSecond": {
        "total": "150.519",
        "ok": "128.963",
        "ko": "21.556"
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
