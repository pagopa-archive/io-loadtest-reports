var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "79800",
        "ok": "79620",
        "ko": "180"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "4333"
    },
    "maxResponseTime": {
        "total": "11305",
        "ok": "11305",
        "ko": "10057"
    },
    "meanResponseTime": {
        "total": "815",
        "ok": "795",
        "ko": "9754"
    },
    "standardDeviation": {
        "total": "1518",
        "ok": "1458",
        "ko": "1166"
    },
    "percentiles1": {
        "total": "167",
        "ok": "166",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "922",
        "ok": "914",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "3858",
        "ok": "3784",
        "ko": "10036"
    },
    "percentiles4": {
        "total": "7502",
        "ok": "7034",
        "ko": "10057"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 58275,
    "percentage": 73
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5088,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 16257,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "count": 180,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "405.076",
        "ok": "404.162",
        "ko": "0.914"
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
        "total": "79800",
        "ok": "79620",
        "ko": "180"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "4333"
    },
    "maxResponseTime": {
        "total": "11305",
        "ok": "11305",
        "ko": "10057"
    },
    "meanResponseTime": {
        "total": "815",
        "ok": "795",
        "ko": "9754"
    },
    "standardDeviation": {
        "total": "1518",
        "ok": "1458",
        "ko": "1166"
    },
    "percentiles1": {
        "total": "167",
        "ok": "166",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "922",
        "ok": "914",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "3858",
        "ok": "3784",
        "ko": "10036"
    },
    "percentiles4": {
        "total": "7499",
        "ok": "7034",
        "ko": "10057"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 58275,
    "percentage": 73
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5088,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 16257,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "count": 180,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "405.076",
        "ok": "404.162",
        "ko": "0.914"
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
