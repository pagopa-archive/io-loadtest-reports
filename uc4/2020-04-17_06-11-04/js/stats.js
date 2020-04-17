var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "79800",
        "ok": "74822",
        "ko": "4978"
    },
    "minResponseTime": {
        "total": "25",
        "ok": "25",
        "ko": "3076"
    },
    "maxResponseTime": {
        "total": "27583",
        "ok": "27583",
        "ko": "27295"
    },
    "meanResponseTime": {
        "total": "3851",
        "ok": "3311",
        "ko": "11958"
    },
    "standardDeviation": {
        "total": "6748",
        "ok": "6455",
        "ko": "5803"
    },
    "percentiles1": {
        "total": "461",
        "ok": "396",
        "ko": "10257"
    },
    "percentiles2": {
        "total": "3326",
        "ok": "1729",
        "ko": "17951"
    },
    "percentiles3": {
        "total": "20116",
        "ok": "20046",
        "ko": "20919"
    },
    "percentiles4": {
        "total": "22425",
        "ok": "22139",
        "ko": "25382"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 45787,
    "percentage": 57
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5590,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 23445,
    "percentage": 29
},
    "group4": {
    "name": "failed",
    "count": 4978,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "378.199",
        "ok": "354.607",
        "ko": "23.592"
    }
},
contents: {
"req_get--api-v1-pro-83129": {
        type: "REQUEST",
        name: "GET /api/v1/profile",
path: "GET /api/v1/profile",
pathFormatted: "req_get--api-v1-pro-83129",
stats: {
    "name": "GET /api/v1/profile",
    "numberOfRequests": {
        "total": "79800",
        "ok": "74822",
        "ko": "4978"
    },
    "minResponseTime": {
        "total": "25",
        "ok": "25",
        "ko": "3076"
    },
    "maxResponseTime": {
        "total": "27583",
        "ok": "27583",
        "ko": "27295"
    },
    "meanResponseTime": {
        "total": "3851",
        "ok": "3311",
        "ko": "11958"
    },
    "standardDeviation": {
        "total": "6748",
        "ok": "6455",
        "ko": "5803"
    },
    "percentiles1": {
        "total": "461",
        "ok": "397",
        "ko": "10257"
    },
    "percentiles2": {
        "total": "3326",
        "ok": "1730",
        "ko": "17951"
    },
    "percentiles3": {
        "total": "20116",
        "ok": "20046",
        "ko": "20919"
    },
    "percentiles4": {
        "total": "22425",
        "ok": "22139",
        "ko": "25382"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 45787,
    "percentage": 57
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5590,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 23445,
    "percentage": 29
},
    "group4": {
    "name": "failed",
    "count": 4978,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "378.199",
        "ok": "354.607",
        "ko": "23.592"
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
