var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "102600",
        "ok": "102600",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3196",
        "ok": "3196",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "103",
        "ok": "103",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "147",
        "ok": "147",
        "ko": "-"
    },
    "percentiles1": {
        "total": "56",
        "ok": "56",
        "ko": "-"
    },
    "percentiles2": {
        "total": "126",
        "ok": "126",
        "ko": "-"
    },
    "percentiles3": {
        "total": "352",
        "ok": "352",
        "ko": "-"
    },
    "percentiles4": {
        "total": "784",
        "ok": "784",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 101641,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 902,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 57,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "534.375",
        "ok": "534.375",
        "ko": "-"
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
        "total": "102600",
        "ok": "102600",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3196",
        "ok": "3196",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "103",
        "ok": "103",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "147",
        "ok": "147",
        "ko": "-"
    },
    "percentiles1": {
        "total": "56",
        "ok": "56",
        "ko": "-"
    },
    "percentiles2": {
        "total": "126",
        "ok": "126",
        "ko": "-"
    },
    "percentiles3": {
        "total": "352",
        "ok": "352",
        "ko": "-"
    },
    "percentiles4": {
        "total": "784",
        "ok": "784",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 101641,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 902,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 57,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "534.375",
        "ok": "534.375",
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
