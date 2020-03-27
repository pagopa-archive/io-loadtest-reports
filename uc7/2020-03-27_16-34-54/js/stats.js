var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "22800",
        "ok": "22800",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "25",
        "ok": "25",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "57911",
        "ok": "57911",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "18765",
        "ok": "18765",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "17793",
        "ok": "17793",
        "ko": "-"
    },
    "percentiles1": {
        "total": "13744",
        "ok": "13749",
        "ko": "-"
    },
    "percentiles2": {
        "total": "37827",
        "ok": "37816",
        "ko": "-"
    },
    "percentiles3": {
        "total": "52708",
        "ok": "52708",
        "ko": "-"
    },
    "percentiles4": {
        "total": "55587",
        "ok": "55587",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4826,
    "percentage": 21
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 292,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 17682,
    "percentage": 78
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "93.827",
        "ok": "93.827",
        "ko": "-"
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
        "total": "22800",
        "ok": "22800",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "25",
        "ok": "25",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "57911",
        "ok": "57911",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "18765",
        "ok": "18765",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "17793",
        "ok": "17793",
        "ko": "-"
    },
    "percentiles1": {
        "total": "13745",
        "ok": "13740",
        "ko": "-"
    },
    "percentiles2": {
        "total": "37813",
        "ok": "37816",
        "ko": "-"
    },
    "percentiles3": {
        "total": "52708",
        "ok": "52708",
        "ko": "-"
    },
    "percentiles4": {
        "total": "55587",
        "ok": "55587",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4826,
    "percentage": 21
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 292,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 17682,
    "percentage": 78
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "93.827",
        "ok": "93.827",
        "ko": "-"
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
