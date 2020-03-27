var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "11400",
        "ok": "11202",
        "ko": "198"
    },
    "minResponseTime": {
        "total": "43",
        "ok": "43",
        "ko": "9308"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "23413",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "2495",
        "ok": "2157",
        "ko": "21641"
    },
    "standardDeviation": {
        "total": "4455",
        "ok": "3609",
        "ko": "5752"
    },
    "percentiles1": {
        "total": "83",
        "ok": "82",
        "ko": "21057"
    },
    "percentiles2": {
        "total": "3055",
        "ok": "2632",
        "ko": "21114"
    },
    "percentiles3": {
        "total": "9453",
        "ok": "8612",
        "ko": "21294"
    },
    "percentiles4": {
        "total": "21050",
        "ok": "14582",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7351,
    "percentage": 64
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 255,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3596,
    "percentage": 32
},
    "group4": {
    "name": "failed",
    "count": 198,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "49.132",
        "ko": "0.868"
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
        "total": "11400",
        "ok": "11202",
        "ko": "198"
    },
    "minResponseTime": {
        "total": "43",
        "ok": "43",
        "ko": "9308"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "23413",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "2495",
        "ok": "2157",
        "ko": "21641"
    },
    "standardDeviation": {
        "total": "4455",
        "ok": "3609",
        "ko": "5752"
    },
    "percentiles1": {
        "total": "83",
        "ok": "81",
        "ko": "21057"
    },
    "percentiles2": {
        "total": "3055",
        "ok": "2632",
        "ko": "21114"
    },
    "percentiles3": {
        "total": "9453",
        "ok": "8612",
        "ko": "21294"
    },
    "percentiles4": {
        "total": "21050",
        "ok": "14582",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7351,
    "percentage": 64
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 255,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3596,
    "percentage": 32
},
    "group4": {
    "name": "failed",
    "count": 198,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "49.132",
        "ko": "0.868"
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
