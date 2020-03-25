var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "34200",
        "ok": "34200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "13",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "39254",
        "ok": "39254",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "6237",
        "ok": "6237",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "11305",
        "ok": "11305",
        "ko": "-"
    },
    "percentiles1": {
        "total": "77",
        "ok": "77",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6133",
        "ok": "6138",
        "ko": "-"
    },
    "percentiles3": {
        "total": "32354",
        "ok": "32354",
        "ko": "-"
    },
    "percentiles4": {
        "total": "35549",
        "ok": "35543",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 23414,
    "percentage": 68
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 550,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 10236,
    "percentage": 30
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "154.054",
        "ok": "154.054",
        "ko": "-"
    }
},
contents: {
"req_echo-request-38d4a": {
        type: "REQUEST",
        name: "Echo Request",
path: "Echo Request",
pathFormatted: "req_echo-request-38d4a",
stats: {
    "name": "Echo Request",
    "numberOfRequests": {
        "total": "34200",
        "ok": "34200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "13",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "39254",
        "ok": "39254",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "6237",
        "ok": "6237",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "11305",
        "ok": "11305",
        "ko": "-"
    },
    "percentiles1": {
        "total": "77",
        "ok": "77",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6290",
        "ok": "6144",
        "ko": "-"
    },
    "percentiles3": {
        "total": "32354",
        "ok": "32360",
        "ko": "-"
    },
    "percentiles4": {
        "total": "35543",
        "ok": "35543",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 23414,
    "percentage": 68
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 550,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 10236,
    "percentage": 30
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "154.054",
        "ok": "154.054",
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
