var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30000",
        "ok": "30000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "13",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5918",
        "ok": "5918",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1262",
        "ok": "1262",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1820",
        "ok": "1820",
        "ko": "-"
    },
    "percentiles1": {
        "total": "20",
        "ok": "20",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2794",
        "ok": "2794",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5006",
        "ok": "5008",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5433",
        "ok": "5433",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19256,
    "percentage": 64
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 766,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 9978,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "491.803",
        "ok": "491.803",
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
        "total": "30000",
        "ok": "30000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "13",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5918",
        "ok": "5918",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1262",
        "ok": "1262",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1820",
        "ok": "1820",
        "ko": "-"
    },
    "percentiles1": {
        "total": "20",
        "ok": "20",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2788",
        "ok": "2794",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5006",
        "ok": "5008",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5433",
        "ok": "5433",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19256,
    "percentage": 64
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 766,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 9978,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "491.803",
        "ok": "491.803",
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
