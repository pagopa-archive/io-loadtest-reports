var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "11400",
        "ok": "576",
        "ko": "10824"
    },
    "minResponseTime": {
        "total": "38",
        "ok": "38",
        "ko": "21014"
    },
    "maxResponseTime": {
        "total": "21888",
        "ok": "9110",
        "ko": "21888"
    },
    "meanResponseTime": {
        "total": "20004",
        "ok": "261",
        "ko": "21054"
    },
    "standardDeviation": {
        "total": "4564",
        "ok": "1269",
        "ko": "54"
    },
    "percentiles1": {
        "total": "21046",
        "ok": "49",
        "ko": "21047"
    },
    "percentiles2": {
        "total": "21055",
        "ok": "58",
        "ko": "21055"
    },
    "percentiles3": {
        "total": "21080",
        "ok": "128",
        "ko": "21082"
    },
    "percentiles4": {
        "total": "21226",
        "ok": "9077",
        "ko": "21236"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 559,
    "percentage": 5
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 17,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 10824,
    "percentage": 95
},
    "meanNumberOfRequestsPerSecond": {
        "total": "53.521",
        "ok": "2.704",
        "ko": "50.817"
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
        "ok": "576",
        "ko": "10824"
    },
    "minResponseTime": {
        "total": "38",
        "ok": "38",
        "ko": "21014"
    },
    "maxResponseTime": {
        "total": "21888",
        "ok": "9110",
        "ko": "21888"
    },
    "meanResponseTime": {
        "total": "20004",
        "ok": "261",
        "ko": "21054"
    },
    "standardDeviation": {
        "total": "4564",
        "ok": "1269",
        "ko": "54"
    },
    "percentiles1": {
        "total": "21046",
        "ok": "49",
        "ko": "21047"
    },
    "percentiles2": {
        "total": "21055",
        "ok": "58",
        "ko": "21055"
    },
    "percentiles3": {
        "total": "21080",
        "ok": "128",
        "ko": "21082"
    },
    "percentiles4": {
        "total": "21226",
        "ok": "9077",
        "ko": "21236"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 559,
    "percentage": 5
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 17,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 10824,
    "percentage": 95
},
    "meanNumberOfRequestsPerSecond": {
        "total": "53.521",
        "ok": "2.704",
        "ko": "50.817"
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
