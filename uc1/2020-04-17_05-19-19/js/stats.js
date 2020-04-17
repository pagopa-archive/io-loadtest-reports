var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "68400",
        "ok": "68400",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2858",
        "ok": "2858",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "226",
        "ok": "226",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "362",
        "ok": "362",
        "ko": "-"
    },
    "percentiles1": {
        "total": "109",
        "ok": "109",
        "ko": "-"
    },
    "percentiles2": {
        "total": "216",
        "ok": "216",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1200",
        "ok": "1200",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1703",
        "ok": "1703",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 62900,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2085,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3415,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "356.25",
        "ok": "356.25",
        "ko": "-"
    }
},
contents: {
"req_get--info-4174b": {
        type: "REQUEST",
        name: "GET /info",
path: "GET /info",
pathFormatted: "req_get--info-4174b",
stats: {
    "name": "GET /info",
    "numberOfRequests": {
        "total": "68400",
        "ok": "68400",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2858",
        "ok": "2858",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "226",
        "ok": "226",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "362",
        "ok": "362",
        "ko": "-"
    },
    "percentiles1": {
        "total": "109",
        "ok": "109",
        "ko": "-"
    },
    "percentiles2": {
        "total": "216",
        "ok": "216",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1200",
        "ok": "1200",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1703",
        "ok": "1702",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 62900,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2085,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3415,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "356.25",
        "ok": "356.25",
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
