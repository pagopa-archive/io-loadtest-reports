var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "9120",
        "ok": "9024",
        "ko": "96"
    },
    "minResponseTime": {
        "total": "30",
        "ok": "30",
        "ko": "3368"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "14832",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "980",
        "ok": "785",
        "ko": "19350"
    },
    "standardDeviation": {
        "total": "2948",
        "ok": "2153",
        "ko": "7014"
    },
    "percentiles1": {
        "total": "45",
        "ok": "45",
        "ko": "21042"
    },
    "percentiles2": {
        "total": "57",
        "ok": "56",
        "ko": "21053"
    },
    "percentiles3": {
        "total": "7536",
        "ok": "7040",
        "ko": "21072"
    },
    "percentiles4": {
        "total": "12741",
        "ok": "9436",
        "ko": "25238"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7782,
    "percentage": 85
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 83,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1159,
    "percentage": 13
},
    "group4": {
    "name": "failed",
    "count": 96,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "37.842",
        "ok": "37.444",
        "ko": "0.398"
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
        "total": "9120",
        "ok": "9024",
        "ko": "96"
    },
    "minResponseTime": {
        "total": "30",
        "ok": "30",
        "ko": "3368"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "14832",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "980",
        "ok": "785",
        "ko": "19350"
    },
    "standardDeviation": {
        "total": "2948",
        "ok": "2153",
        "ko": "7014"
    },
    "percentiles1": {
        "total": "45",
        "ok": "45",
        "ko": "21042"
    },
    "percentiles2": {
        "total": "57",
        "ok": "56",
        "ko": "21053"
    },
    "percentiles3": {
        "total": "7536",
        "ok": "7040",
        "ko": "21072"
    },
    "percentiles4": {
        "total": "12741",
        "ok": "9436",
        "ko": "25238"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7782,
    "percentage": 85
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 83,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1159,
    "percentage": 13
},
    "group4": {
    "name": "failed",
    "count": 96,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "37.842",
        "ok": "37.444",
        "ko": "0.398"
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
