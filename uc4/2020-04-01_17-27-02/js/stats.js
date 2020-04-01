var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "11400",
        "ok": "11208",
        "ko": "192"
    },
    "minResponseTime": {
        "total": "33",
        "ok": "33",
        "ko": "3500"
    },
    "maxResponseTime": {
        "total": "21081",
        "ok": "9122",
        "ko": "21081"
    },
    "meanResponseTime": {
        "total": "944",
        "ok": "601",
        "ko": "20951"
    },
    "standardDeviation": {
        "total": "3007",
        "ok": "1481",
        "ko": "1263"
    },
    "percentiles1": {
        "total": "48",
        "ok": "47",
        "ko": "21042"
    },
    "percentiles2": {
        "total": "82",
        "ok": "77",
        "ko": "21049"
    },
    "percentiles3": {
        "total": "4737",
        "ok": "3719",
        "ko": "21058"
    },
    "percentiles4": {
        "total": "21039",
        "ok": "9049",
        "ko": "21071"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9380,
    "percentage": 82
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 218,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1610,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "count": 192,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "53.774",
        "ok": "52.868",
        "ko": "0.906"
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
        "ok": "11208",
        "ko": "192"
    },
    "minResponseTime": {
        "total": "33",
        "ok": "33",
        "ko": "3500"
    },
    "maxResponseTime": {
        "total": "21081",
        "ok": "9122",
        "ko": "21081"
    },
    "meanResponseTime": {
        "total": "944",
        "ok": "601",
        "ko": "20951"
    },
    "standardDeviation": {
        "total": "3007",
        "ok": "1481",
        "ko": "1263"
    },
    "percentiles1": {
        "total": "48",
        "ok": "47",
        "ko": "21042"
    },
    "percentiles2": {
        "total": "82",
        "ok": "77",
        "ko": "21049"
    },
    "percentiles3": {
        "total": "4737",
        "ok": "3719",
        "ko": "21058"
    },
    "percentiles4": {
        "total": "21039",
        "ok": "9049",
        "ko": "21071"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9380,
    "percentage": 82
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 218,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1610,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "count": 192,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "53.774",
        "ok": "52.868",
        "ko": "0.906"
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
