var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "93750",
        "ok": "71264",
        "ko": "22486"
    },
    "minResponseTime": {
        "total": "20",
        "ok": "20",
        "ko": "14815"
    },
    "maxResponseTime": {
        "total": "116896",
        "ok": "116895",
        "ko": "116896"
    },
    "meanResponseTime": {
        "total": "44084",
        "ok": "35608",
        "ko": "70947"
    },
    "standardDeviation": {
        "total": "36041",
        "ok": "33220",
        "ko": "31125"
    },
    "percentiles1": {
        "total": "37765",
        "ok": "26634",
        "ko": "73729"
    },
    "percentiles2": {
        "total": "73499",
        "ok": "59681",
        "ko": "103392"
    },
    "percentiles3": {
        "total": "111042",
        "ok": "100381",
        "ko": "114825"
    },
    "percentiles4": {
        "total": "115543",
        "ok": "114615",
        "ko": "116065"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10659,
    "percentage": 11
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 595,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 60010,
    "percentage": 64
},
    "group4": {
    "name": "failed",
    "count": 22486,
    "percentage": 24
},
    "meanNumberOfRequestsPerSecond": {
        "total": "357.824",
        "ok": "272",
        "ko": "85.824"
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
        "total": "93750",
        "ok": "71264",
        "ko": "22486"
    },
    "minResponseTime": {
        "total": "20",
        "ok": "20",
        "ko": "14815"
    },
    "maxResponseTime": {
        "total": "116896",
        "ok": "116895",
        "ko": "116896"
    },
    "meanResponseTime": {
        "total": "44084",
        "ok": "35608",
        "ko": "70947"
    },
    "standardDeviation": {
        "total": "36041",
        "ok": "33220",
        "ko": "31125"
    },
    "percentiles1": {
        "total": "37772",
        "ok": "26652",
        "ko": "73729"
    },
    "percentiles2": {
        "total": "73505",
        "ok": "59682",
        "ko": "103392"
    },
    "percentiles3": {
        "total": "110996",
        "ok": "100384",
        "ko": "114825"
    },
    "percentiles4": {
        "total": "115543",
        "ok": "114615",
        "ko": "116065"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10659,
    "percentage": 11
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 595,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 60010,
    "percentage": 64
},
    "group4": {
    "name": "failed",
    "count": 22486,
    "percentage": 24
},
    "meanNumberOfRequestsPerSecond": {
        "total": "357.824",
        "ok": "272",
        "ko": "85.824"
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
