var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "7201",
        "ok": "7201",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "42",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "15013",
        "ok": "15013",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "576",
        "ok": "576",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1817",
        "ok": "1817",
        "ko": "-"
    },
    "percentiles1": {
        "total": "92",
        "ok": "92",
        "ko": "-"
    },
    "percentiles2": {
        "total": "168",
        "ok": "168",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4439",
        "ok": "4439",
        "ko": "-"
    },
    "percentiles4": {
        "total": "11595",
        "ok": "11595",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6608,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 69,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 524,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "37.505",
        "ok": "37.505",
        "ko": "-"
    }
},
contents: {
"req_get-profile-340b4": {
        type: "REQUEST",
        name: "Get Profile",
path: "Get Profile",
pathFormatted: "req_get-profile-340b4",
stats: {
    "name": "Get Profile",
    "numberOfRequests": {
        "total": "7201",
        "ok": "7201",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "42",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "15013",
        "ok": "15013",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "576",
        "ok": "576",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1817",
        "ok": "1817",
        "ko": "-"
    },
    "percentiles1": {
        "total": "92",
        "ok": "92",
        "ko": "-"
    },
    "percentiles2": {
        "total": "168",
        "ok": "168",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4439",
        "ok": "4439",
        "ko": "-"
    },
    "percentiles4": {
        "total": "11595",
        "ok": "11595",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6608,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 69,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 524,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "37.505",
        "ok": "37.505",
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
