var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "57000",
        "ok": "56999",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "280"
    },
    "maxResponseTime": {
        "total": "519",
        "ok": "519",
        "ko": "280"
    },
    "meanResponseTime": {
        "total": "22",
        "ok": "22",
        "ko": "280"
    },
    "standardDeviation": {
        "total": "26",
        "ok": "26",
        "ko": "0"
    },
    "percentiles1": {
        "total": "18",
        "ok": "18",
        "ko": "280"
    },
    "percentiles2": {
        "total": "21",
        "ok": "21",
        "ko": "280"
    },
    "percentiles3": {
        "total": "41",
        "ok": "41",
        "ko": "280"
    },
    "percentiles4": {
        "total": "172",
        "ok": "172",
        "ko": "280"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 56999,
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
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "298.429",
        "ok": "298.424",
        "ko": "0.005"
    }
},
contents: {
"req_io---appbackend-040ad": {
        type: "REQUEST",
        name: "IO - appbackend",
path: "IO - appbackend",
pathFormatted: "req_io---appbackend-040ad",
stats: {
    "name": "IO - appbackend",
    "numberOfRequests": {
        "total": "57000",
        "ok": "56999",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "280"
    },
    "maxResponseTime": {
        "total": "519",
        "ok": "519",
        "ko": "280"
    },
    "meanResponseTime": {
        "total": "22",
        "ok": "22",
        "ko": "280"
    },
    "standardDeviation": {
        "total": "26",
        "ok": "26",
        "ko": "0"
    },
    "percentiles1": {
        "total": "18",
        "ok": "18",
        "ko": "280"
    },
    "percentiles2": {
        "total": "21",
        "ok": "21",
        "ko": "280"
    },
    "percentiles3": {
        "total": "41",
        "ok": "41",
        "ko": "280"
    },
    "percentiles4": {
        "total": "172",
        "ok": "172",
        "ko": "280"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 56999,
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
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "298.429",
        "ok": "298.424",
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
