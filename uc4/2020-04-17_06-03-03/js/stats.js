var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "57000",
        "ok": "56986",
        "ko": "14"
    },
    "minResponseTime": {
        "total": "25",
        "ok": "25",
        "ko": "31"
    },
    "maxResponseTime": {
        "total": "2178",
        "ok": "2178",
        "ko": "554"
    },
    "meanResponseTime": {
        "total": "198",
        "ok": "198",
        "ko": "216"
    },
    "standardDeviation": {
        "total": "194",
        "ok": "194",
        "ko": "149"
    },
    "percentiles1": {
        "total": "147",
        "ok": "147",
        "ko": "234"
    },
    "percentiles2": {
        "total": "252",
        "ok": "252",
        "ko": "258"
    },
    "percentiles3": {
        "total": "543",
        "ok": "542",
        "ko": "451"
    },
    "percentiles4": {
        "total": "1080",
        "ok": "1080",
        "ko": "533"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 55944,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 637,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 405,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 14,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "296.875",
        "ok": "296.802",
        "ko": "0.073"
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
        "total": "57000",
        "ok": "56986",
        "ko": "14"
    },
    "minResponseTime": {
        "total": "25",
        "ok": "25",
        "ko": "31"
    },
    "maxResponseTime": {
        "total": "2178",
        "ok": "2178",
        "ko": "554"
    },
    "meanResponseTime": {
        "total": "198",
        "ok": "198",
        "ko": "216"
    },
    "standardDeviation": {
        "total": "194",
        "ok": "194",
        "ko": "149"
    },
    "percentiles1": {
        "total": "147",
        "ok": "147",
        "ko": "234"
    },
    "percentiles2": {
        "total": "252",
        "ok": "252",
        "ko": "258"
    },
    "percentiles3": {
        "total": "543",
        "ok": "542",
        "ko": "451"
    },
    "percentiles4": {
        "total": "1080",
        "ok": "1080",
        "ko": "533"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 55944,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 637,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 405,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 14,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "296.875",
        "ok": "296.802",
        "ko": "0.073"
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
