var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "11400",
        "ok": "10585",
        "ko": "815"
    },
    "minResponseTime": {
        "total": "34",
        "ok": "34",
        "ko": "4805"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "20567",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "3022",
        "ok": "1625",
        "ko": "21163"
    },
    "standardDeviation": {
        "total": "6309",
        "ok": "3903",
        "ko": "2131"
    },
    "percentiles1": {
        "total": "56",
        "ok": "54",
        "ko": "21159"
    },
    "percentiles2": {
        "total": "1264",
        "ok": "140",
        "ko": "21409"
    },
    "percentiles3": {
        "total": "21052",
        "ok": "10838",
        "ko": "21822"
    },
    "percentiles4": {
        "total": "21571",
        "ok": "18183",
        "ko": "22517"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8375,
    "percentage": 73
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 157,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2053,
    "percentage": 18
},
    "group4": {
    "name": "failed",
    "count": 815,
    "percentage": 7
},
    "meanNumberOfRequestsPerSecond": {
        "total": "52.778",
        "ok": "49.005",
        "ko": "3.773"
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
        "ok": "10585",
        "ko": "815"
    },
    "minResponseTime": {
        "total": "34",
        "ok": "34",
        "ko": "4805"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "20567",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "3022",
        "ok": "1625",
        "ko": "21163"
    },
    "standardDeviation": {
        "total": "6309",
        "ok": "3903",
        "ko": "2131"
    },
    "percentiles1": {
        "total": "56",
        "ok": "54",
        "ko": "21159"
    },
    "percentiles2": {
        "total": "1264",
        "ok": "140",
        "ko": "21409"
    },
    "percentiles3": {
        "total": "21052",
        "ok": "10838",
        "ko": "21822"
    },
    "percentiles4": {
        "total": "21571",
        "ok": "18183",
        "ko": "22517"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8375,
    "percentage": 73
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 157,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2053,
    "percentage": 18
},
    "group4": {
    "name": "failed",
    "count": 815,
    "percentage": 7
},
    "meanNumberOfRequestsPerSecond": {
        "total": "52.778",
        "ok": "49.005",
        "ko": "3.773"
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
