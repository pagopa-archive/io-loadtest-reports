var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "43403",
        "ok": "43403",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3370",
        "ok": "3370",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "357",
        "ok": "357",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "486",
        "ok": "486",
        "ko": "-"
    },
    "percentiles1": {
        "total": "236",
        "ok": "236",
        "ko": "-"
    },
    "percentiles2": {
        "total": "438",
        "ok": "437",
        "ko": "-"
    },
    "percentiles3": {
        "total": "959",
        "ok": "959",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2921",
        "ok": "2921",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 39739,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1691,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1973,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "711.525",
        "ok": "711.525",
        "ko": "-"
    }
},
contents: {
"req_io---apigad-11c9e": {
        type: "REQUEST",
        name: "IO - apigad",
path: "IO - apigad",
pathFormatted: "req_io---apigad-11c9e",
stats: {
    "name": "IO - apigad",
    "numberOfRequests": {
        "total": "43403",
        "ok": "43403",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3370",
        "ok": "3370",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "357",
        "ok": "357",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "486",
        "ok": "486",
        "ko": "-"
    },
    "percentiles1": {
        "total": "236",
        "ok": "236",
        "ko": "-"
    },
    "percentiles2": {
        "total": "438",
        "ok": "438",
        "ko": "-"
    },
    "percentiles3": {
        "total": "960",
        "ok": "960",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2921",
        "ok": "2921",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 39739,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1691,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1973,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "711.525",
        "ok": "711.525",
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
