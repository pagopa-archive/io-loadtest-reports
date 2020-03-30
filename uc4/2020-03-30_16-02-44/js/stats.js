var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "11400",
        "ok": "11363",
        "ko": "37"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "34",
        "ko": "13"
    },
    "maxResponseTime": {
        "total": "21100",
        "ok": "13454",
        "ko": "21100"
    },
    "meanResponseTime": {
        "total": "2228",
        "ok": "2168",
        "ko": "20477"
    },
    "standardDeviation": {
        "total": "2770",
        "ok": "2564",
        "ko": "3411"
    },
    "percentiles1": {
        "total": "75",
        "ok": "74",
        "ko": "21041"
    },
    "percentiles2": {
        "total": "4593",
        "ok": "4593",
        "ko": "21053"
    },
    "percentiles3": {
        "total": "6605",
        "ok": "6543",
        "ko": "21064"
    },
    "percentiles4": {
        "total": "8052",
        "ok": "7775",
        "ko": "21088"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6194,
    "percentage": 54
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 107,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5062,
    "percentage": 44
},
    "group4": {
    "name": "failed",
    "count": 37,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "53.774",
        "ok": "53.599",
        "ko": "0.175"
    }
},
contents: {
"req_get-profile-340b4": {
        type: "REQUEST",
        name: "Get Profile",
path: "Get Profile",
pathFormatted: "req_get-profile-340b4",
stats: {
    "name": "Get Profile",
    "numberOfRequests": {
        "total": "11400",
        "ok": "11363",
        "ko": "37"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "34",
        "ko": "13"
    },
    "maxResponseTime": {
        "total": "21100",
        "ok": "13454",
        "ko": "21100"
    },
    "meanResponseTime": {
        "total": "2228",
        "ok": "2168",
        "ko": "20477"
    },
    "standardDeviation": {
        "total": "2770",
        "ok": "2564",
        "ko": "3411"
    },
    "percentiles1": {
        "total": "75",
        "ok": "74",
        "ko": "21041"
    },
    "percentiles2": {
        "total": "4601",
        "ok": "4589",
        "ko": "21053"
    },
    "percentiles3": {
        "total": "6604",
        "ok": "6543",
        "ko": "21064"
    },
    "percentiles4": {
        "total": "8052",
        "ok": "7775",
        "ko": "21088"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6194,
    "percentage": 54
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 107,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5062,
    "percentage": 44
},
    "group4": {
    "name": "failed",
    "count": 37,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "53.774",
        "ok": "53.599",
        "ko": "0.175"
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
