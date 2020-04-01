var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6840",
        "ok": "6079",
        "ko": "761"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "36",
        "ko": "13"
    },
    "maxResponseTime": {
        "total": "22245",
        "ok": "22245",
        "ko": "22049"
    },
    "meanResponseTime": {
        "total": "6723",
        "ok": "4934",
        "ko": "21014"
    },
    "standardDeviation": {
        "total": "7373",
        "ok": "5680",
        "ko": "1082"
    },
    "percentiles1": {
        "total": "4086",
        "ok": "2675",
        "ko": "21048"
    },
    "percentiles2": {
        "total": "12557",
        "ok": "9069",
        "ko": "21058"
    },
    "percentiles3": {
        "total": "21050",
        "ok": "15875",
        "ko": "21202"
    },
    "percentiles4": {
        "total": "21120",
        "ok": "18133",
        "ko": "21462"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2775,
    "percentage": 41
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 48,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3256,
    "percentage": 48
},
    "group4": {
    "name": "failed",
    "count": 761,
    "percentage": 11
},
    "meanNumberOfRequestsPerSecond": {
        "total": "32.264",
        "ok": "28.675",
        "ko": "3.59"
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
        "total": "6840",
        "ok": "6079",
        "ko": "761"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "36",
        "ko": "13"
    },
    "maxResponseTime": {
        "total": "22245",
        "ok": "22245",
        "ko": "22049"
    },
    "meanResponseTime": {
        "total": "6723",
        "ok": "4934",
        "ko": "21014"
    },
    "standardDeviation": {
        "total": "7373",
        "ok": "5680",
        "ko": "1082"
    },
    "percentiles1": {
        "total": "4086",
        "ok": "2675",
        "ko": "21048"
    },
    "percentiles2": {
        "total": "12557",
        "ok": "9069",
        "ko": "21058"
    },
    "percentiles3": {
        "total": "21050",
        "ok": "15875",
        "ko": "21202"
    },
    "percentiles4": {
        "total": "21120",
        "ok": "18133",
        "ko": "21462"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2775,
    "percentage": 41
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 48,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3256,
    "percentage": 48
},
    "group4": {
    "name": "failed",
    "count": 761,
    "percentage": 11
},
    "meanNumberOfRequestsPerSecond": {
        "total": "32.264",
        "ok": "28.675",
        "ko": "3.59"
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
