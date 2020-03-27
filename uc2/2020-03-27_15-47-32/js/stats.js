var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30000",
        "ok": "30000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "12",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7695",
        "ok": "7695",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2754",
        "ok": "2754",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2711",
        "ok": "2711",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2217",
        "ok": "2218",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5614",
        "ok": "5615",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6960",
        "ok": "6959",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7381",
        "ok": "7381",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 12727,
    "percentage": 42
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 513,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 16760,
    "percentage": 56
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "500",
        "ok": "500",
        "ko": "-"
    }
},
contents: {
"req_io---apigad-11c9e": {
        type: "REQUEST",
        name: "IO - apigad",
path: "IO - apigad",
pathFormatted: "req_io---apigad-11c9e",
stats: {
    "name": "IO - apigad",
    "numberOfRequests": {
        "total": "30000",
        "ok": "30000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "12",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7695",
        "ok": "7695",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2754",
        "ok": "2754",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2711",
        "ok": "2711",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2218",
        "ok": "2217",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5615",
        "ok": "5614",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6960",
        "ok": "6960",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7381",
        "ok": "7381",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 12727,
    "percentage": 42
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 513,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 16760,
    "percentage": 56
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "500",
        "ok": "500",
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
