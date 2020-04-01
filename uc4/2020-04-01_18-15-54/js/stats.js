var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6840",
        "ok": "4836",
        "ko": "2004"
    },
    "minResponseTime": {
        "total": "35",
        "ok": "35",
        "ko": "21015"
    },
    "maxResponseTime": {
        "total": "23611",
        "ok": "20472",
        "ko": "23611"
    },
    "meanResponseTime": {
        "total": "8543",
        "ok": "3317",
        "ko": "21154"
    },
    "standardDeviation": {
        "total": "9634",
        "ok": "6167",
        "ko": "246"
    },
    "percentiles1": {
        "total": "71",
        "ok": "49",
        "ko": "21053"
    },
    "percentiles2": {
        "total": "21037",
        "ok": "289",
        "ko": "21139"
    },
    "percentiles3": {
        "total": "21242",
        "ok": "17789",
        "ko": "21752"
    },
    "percentiles4": {
        "total": "21901",
        "ok": "18939",
        "ko": "22235"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3652,
    "percentage": 53
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1176,
    "percentage": 17
},
    "group4": {
    "name": "failed",
    "count": 2004,
    "percentage": 29
},
    "meanNumberOfRequestsPerSecond": {
        "total": "32.264",
        "ok": "22.811",
        "ko": "9.453"
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
        "ok": "4836",
        "ko": "2004"
    },
    "minResponseTime": {
        "total": "35",
        "ok": "35",
        "ko": "21015"
    },
    "maxResponseTime": {
        "total": "23611",
        "ok": "20472",
        "ko": "23611"
    },
    "meanResponseTime": {
        "total": "8543",
        "ok": "3317",
        "ko": "21154"
    },
    "standardDeviation": {
        "total": "9634",
        "ok": "6167",
        "ko": "246"
    },
    "percentiles1": {
        "total": "71",
        "ok": "49",
        "ko": "21053"
    },
    "percentiles2": {
        "total": "21037",
        "ok": "289",
        "ko": "21139"
    },
    "percentiles3": {
        "total": "21242",
        "ok": "17789",
        "ko": "21752"
    },
    "percentiles4": {
        "total": "21901",
        "ok": "18939",
        "ko": "22235"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3652,
    "percentage": 53
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1176,
    "percentage": 17
},
    "group4": {
    "name": "failed",
    "count": 2004,
    "percentage": 29
},
    "meanNumberOfRequestsPerSecond": {
        "total": "32.264",
        "ok": "22.811",
        "ko": "9.453"
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
