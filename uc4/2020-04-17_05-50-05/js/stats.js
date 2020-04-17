var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "22800",
        "ok": "22792",
        "ko": "8"
    },
    "minResponseTime": {
        "total": "25",
        "ok": "25",
        "ko": "33"
    },
    "maxResponseTime": {
        "total": "8428",
        "ok": "8428",
        "ko": "429"
    },
    "meanResponseTime": {
        "total": "47",
        "ok": "47",
        "ko": "119"
    },
    "standardDeviation": {
        "total": "122",
        "ok": "122",
        "ko": "131"
    },
    "percentiles1": {
        "total": "36",
        "ok": "36",
        "ko": "58"
    },
    "percentiles2": {
        "total": "48",
        "ok": "48",
        "ko": "116"
    },
    "percentiles3": {
        "total": "78",
        "ok": "78",
        "ko": "357"
    },
    "percentiles4": {
        "total": "151",
        "ok": "150",
        "ko": "415"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 22772,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 17,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 8,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "118.75",
        "ok": "118.708",
        "ko": "0.042"
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
        "total": "22800",
        "ok": "22792",
        "ko": "8"
    },
    "minResponseTime": {
        "total": "25",
        "ok": "25",
        "ko": "33"
    },
    "maxResponseTime": {
        "total": "8428",
        "ok": "8428",
        "ko": "429"
    },
    "meanResponseTime": {
        "total": "47",
        "ok": "47",
        "ko": "119"
    },
    "standardDeviation": {
        "total": "122",
        "ok": "122",
        "ko": "131"
    },
    "percentiles1": {
        "total": "36",
        "ok": "36",
        "ko": "58"
    },
    "percentiles2": {
        "total": "48",
        "ok": "48",
        "ko": "116"
    },
    "percentiles3": {
        "total": "78",
        "ok": "78",
        "ko": "357"
    },
    "percentiles4": {
        "total": "151",
        "ok": "150",
        "ko": "415"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 22772,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 17,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 8,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "118.75",
        "ok": "118.708",
        "ko": "0.042"
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
