var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1140",
        "ok": "324",
        "ko": "816"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "40",
        "ko": "21015"
    },
    "maxResponseTime": {
        "total": "21147",
        "ok": "16401",
        "ko": "21147"
    },
    "meanResponseTime": {
        "total": "15776",
        "ok": "2518",
        "ko": "21040"
    },
    "standardDeviation": {
        "total": "8632",
        "ok": "4076",
        "ko": "11"
    },
    "percentiles1": {
        "total": "21035",
        "ok": "56",
        "ko": "21039"
    },
    "percentiles2": {
        "total": "21043",
        "ok": "3737",
        "ko": "21045"
    },
    "percentiles3": {
        "total": "21053",
        "ok": "11780",
        "ko": "21055"
    },
    "percentiles4": {
        "total": "21071",
        "ok": "13161",
        "ko": "21082"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 213,
    "percentage": 19
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 107,
    "percentage": 9
},
    "group4": {
    "name": "failed",
    "count": 816,
    "percentage": 72
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.403",
        "ok": "1.536",
        "ko": "3.867"
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
        "total": "1140",
        "ok": "324",
        "ko": "816"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "40",
        "ko": "21015"
    },
    "maxResponseTime": {
        "total": "21147",
        "ok": "16401",
        "ko": "21147"
    },
    "meanResponseTime": {
        "total": "15776",
        "ok": "2518",
        "ko": "21040"
    },
    "standardDeviation": {
        "total": "8632",
        "ok": "4076",
        "ko": "11"
    },
    "percentiles1": {
        "total": "21035",
        "ok": "56",
        "ko": "21039"
    },
    "percentiles2": {
        "total": "21043",
        "ok": "3737",
        "ko": "21045"
    },
    "percentiles3": {
        "total": "21053",
        "ok": "11780",
        "ko": "21055"
    },
    "percentiles4": {
        "total": "21071",
        "ok": "13161",
        "ko": "21082"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 213,
    "percentage": 19
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 107,
    "percentage": 9
},
    "group4": {
    "name": "failed",
    "count": 816,
    "percentage": 72
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.403",
        "ok": "1.536",
        "ko": "3.867"
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
