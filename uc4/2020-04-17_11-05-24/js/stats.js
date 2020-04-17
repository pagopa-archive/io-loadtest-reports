var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "55000",
        "ok": "55000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "19",
        "ok": "19",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "54480",
        "ok": "54480",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "19527",
        "ok": "19527",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "17127",
        "ok": "17127",
        "ko": "-"
    },
    "percentiles1": {
        "total": "14926",
        "ok": "14928",
        "ko": "-"
    },
    "percentiles2": {
        "total": "34257",
        "ok": "34257",
        "ko": "-"
    },
    "percentiles3": {
        "total": "49963",
        "ok": "49962",
        "ko": "-"
    },
    "percentiles4": {
        "total": "53677",
        "ok": "53677",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10434,
    "percentage": 19
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 635,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 43931,
    "percentage": 80
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "333.333",
        "ok": "333.333",
        "ko": "-"
    }
},
contents: {
"req_get--staticprof-30951": {
        type: "REQUEST",
        name: "GET /staticprofile",
path: "GET /staticprofile",
pathFormatted: "req_get--staticprof-30951",
stats: {
    "name": "GET /staticprofile",
    "numberOfRequests": {
        "total": "55000",
        "ok": "55000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "19",
        "ok": "19",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "54480",
        "ok": "54480",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "19527",
        "ok": "19527",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "17127",
        "ok": "17127",
        "ko": "-"
    },
    "percentiles1": {
        "total": "14927",
        "ok": "14927",
        "ko": "-"
    },
    "percentiles2": {
        "total": "34278",
        "ok": "34275",
        "ko": "-"
    },
    "percentiles3": {
        "total": "49960",
        "ok": "49963",
        "ko": "-"
    },
    "percentiles4": {
        "total": "53677",
        "ok": "53677",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10434,
    "percentage": 19
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 635,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 43931,
    "percentage": 80
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "333.333",
        "ok": "333.333",
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
