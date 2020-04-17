var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "68400",
        "ok": "68328",
        "ko": "72"
    },
    "minResponseTime": {
        "total": "25",
        "ok": "25",
        "ko": "342"
    },
    "maxResponseTime": {
        "total": "10637",
        "ok": "10637",
        "ko": "10009"
    },
    "meanResponseTime": {
        "total": "866",
        "ok": "858",
        "ko": "8453"
    },
    "standardDeviation": {
        "total": "1497",
        "ok": "1474",
        "ko": "3155"
    },
    "percentiles1": {
        "total": "218",
        "ok": "218",
        "ko": "10002"
    },
    "percentiles2": {
        "total": "827",
        "ok": "822",
        "ko": "10004"
    },
    "percentiles3": {
        "total": "4636",
        "ok": "4622",
        "ko": "10008"
    },
    "percentiles4": {
        "total": "6720",
        "ok": "6420",
        "ko": "10009"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 50973,
    "percentage": 75
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3282,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 14073,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 72,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "348.98",
        "ok": "348.612",
        "ko": "0.367"
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
        "total": "68400",
        "ok": "68328",
        "ko": "72"
    },
    "minResponseTime": {
        "total": "25",
        "ok": "25",
        "ko": "342"
    },
    "maxResponseTime": {
        "total": "10637",
        "ok": "10637",
        "ko": "10009"
    },
    "meanResponseTime": {
        "total": "866",
        "ok": "858",
        "ko": "8453"
    },
    "standardDeviation": {
        "total": "1497",
        "ok": "1474",
        "ko": "3155"
    },
    "percentiles1": {
        "total": "218",
        "ok": "218",
        "ko": "10002"
    },
    "percentiles2": {
        "total": "827",
        "ok": "823",
        "ko": "10004"
    },
    "percentiles3": {
        "total": "4636",
        "ok": "4622",
        "ko": "10008"
    },
    "percentiles4": {
        "total": "6720",
        "ok": "6420",
        "ko": "10009"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 50973,
    "percentage": 75
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3282,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 14073,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 72,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "348.98",
        "ok": "348.612",
        "ko": "0.367"
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
