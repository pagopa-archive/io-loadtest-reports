var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "45600",
        "ok": "45600",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "25",
        "ok": "25",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2124",
        "ok": "2124",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "301",
        "ok": "301",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "389",
        "ok": "389",
        "ko": "-"
    },
    "percentiles1": {
        "total": "110",
        "ok": "111",
        "ko": "-"
    },
    "percentiles2": {
        "total": "436",
        "ok": "436",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1165",
        "ok": "1165",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1644",
        "ok": "1644",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 39869,
    "percentage": 87
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3614,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2117,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "237.5",
        "ok": "237.5",
        "ko": "-"
    }
},
contents: {
"req_get--api-v1-pro-83129": {
        type: "REQUEST",
        name: "GET /api/v1/profile",
path: "GET /api/v1/profile",
pathFormatted: "req_get--api-v1-pro-83129",
stats: {
    "name": "GET /api/v1/profile",
    "numberOfRequests": {
        "total": "45600",
        "ok": "45600",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "25",
        "ok": "25",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2124",
        "ok": "2124",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "301",
        "ok": "301",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "389",
        "ok": "389",
        "ko": "-"
    },
    "percentiles1": {
        "total": "110",
        "ok": "111",
        "ko": "-"
    },
    "percentiles2": {
        "total": "436",
        "ok": "436",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1165",
        "ok": "1165",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1644",
        "ok": "1644",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 39869,
    "percentage": 87
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3614,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2117,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "237.5",
        "ok": "237.5",
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
