var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "45600",
        "ok": "37210",
        "ko": "8390"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "12",
        "ko": "51282"
    },
    "maxResponseTime": {
        "total": "60327",
        "ok": "60099",
        "ko": "60327"
    },
    "meanResponseTime": {
        "total": "23668",
        "ok": "15465",
        "ko": "60050"
    },
    "standardDeviation": {
        "total": "24125",
        "ok": "18642",
        "ko": "117"
    },
    "percentiles1": {
        "total": "13270",
        "ok": "7339",
        "ko": "60016"
    },
    "percentiles2": {
        "total": "48194",
        "ok": "31691",
        "ko": "60083"
    },
    "percentiles3": {
        "total": "60075",
        "ok": "50437",
        "ko": "60199"
    },
    "percentiles4": {
        "total": "60194",
        "ok": "59703",
        "ko": "60266"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 17442,
    "percentage": 38
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 13,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 19755,
    "percentage": 43
},
    "group4": {
    "name": "failed",
    "count": 8390,
    "percentage": 18
},
    "meanNumberOfRequestsPerSecond": {
        "total": "182.4",
        "ok": "148.84",
        "ko": "33.56"
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
        "total": "45600",
        "ok": "37210",
        "ko": "8390"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "12",
        "ko": "51282"
    },
    "maxResponseTime": {
        "total": "60327",
        "ok": "60099",
        "ko": "60327"
    },
    "meanResponseTime": {
        "total": "23668",
        "ok": "15465",
        "ko": "60050"
    },
    "standardDeviation": {
        "total": "24125",
        "ok": "18642",
        "ko": "117"
    },
    "percentiles1": {
        "total": "13222",
        "ok": "7339",
        "ko": "60016"
    },
    "percentiles2": {
        "total": "48193",
        "ok": "31675",
        "ko": "60083"
    },
    "percentiles3": {
        "total": "60075",
        "ok": "50437",
        "ko": "60199"
    },
    "percentiles4": {
        "total": "60194",
        "ok": "59703",
        "ko": "60266"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 17442,
    "percentage": 38
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 13,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 19755,
    "percentage": 43
},
    "group4": {
    "name": "failed",
    "count": 8390,
    "percentage": 18
},
    "meanNumberOfRequestsPerSecond": {
        "total": "182.4",
        "ok": "148.84",
        "ko": "33.56"
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
