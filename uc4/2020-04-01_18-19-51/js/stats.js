var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "9120",
        "ok": "9013",
        "ko": "107"
    },
    "minResponseTime": {
        "total": "33",
        "ok": "33",
        "ko": "68"
    },
    "maxResponseTime": {
        "total": "21247",
        "ok": "17530",
        "ko": "21247"
    },
    "meanResponseTime": {
        "total": "1769",
        "ok": "1576",
        "ko": "18022"
    },
    "standardDeviation": {
        "total": "3718",
        "ok": "3195",
        "ko": "7112"
    },
    "percentiles1": {
        "total": "53",
        "ok": "53",
        "ko": "21047"
    },
    "percentiles2": {
        "total": "1269",
        "ok": "1060",
        "ko": "21058"
    },
    "percentiles3": {
        "total": "9369",
        "ok": "8303",
        "ko": "21100"
    },
    "percentiles4": {
        "total": "17464",
        "ok": "15049",
        "ko": "21190"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6678,
    "percentage": 73
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 129,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2206,
    "percentage": 24
},
    "group4": {
    "name": "failed",
    "count": 107,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "43.019",
        "ok": "42.514",
        "ko": "0.505"
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
        "total": "9120",
        "ok": "9013",
        "ko": "107"
    },
    "minResponseTime": {
        "total": "33",
        "ok": "33",
        "ko": "68"
    },
    "maxResponseTime": {
        "total": "21247",
        "ok": "17530",
        "ko": "21247"
    },
    "meanResponseTime": {
        "total": "1769",
        "ok": "1576",
        "ko": "18022"
    },
    "standardDeviation": {
        "total": "3718",
        "ok": "3195",
        "ko": "7112"
    },
    "percentiles1": {
        "total": "53",
        "ok": "53",
        "ko": "21047"
    },
    "percentiles2": {
        "total": "1269",
        "ok": "1060",
        "ko": "21058"
    },
    "percentiles3": {
        "total": "9369",
        "ok": "8303",
        "ko": "21100"
    },
    "percentiles4": {
        "total": "17464",
        "ok": "15049",
        "ko": "21190"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6678,
    "percentage": 73
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 129,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2206,
    "percentage": 24
},
    "group4": {
    "name": "failed",
    "count": 107,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "43.019",
        "ok": "42.514",
        "ko": "0.505"
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
