var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "11400",
        "ok": "10583",
        "ko": "817"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "40",
        "ko": "13"
    },
    "maxResponseTime": {
        "total": "23124",
        "ok": "19290",
        "ko": "23124"
    },
    "meanResponseTime": {
        "total": "8165",
        "ok": "7180",
        "ko": "20934"
    },
    "standardDeviation": {
        "total": "5024",
        "ok": "3658",
        "ko": "1802"
    },
    "percentiles1": {
        "total": "7211",
        "ok": "6952",
        "ko": "21050"
    },
    "percentiles2": {
        "total": "9806",
        "ok": "8973",
        "ko": "21060"
    },
    "percentiles3": {
        "total": "21044",
        "ok": "14736",
        "ko": "21247"
    },
    "percentiles4": {
        "total": "21079",
        "ok": "16801",
        "ko": "21864"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 377,
    "percentage": 3
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 43,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 10163,
    "percentage": 89
},
    "group4": {
    "name": "failed",
    "count": 817,
    "percentage": 7
},
    "meanNumberOfRequestsPerSecond": {
        "total": "53.774",
        "ok": "49.92",
        "ko": "3.854"
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
        "ok": "10583",
        "ko": "817"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "40",
        "ko": "13"
    },
    "maxResponseTime": {
        "total": "23124",
        "ok": "19290",
        "ko": "23124"
    },
    "meanResponseTime": {
        "total": "8165",
        "ok": "7180",
        "ko": "20934"
    },
    "standardDeviation": {
        "total": "5024",
        "ok": "3658",
        "ko": "1802"
    },
    "percentiles1": {
        "total": "7211",
        "ok": "6952",
        "ko": "21050"
    },
    "percentiles2": {
        "total": "9806",
        "ok": "8973",
        "ko": "21060"
    },
    "percentiles3": {
        "total": "21044",
        "ok": "14736",
        "ko": "21247"
    },
    "percentiles4": {
        "total": "21079",
        "ok": "16801",
        "ko": "21864"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 377,
    "percentage": 3
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 43,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 10163,
    "percentage": 89
},
    "group4": {
    "name": "failed",
    "count": 817,
    "percentage": 7
},
    "meanNumberOfRequestsPerSecond": {
        "total": "53.774",
        "ok": "49.92",
        "ko": "3.854"
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
