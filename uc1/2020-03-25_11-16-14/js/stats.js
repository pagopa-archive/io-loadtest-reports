var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "114000",
        "ok": "113978",
        "ko": "22"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "1149"
    },
    "maxResponseTime": {
        "total": "9957",
        "ok": "9957",
        "ko": "1426"
    },
    "meanResponseTime": {
        "total": "764",
        "ok": "764",
        "ko": "1285"
    },
    "standardDeviation": {
        "total": "1211",
        "ok": "1212",
        "ko": "89"
    },
    "percentiles1": {
        "total": "89",
        "ok": "89",
        "ko": "1285"
    },
    "percentiles2": {
        "total": "1321",
        "ok": "1321",
        "ko": "1357"
    },
    "percentiles3": {
        "total": "3392",
        "ok": "3392",
        "ko": "1410"
    },
    "percentiles4": {
        "total": "4197",
        "ok": "4198",
        "ko": "1423"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 82361,
    "percentage": 72
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2370,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 29247,
    "percentage": 26
},
    "group4": {
    "name": "failed",
    "count": 22,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "590.674",
        "ok": "590.56",
        "ko": "0.114"
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
        "total": "114000",
        "ok": "113978",
        "ko": "22"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "1149"
    },
    "maxResponseTime": {
        "total": "9957",
        "ok": "9957",
        "ko": "1426"
    },
    "meanResponseTime": {
        "total": "764",
        "ok": "764",
        "ko": "1285"
    },
    "standardDeviation": {
        "total": "1211",
        "ok": "1212",
        "ko": "89"
    },
    "percentiles1": {
        "total": "89",
        "ok": "89",
        "ko": "1285"
    },
    "percentiles2": {
        "total": "1321",
        "ok": "1321",
        "ko": "1357"
    },
    "percentiles3": {
        "total": "3392",
        "ok": "3392",
        "ko": "1410"
    },
    "percentiles4": {
        "total": "4198",
        "ok": "4198",
        "ko": "1423"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 82361,
    "percentage": 72
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2370,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 29247,
    "percentage": 26
},
    "group4": {
    "name": "failed",
    "count": 22,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "590.674",
        "ok": "590.56",
        "ko": "0.114"
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
