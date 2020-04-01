var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "11400",
        "ok": "9564",
        "ko": "1836"
    },
    "minResponseTime": {
        "total": "14",
        "ok": "32",
        "ko": "14"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "25629",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "8620",
        "ok": "6134",
        "ko": "21571"
    },
    "standardDeviation": {
        "total": "8477",
        "ok": "6800",
        "ko": "2330"
    },
    "percentiles1": {
        "total": "7442",
        "ok": "3110",
        "ko": "21060"
    },
    "percentiles2": {
        "total": "16422",
        "ok": "11156",
        "ko": "21417"
    },
    "percentiles3": {
        "total": "21431",
        "ok": "18961",
        "ko": "24053"
    },
    "percentiles4": {
        "total": "23996",
        "ok": "21717",
        "ko": "27392"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4307,
    "percentage": 38
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 50,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5207,
    "percentage": 46
},
    "group4": {
    "name": "failed",
    "count": 1836,
    "percentage": 16
},
    "meanNumberOfRequestsPerSecond": {
        "total": "53.774",
        "ok": "45.113",
        "ko": "8.66"
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
        "ok": "9564",
        "ko": "1836"
    },
    "minResponseTime": {
        "total": "14",
        "ok": "32",
        "ko": "14"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "25629",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "8620",
        "ok": "6134",
        "ko": "21571"
    },
    "standardDeviation": {
        "total": "8477",
        "ok": "6800",
        "ko": "2330"
    },
    "percentiles1": {
        "total": "7442",
        "ok": "3110",
        "ko": "21060"
    },
    "percentiles2": {
        "total": "16422",
        "ok": "11156",
        "ko": "21417"
    },
    "percentiles3": {
        "total": "21431",
        "ok": "18961",
        "ko": "24053"
    },
    "percentiles4": {
        "total": "23996",
        "ok": "21717",
        "ko": "27392"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4307,
    "percentage": 38
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 50,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5207,
    "percentage": 46
},
    "group4": {
    "name": "failed",
    "count": 1836,
    "percentage": 16
},
    "meanNumberOfRequestsPerSecond": {
        "total": "53.774",
        "ok": "45.113",
        "ko": "8.66"
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
