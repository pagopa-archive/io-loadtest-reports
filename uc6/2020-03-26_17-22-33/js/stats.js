var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "838",
        "ok": "258",
        "ko": "580"
    },
    "minResponseTime": {
        "total": "88",
        "ok": "88",
        "ko": "21017"
    },
    "maxResponseTime": {
        "total": "21129",
        "ok": "505",
        "ko": "21129"
    },
    "meanResponseTime": {
        "total": "14632",
        "ok": "219",
        "ko": "21044"
    },
    "standardDeviation": {
        "total": "9613",
        "ok": "59",
        "ko": "14"
    },
    "percentiles1": {
        "total": "21036",
        "ok": "204",
        "ko": "21043"
    },
    "percentiles2": {
        "total": "21046",
        "ok": "244",
        "ko": "21049"
    },
    "percentiles3": {
        "total": "21060",
        "ok": "314",
        "ko": "21065"
    },
    "percentiles4": {
        "total": "21093",
        "ok": "446",
        "ko": "21100"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 258,
    "percentage": 31
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
    "count": 580,
    "percentage": 69
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.029",
        "ok": "1.24",
        "ko": "2.788"
    }
},
contents: {
"req_get-message-6611b": {
        type: "REQUEST",
        name: "Get Message",
path: "Get Message",
pathFormatted: "req_get-message-6611b",
stats: {
    "name": "Get Message",
    "numberOfRequests": {
        "total": "838",
        "ok": "258",
        "ko": "580"
    },
    "minResponseTime": {
        "total": "88",
        "ok": "88",
        "ko": "21017"
    },
    "maxResponseTime": {
        "total": "21129",
        "ok": "505",
        "ko": "21129"
    },
    "meanResponseTime": {
        "total": "14632",
        "ok": "219",
        "ko": "21044"
    },
    "standardDeviation": {
        "total": "9613",
        "ok": "59",
        "ko": "14"
    },
    "percentiles1": {
        "total": "21036",
        "ok": "204",
        "ko": "21043"
    },
    "percentiles2": {
        "total": "21046",
        "ok": "244",
        "ko": "21049"
    },
    "percentiles3": {
        "total": "21060",
        "ok": "314",
        "ko": "21065"
    },
    "percentiles4": {
        "total": "21093",
        "ok": "446",
        "ko": "21100"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 258,
    "percentage": 31
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
    "count": 580,
    "percentage": 69
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.029",
        "ok": "1.24",
        "ko": "2.788"
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
