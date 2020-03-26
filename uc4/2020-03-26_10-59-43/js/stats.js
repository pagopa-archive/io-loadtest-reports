var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5814",
        "ok": "5454",
        "ko": "360"
    },
    "minResponseTime": {
        "total": "72",
        "ok": "72",
        "ko": "21017"
    },
    "maxResponseTime": {
        "total": "21106",
        "ok": "15781",
        "ko": "21106"
    },
    "meanResponseTime": {
        "total": "2252",
        "ok": "1011",
        "ko": "21053"
    },
    "standardDeviation": {
        "total": "5313",
        "ok": "2285",
        "ko": "18"
    },
    "percentiles1": {
        "total": "496",
        "ok": "484",
        "ko": "21050"
    },
    "percentiles2": {
        "total": "619",
        "ok": "587",
        "ko": "21064"
    },
    "percentiles3": {
        "total": "21037",
        "ok": "6043",
        "ko": "21087"
    },
    "percentiles4": {
        "total": "21069",
        "ok": "12565",
        "ko": "21103"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5074,
    "percentage": 87
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 17,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 363,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "count": 360,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "27.686",
        "ok": "25.971",
        "ko": "1.714"
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
        "total": "5814",
        "ok": "5454",
        "ko": "360"
    },
    "minResponseTime": {
        "total": "72",
        "ok": "72",
        "ko": "21017"
    },
    "maxResponseTime": {
        "total": "21106",
        "ok": "15781",
        "ko": "21106"
    },
    "meanResponseTime": {
        "total": "2252",
        "ok": "1011",
        "ko": "21053"
    },
    "standardDeviation": {
        "total": "5313",
        "ok": "2285",
        "ko": "18"
    },
    "percentiles1": {
        "total": "496",
        "ok": "484",
        "ko": "21050"
    },
    "percentiles2": {
        "total": "619",
        "ok": "587",
        "ko": "21064"
    },
    "percentiles3": {
        "total": "21037",
        "ok": "6042",
        "ko": "21087"
    },
    "percentiles4": {
        "total": "21069",
        "ok": "12565",
        "ko": "21103"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5074,
    "percentage": 87
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 17,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 363,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "count": 360,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "27.686",
        "ok": "25.971",
        "ko": "1.714"
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
