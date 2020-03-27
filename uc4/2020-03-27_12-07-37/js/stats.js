var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "15152",
        "ok": "15030",
        "ko": "122"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "41",
        "ko": "21019"
    },
    "maxResponseTime": {
        "total": "21129",
        "ok": "10532",
        "ko": "21129"
    },
    "meanResponseTime": {
        "total": "528",
        "ok": "361",
        "ko": "21059"
    },
    "standardDeviation": {
        "total": "1976",
        "ok": "696",
        "ko": "17"
    },
    "percentiles1": {
        "total": "170",
        "ok": "168",
        "ko": "21056"
    },
    "percentiles2": {
        "total": "417",
        "ok": "407",
        "ko": "21066"
    },
    "percentiles3": {
        "total": "1387",
        "ok": "1294",
        "ko": "21087"
    },
    "percentiles4": {
        "total": "9171",
        "ok": "2180",
        "ko": "21112"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 13656,
    "percentage": 90
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 538,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 836,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "count": 122,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "71.472",
        "ok": "70.896",
        "ko": "0.575"
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
        "total": "15152",
        "ok": "15030",
        "ko": "122"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "41",
        "ko": "21019"
    },
    "maxResponseTime": {
        "total": "21129",
        "ok": "10532",
        "ko": "21129"
    },
    "meanResponseTime": {
        "total": "528",
        "ok": "361",
        "ko": "21059"
    },
    "standardDeviation": {
        "total": "1976",
        "ok": "696",
        "ko": "17"
    },
    "percentiles1": {
        "total": "170",
        "ok": "168",
        "ko": "21056"
    },
    "percentiles2": {
        "total": "417",
        "ok": "407",
        "ko": "21066"
    },
    "percentiles3": {
        "total": "1386",
        "ok": "1294",
        "ko": "21087"
    },
    "percentiles4": {
        "total": "9171",
        "ok": "2180",
        "ko": "21112"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 13656,
    "percentage": 90
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 538,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 836,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "count": 122,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "71.472",
        "ok": "70.896",
        "ko": "0.575"
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
