var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "320",
        "ko": "5680"
    },
    "minResponseTime": {
        "total": "555",
        "ok": "555",
        "ko": "21005"
    },
    "maxResponseTime": {
        "total": "21900",
        "ok": "1157",
        "ko": "21900"
    },
    "meanResponseTime": {
        "total": "19982",
        "ok": "855",
        "ko": "21059"
    },
    "standardDeviation": {
        "total": "4541",
        "ok": "113",
        "ko": "96"
    },
    "percentiles1": {
        "total": "21037",
        "ok": "851",
        "ko": "21037"
    },
    "percentiles2": {
        "total": "21046",
        "ok": "932",
        "ko": "21047"
    },
    "percentiles3": {
        "total": "21121",
        "ok": "1039",
        "ko": "21131"
    },
    "percentiles4": {
        "total": "21563",
        "ok": "1108",
        "ko": "21577"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 96,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 224,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 5680,
    "percentage": 95
},
    "meanNumberOfRequestsPerSecond": {
        "total": "117.647",
        "ok": "6.275",
        "ko": "111.373"
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
        "total": "6000",
        "ok": "320",
        "ko": "5680"
    },
    "minResponseTime": {
        "total": "555",
        "ok": "555",
        "ko": "21005"
    },
    "maxResponseTime": {
        "total": "21900",
        "ok": "1157",
        "ko": "21900"
    },
    "meanResponseTime": {
        "total": "19982",
        "ok": "855",
        "ko": "21059"
    },
    "standardDeviation": {
        "total": "4541",
        "ok": "113",
        "ko": "96"
    },
    "percentiles1": {
        "total": "21037",
        "ok": "851",
        "ko": "21037"
    },
    "percentiles2": {
        "total": "21046",
        "ok": "932",
        "ko": "21047"
    },
    "percentiles3": {
        "total": "21121",
        "ok": "1039",
        "ko": "21131"
    },
    "percentiles4": {
        "total": "21563",
        "ok": "1108",
        "ko": "21577"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 96,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 224,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 5680,
    "percentage": 95
},
    "meanNumberOfRequestsPerSecond": {
        "total": "117.647",
        "ok": "6.275",
        "ko": "111.373"
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
