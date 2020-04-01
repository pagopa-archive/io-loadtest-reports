var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "280",
        "ko": "5720"
    },
    "minResponseTime": {
        "total": "554",
        "ok": "554",
        "ko": "21010"
    },
    "maxResponseTime": {
        "total": "22009",
        "ok": "1243",
        "ko": "22009"
    },
    "meanResponseTime": {
        "total": "20121",
        "ok": "878",
        "ko": "21062"
    },
    "standardDeviation": {
        "total": "4259",
        "ok": "133",
        "ko": "103"
    },
    "percentiles1": {
        "total": "21038",
        "ok": "885",
        "ko": "21039"
    },
    "percentiles2": {
        "total": "21047",
        "ok": "971",
        "ko": "21048"
    },
    "percentiles3": {
        "total": "21121",
        "ok": "1086",
        "ko": "21132"
    },
    "percentiles4": {
        "total": "21641",
        "ok": "1119",
        "ko": "21646"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 80,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 198,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 5720,
    "percentage": 95
},
    "meanNumberOfRequestsPerSecond": {
        "total": "115.385",
        "ok": "5.385",
        "ko": "110"
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
        "ok": "280",
        "ko": "5720"
    },
    "minResponseTime": {
        "total": "554",
        "ok": "554",
        "ko": "21010"
    },
    "maxResponseTime": {
        "total": "22009",
        "ok": "1243",
        "ko": "22009"
    },
    "meanResponseTime": {
        "total": "20121",
        "ok": "878",
        "ko": "21062"
    },
    "standardDeviation": {
        "total": "4259",
        "ok": "133",
        "ko": "103"
    },
    "percentiles1": {
        "total": "21038",
        "ok": "885",
        "ko": "21039"
    },
    "percentiles2": {
        "total": "21047",
        "ok": "971",
        "ko": "21048"
    },
    "percentiles3": {
        "total": "21121",
        "ok": "1086",
        "ko": "21132"
    },
    "percentiles4": {
        "total": "21641",
        "ok": "1119",
        "ko": "21646"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 80,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 198,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 5720,
    "percentage": 95
},
    "meanNumberOfRequestsPerSecond": {
        "total": "115.385",
        "ok": "5.385",
        "ko": "110"
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
