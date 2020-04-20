var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "11400",
        "ok": "11399",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "27",
        "ok": "27",
        "ko": "3623"
    },
    "maxResponseTime": {
        "total": "3869",
        "ok": "3869",
        "ko": "3623"
    },
    "meanResponseTime": {
        "total": "49",
        "ok": "49",
        "ko": "3623"
    },
    "standardDeviation": {
        "total": "113",
        "ok": "108",
        "ko": "0"
    },
    "percentiles1": {
        "total": "36",
        "ok": "36",
        "ko": "3623"
    },
    "percentiles2": {
        "total": "48",
        "ok": "48",
        "ko": "3623"
    },
    "percentiles3": {
        "total": "77",
        "ok": "77",
        "ko": "3623"
    },
    "percentiles4": {
        "total": "124",
        "ok": "124",
        "ko": "3623"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11367,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 9,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 23,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "59.375",
        "ok": "59.37",
        "ko": "0.005"
    }
},
contents: {
"req_get--api-v1-mes-9b886": {
        type: "REQUEST",
        name: "GET /api/v1/messages/{id_message}",
path: "GET /api/v1/messages/{id_message}",
pathFormatted: "req_get--api-v1-mes-9b886",
stats: {
    "name": "GET /api/v1/messages/{id_message}",
    "numberOfRequests": {
        "total": "11400",
        "ok": "11399",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "27",
        "ok": "27",
        "ko": "3623"
    },
    "maxResponseTime": {
        "total": "3869",
        "ok": "3869",
        "ko": "3623"
    },
    "meanResponseTime": {
        "total": "49",
        "ok": "49",
        "ko": "3623"
    },
    "standardDeviation": {
        "total": "113",
        "ok": "108",
        "ko": "0"
    },
    "percentiles1": {
        "total": "36",
        "ok": "36",
        "ko": "3623"
    },
    "percentiles2": {
        "total": "48",
        "ok": "48",
        "ko": "3623"
    },
    "percentiles3": {
        "total": "77",
        "ok": "77",
        "ko": "3623"
    },
    "percentiles4": {
        "total": "124",
        "ok": "124",
        "ko": "3623"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11367,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 9,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 23,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "59.375",
        "ok": "59.37",
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
