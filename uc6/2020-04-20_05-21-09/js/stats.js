var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "45600",
        "ok": "45598",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "27",
        "ok": "27",
        "ko": "93"
    },
    "maxResponseTime": {
        "total": "630",
        "ok": "630",
        "ko": "459"
    },
    "meanResponseTime": {
        "total": "89",
        "ok": "89",
        "ko": "276"
    },
    "standardDeviation": {
        "total": "62",
        "ok": "62",
        "ko": "183"
    },
    "percentiles1": {
        "total": "68",
        "ok": "68",
        "ko": "276"
    },
    "percentiles2": {
        "total": "113",
        "ok": "113",
        "ko": "368"
    },
    "percentiles3": {
        "total": "215",
        "ok": "215",
        "ko": "441"
    },
    "percentiles4": {
        "total": "314",
        "ok": "314",
        "ko": "455"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 45598,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "237.5",
        "ok": "237.49",
        "ko": "0.01"
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
        "total": "45600",
        "ok": "45598",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "27",
        "ok": "27",
        "ko": "93"
    },
    "maxResponseTime": {
        "total": "630",
        "ok": "630",
        "ko": "459"
    },
    "meanResponseTime": {
        "total": "89",
        "ok": "89",
        "ko": "276"
    },
    "standardDeviation": {
        "total": "62",
        "ok": "62",
        "ko": "183"
    },
    "percentiles1": {
        "total": "68",
        "ok": "68",
        "ko": "276"
    },
    "percentiles2": {
        "total": "113",
        "ok": "113",
        "ko": "368"
    },
    "percentiles3": {
        "total": "215",
        "ok": "215",
        "ko": "441"
    },
    "percentiles4": {
        "total": "314",
        "ok": "314",
        "ko": "455"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 45598,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "237.5",
        "ok": "237.49",
        "ko": "0.01"
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
