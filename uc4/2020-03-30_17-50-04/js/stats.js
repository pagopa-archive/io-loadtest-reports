var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "767",
        "ok": "619",
        "ko": "148"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "41",
        "ko": "21027"
    },
    "maxResponseTime": {
        "total": "21172",
        "ok": "19743",
        "ko": "21172"
    },
    "meanResponseTime": {
        "total": "7919",
        "ok": "4776",
        "ko": "21065"
    },
    "standardDeviation": {
        "total": "7922",
        "ok": "5155",
        "ko": "32"
    },
    "percentiles1": {
        "total": "5027",
        "ok": "3055",
        "ko": "21055"
    },
    "percentiles2": {
        "total": "13167",
        "ok": "9627",
        "ko": "21069"
    },
    "percentiles3": {
        "total": "21069",
        "ok": "15654",
        "ko": "21137"
    },
    "percentiles4": {
        "total": "21137",
        "ok": "18450",
        "ko": "21155"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 224,
    "percentage": 29
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 14,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 381,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 148,
    "percentage": 19
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10.092",
        "ok": "8.145",
        "ko": "1.947"
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
        "total": "767",
        "ok": "619",
        "ko": "148"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "41",
        "ko": "21027"
    },
    "maxResponseTime": {
        "total": "21172",
        "ok": "19743",
        "ko": "21172"
    },
    "meanResponseTime": {
        "total": "7919",
        "ok": "4776",
        "ko": "21065"
    },
    "standardDeviation": {
        "total": "7922",
        "ok": "5155",
        "ko": "32"
    },
    "percentiles1": {
        "total": "5027",
        "ok": "3055",
        "ko": "21055"
    },
    "percentiles2": {
        "total": "13167",
        "ok": "9627",
        "ko": "21069"
    },
    "percentiles3": {
        "total": "21069",
        "ok": "15654",
        "ko": "21137"
    },
    "percentiles4": {
        "total": "21137",
        "ok": "18450",
        "ko": "21155"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 224,
    "percentage": 29
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 14,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 381,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 148,
    "percentage": 19
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10.092",
        "ok": "8.145",
        "ko": "1.947"
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
