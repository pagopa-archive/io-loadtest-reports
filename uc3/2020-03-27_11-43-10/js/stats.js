var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "33546",
        "ok": "33546",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "16",
        "ok": "16",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4510",
        "ok": "4510",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "700",
        "ok": "700",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1044",
        "ok": "1044",
        "ko": "-"
    },
    "percentiles1": {
        "total": "254",
        "ok": "253",
        "ko": "-"
    },
    "percentiles2": {
        "total": "603",
        "ok": "603",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3204",
        "ok": "3204",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3718",
        "ok": "3718",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 26845,
    "percentage": 80
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 823,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5878,
    "percentage": 18
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "174.719",
        "ok": "174.719",
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
        "total": "33546",
        "ok": "33546",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "16",
        "ok": "16",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4510",
        "ok": "4510",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "700",
        "ok": "700",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1044",
        "ok": "1044",
        "ko": "-"
    },
    "percentiles1": {
        "total": "253",
        "ok": "254",
        "ko": "-"
    },
    "percentiles2": {
        "total": "603",
        "ok": "603",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3204",
        "ok": "3204",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3718",
        "ok": "3718",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 26845,
    "percentage": 80
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 823,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5878,
    "percentage": 18
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "174.719",
        "ok": "174.719",
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
