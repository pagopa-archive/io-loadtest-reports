var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "57000",
        "ok": "56999",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "21"
    },
    "maxResponseTime": {
        "total": "7836",
        "ok": "7836",
        "ko": "21"
    },
    "meanResponseTime": {
        "total": "100",
        "ok": "100",
        "ko": "21"
    },
    "standardDeviation": {
        "total": "197",
        "ok": "197",
        "ko": "0"
    },
    "percentiles1": {
        "total": "57",
        "ok": "57",
        "ko": "21"
    },
    "percentiles2": {
        "total": "143",
        "ok": "143",
        "ko": "21"
    },
    "percentiles3": {
        "total": "272",
        "ok": "272",
        "ko": "21"
    },
    "percentiles4": {
        "total": "462",
        "ok": "462",
        "ko": "21"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 56874,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 13,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 112,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "296.875",
        "ok": "296.87",
        "ko": "0.005"
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
        "total": "57000",
        "ok": "56999",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "21"
    },
    "maxResponseTime": {
        "total": "7836",
        "ok": "7836",
        "ko": "21"
    },
    "meanResponseTime": {
        "total": "100",
        "ok": "100",
        "ko": "21"
    },
    "standardDeviation": {
        "total": "197",
        "ok": "197",
        "ko": "0"
    },
    "percentiles1": {
        "total": "57",
        "ok": "57",
        "ko": "21"
    },
    "percentiles2": {
        "total": "143",
        "ok": "143",
        "ko": "21"
    },
    "percentiles3": {
        "total": "272",
        "ok": "272",
        "ko": "21"
    },
    "percentiles4": {
        "total": "462",
        "ok": "462",
        "ko": "21"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 56874,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 13,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 112,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "296.875",
        "ok": "296.87",
        "ko": "0.005"
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
