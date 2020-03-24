var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "57000",
        "ok": "56751",
        "ko": "249"
    },
    "minResponseTime": {
        "total": "10",
        "ok": "10",
        "ko": "2859"
    },
    "maxResponseTime": {
        "total": "3600",
        "ok": "3600",
        "ko": "3580"
    },
    "meanResponseTime": {
        "total": "403",
        "ok": "391",
        "ko": "3143"
    },
    "standardDeviation": {
        "total": "651",
        "ok": "626",
        "ko": "173"
    },
    "percentiles1": {
        "total": "121",
        "ok": "120",
        "ko": "3142"
    },
    "percentiles2": {
        "total": "389",
        "ok": "382",
        "ko": "3284"
    },
    "percentiles3": {
        "total": "2074",
        "ok": "2040",
        "ko": "3420"
    },
    "percentiles4": {
        "total": "2584",
        "ok": "2377",
        "ko": "3507"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 47509,
    "percentage": 83
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2751,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6491,
    "percentage": 11
},
    "group4": {
    "name": "failed",
    "count": 249,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "292.308",
        "ok": "291.031",
        "ko": "1.277"
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
        "ok": "56751",
        "ko": "249"
    },
    "minResponseTime": {
        "total": "10",
        "ok": "10",
        "ko": "2859"
    },
    "maxResponseTime": {
        "total": "3600",
        "ok": "3600",
        "ko": "3580"
    },
    "meanResponseTime": {
        "total": "403",
        "ok": "391",
        "ko": "3143"
    },
    "standardDeviation": {
        "total": "651",
        "ok": "626",
        "ko": "173"
    },
    "percentiles1": {
        "total": "121",
        "ok": "120",
        "ko": "3142"
    },
    "percentiles2": {
        "total": "389",
        "ok": "382",
        "ko": "3284"
    },
    "percentiles3": {
        "total": "2074",
        "ok": "2039",
        "ko": "3420"
    },
    "percentiles4": {
        "total": "2584",
        "ok": "2377",
        "ko": "3507"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 47509,
    "percentage": 83
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2751,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6491,
    "percentage": 11
},
    "group4": {
    "name": "failed",
    "count": 249,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "292.308",
        "ok": "291.031",
        "ko": "1.277"
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
