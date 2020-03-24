var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "91200",
        "ok": "91183",
        "ko": "17"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "117"
    },
    "maxResponseTime": {
        "total": "1538",
        "ok": "1538",
        "ko": "251"
    },
    "meanResponseTime": {
        "total": "65",
        "ok": "65",
        "ko": "191"
    },
    "standardDeviation": {
        "total": "79",
        "ok": "79",
        "ko": "38"
    },
    "percentiles1": {
        "total": "35",
        "ok": "35",
        "ko": "196"
    },
    "percentiles2": {
        "total": "82",
        "ok": "82",
        "ko": "208"
    },
    "percentiles3": {
        "total": "206",
        "ok": "206",
        "ko": "250"
    },
    "percentiles4": {
        "total": "416",
        "ok": "416",
        "ko": "251"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 91171,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 11,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 17,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "475",
        "ok": "474.911",
        "ko": "0.089"
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
        "total": "91200",
        "ok": "91183",
        "ko": "17"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "117"
    },
    "maxResponseTime": {
        "total": "1538",
        "ok": "1538",
        "ko": "251"
    },
    "meanResponseTime": {
        "total": "65",
        "ok": "65",
        "ko": "191"
    },
    "standardDeviation": {
        "total": "79",
        "ok": "79",
        "ko": "38"
    },
    "percentiles1": {
        "total": "35",
        "ok": "35",
        "ko": "196"
    },
    "percentiles2": {
        "total": "82",
        "ok": "82",
        "ko": "208"
    },
    "percentiles3": {
        "total": "206",
        "ok": "206",
        "ko": "250"
    },
    "percentiles4": {
        "total": "416",
        "ok": "416",
        "ko": "251"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 91171,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 11,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 17,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "475",
        "ok": "474.911",
        "ko": "0.089"
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
