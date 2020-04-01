var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "9120",
        "ok": "8992",
        "ko": "128"
    },
    "minResponseTime": {
        "total": "33",
        "ok": "33",
        "ko": "21022"
    },
    "maxResponseTime": {
        "total": "21175",
        "ok": "9082",
        "ko": "21175"
    },
    "meanResponseTime": {
        "total": "372",
        "ok": "77",
        "ko": "21046"
    },
    "standardDeviation": {
        "total": "2493",
        "ok": "360",
        "ko": "16"
    },
    "percentiles1": {
        "total": "47",
        "ok": "47",
        "ko": "21045"
    },
    "percentiles2": {
        "total": "56",
        "ok": "55",
        "ko": "21052"
    },
    "percentiles3": {
        "total": "149",
        "ok": "120",
        "ko": "21062"
    },
    "percentiles4": {
        "total": "21038",
        "ok": "367",
        "ko": "21094"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8943,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 28,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 21,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 128,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "45.829",
        "ok": "45.186",
        "ko": "0.643"
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
        "ok": "8992",
        "ko": "128"
    },
    "minResponseTime": {
        "total": "33",
        "ok": "33",
        "ko": "21022"
    },
    "maxResponseTime": {
        "total": "21175",
        "ok": "9082",
        "ko": "21175"
    },
    "meanResponseTime": {
        "total": "372",
        "ok": "77",
        "ko": "21046"
    },
    "standardDeviation": {
        "total": "2493",
        "ok": "360",
        "ko": "16"
    },
    "percentiles1": {
        "total": "47",
        "ok": "47",
        "ko": "21045"
    },
    "percentiles2": {
        "total": "56",
        "ok": "55",
        "ko": "21052"
    },
    "percentiles3": {
        "total": "149",
        "ok": "120",
        "ko": "21062"
    },
    "percentiles4": {
        "total": "21038",
        "ok": "367",
        "ko": "21094"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8943,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 28,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 21,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 128,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "45.829",
        "ok": "45.186",
        "ko": "0.643"
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
