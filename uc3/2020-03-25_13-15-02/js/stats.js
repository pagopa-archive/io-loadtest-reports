var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "44867",
        "ok": "29469",
        "ko": "15398"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "13",
        "ko": "9167"
    },
    "maxResponseTime": {
        "total": "101456",
        "ok": "101456",
        "ko": "93635"
    },
    "meanResponseTime": {
        "total": "35905",
        "ok": "21982",
        "ko": "62551"
    },
    "standardDeviation": {
        "total": "31835",
        "ok": "26155",
        "ko": "23726"
    },
    "percentiles1": {
        "total": "25870",
        "ok": "11723",
        "ko": "73410"
    },
    "percentiles2": {
        "total": "72210",
        "ok": "37354",
        "ko": "77872"
    },
    "percentiles3": {
        "total": "80646",
        "ok": "77013",
        "ko": "81775"
    },
    "percentiles4": {
        "total": "87648",
        "ok": "92951",
        "ko": "83258"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11558,
    "percentage": 26
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 33,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 17878,
    "percentage": 40
},
    "group4": {
    "name": "failed",
    "count": 15398,
    "percentage": 34
},
    "meanNumberOfRequestsPerSecond": {
        "total": "186.946",
        "ok": "122.787",
        "ko": "64.158"
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
        "total": "44867",
        "ok": "29469",
        "ko": "15398"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "13",
        "ko": "9167"
    },
    "maxResponseTime": {
        "total": "101456",
        "ok": "101456",
        "ko": "93635"
    },
    "meanResponseTime": {
        "total": "35905",
        "ok": "21982",
        "ko": "62551"
    },
    "standardDeviation": {
        "total": "31835",
        "ok": "26155",
        "ko": "23726"
    },
    "percentiles1": {
        "total": "25866",
        "ok": "11722",
        "ko": "73479"
    },
    "percentiles2": {
        "total": "72209",
        "ok": "37354",
        "ko": "77857"
    },
    "percentiles3": {
        "total": "80641",
        "ok": "77013",
        "ko": "81775"
    },
    "percentiles4": {
        "total": "87648",
        "ok": "92951",
        "ko": "83258"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11558,
    "percentage": 26
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 33,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 17878,
    "percentage": 40
},
    "group4": {
    "name": "failed",
    "count": 15398,
    "percentage": 34
},
    "meanNumberOfRequestsPerSecond": {
        "total": "186.946",
        "ok": "122.787",
        "ko": "64.158"
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
