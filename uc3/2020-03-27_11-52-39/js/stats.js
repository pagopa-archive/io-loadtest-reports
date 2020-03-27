var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "40678",
        "ok": "40678",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "16",
        "ok": "16",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6239",
        "ok": "6239",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "984",
        "ok": "984",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1081",
        "ok": "1081",
        "ko": "-"
    },
    "percentiles1": {
        "total": "648",
        "ok": "648",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1390",
        "ok": "1390",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2629",
        "ok": "2629",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5515",
        "ok": "5515",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 22507,
    "percentage": 55
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3870,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 14301,
    "percentage": 35
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "208.605",
        "ok": "208.605",
        "ko": "-"
    }
},
contents: {
"req_echo-request-38d4a": {
        type: "REQUEST",
        name: "Echo Request",
path: "Echo Request",
pathFormatted: "req_echo-request-38d4a",
stats: {
    "name": "Echo Request",
    "numberOfRequests": {
        "total": "40678",
        "ok": "40678",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "16",
        "ok": "16",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6239",
        "ok": "6239",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "984",
        "ok": "984",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1081",
        "ok": "1081",
        "ko": "-"
    },
    "percentiles1": {
        "total": "648",
        "ok": "648",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1389",
        "ok": "1390",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2629",
        "ok": "2629",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5515",
        "ok": "5515",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 22507,
    "percentage": 55
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3870,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 14301,
    "percentage": 35
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "208.605",
        "ok": "208.605",
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
