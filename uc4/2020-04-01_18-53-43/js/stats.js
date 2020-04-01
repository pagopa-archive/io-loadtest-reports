var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6840",
        "ok": "6298",
        "ko": "542"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "36",
        "ko": "12"
    },
    "maxResponseTime": {
        "total": "21235",
        "ok": "15604",
        "ko": "21235"
    },
    "meanResponseTime": {
        "total": "2067",
        "ok": "436",
        "ko": "21011"
    },
    "standardDeviation": {
        "total": "5944",
        "ok": "2181",
        "ko": "903"
    },
    "percentiles1": {
        "total": "47",
        "ok": "47",
        "ko": "21046"
    },
    "percentiles2": {
        "total": "57",
        "ok": "52",
        "ko": "21053"
    },
    "percentiles3": {
        "total": "21043",
        "ok": "171",
        "ko": "21070"
    },
    "percentiles4": {
        "total": "21058",
        "ok": "14490",
        "ko": "21165"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6068,
    "percentage": 89
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 29,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 201,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 542,
    "percentage": 8
},
    "meanNumberOfRequestsPerSecond": {
        "total": "32.113",
        "ok": "29.568",
        "ko": "2.545"
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
        "total": "6840",
        "ok": "6298",
        "ko": "542"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "36",
        "ko": "12"
    },
    "maxResponseTime": {
        "total": "21235",
        "ok": "15604",
        "ko": "21235"
    },
    "meanResponseTime": {
        "total": "2067",
        "ok": "436",
        "ko": "21011"
    },
    "standardDeviation": {
        "total": "5944",
        "ok": "2181",
        "ko": "903"
    },
    "percentiles1": {
        "total": "47",
        "ok": "47",
        "ko": "21046"
    },
    "percentiles2": {
        "total": "57",
        "ok": "52",
        "ko": "21053"
    },
    "percentiles3": {
        "total": "21043",
        "ok": "172",
        "ko": "21070"
    },
    "percentiles4": {
        "total": "21058",
        "ok": "14490",
        "ko": "21165"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6068,
    "percentage": 89
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 29,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 201,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 542,
    "percentage": 8
},
    "meanNumberOfRequestsPerSecond": {
        "total": "32.113",
        "ok": "29.568",
        "ko": "2.545"
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
