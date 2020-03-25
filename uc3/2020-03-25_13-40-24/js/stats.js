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
        "total": "14",
        "ok": "14",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "42415",
        "ok": "42415",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "11468",
        "ok": "11468",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "12049",
        "ok": "12049",
        "ko": "-"
    },
    "percentiles1": {
        "total": "6519",
        "ok": "6518",
        "ko": "-"
    },
    "percentiles2": {
        "total": "20213",
        "ok": "20209",
        "ko": "-"
    },
    "percentiles3": {
        "total": "35442",
        "ok": "35442",
        "ko": "-"
    },
    "percentiles4": {
        "total": "37747",
        "ok": "37747",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10332,
    "percentage": 30
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 97,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 23771,
    "percentage": 70
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "151.327",
        "ok": "151.327",
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
        "total": "14",
        "ok": "14",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "42415",
        "ok": "42415",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "11468",
        "ok": "11468",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "12049",
        "ok": "12049",
        "ko": "-"
    },
    "percentiles1": {
        "total": "6518",
        "ok": "6517",
        "ko": "-"
    },
    "percentiles2": {
        "total": "20209",
        "ok": "20214",
        "ko": "-"
    },
    "percentiles3": {
        "total": "35442",
        "ok": "35442",
        "ko": "-"
    },
    "percentiles4": {
        "total": "37747",
        "ok": "37747",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10332,
    "percentage": 30
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 97,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 23771,
    "percentage": 70
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "151.327",
        "ok": "151.327",
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
