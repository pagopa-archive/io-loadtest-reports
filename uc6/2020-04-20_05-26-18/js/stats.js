var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "68400",
        "ok": "68384",
        "ko": "16"
    },
    "minResponseTime": {
        "total": "27",
        "ok": "27",
        "ko": "485"
    },
    "maxResponseTime": {
        "total": "5961",
        "ok": "5961",
        "ko": "1533"
    },
    "meanResponseTime": {
        "total": "908",
        "ok": "908",
        "ko": "1094"
    },
    "standardDeviation": {
        "total": "1342",
        "ok": "1342",
        "ko": "290"
    },
    "percentiles1": {
        "total": "178",
        "ok": "178",
        "ko": "1088"
    },
    "percentiles2": {
        "total": "1076",
        "ok": "1075",
        "ko": "1337"
    },
    "percentiles3": {
        "total": "3835",
        "ok": "3835",
        "ko": "1448"
    },
    "percentiles4": {
        "total": "4520",
        "ok": "4520",
        "ko": "1516"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 49718,
    "percentage": 73
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2007,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 16659,
    "percentage": 24
},
    "group4": {
    "name": "failed",
    "count": 16,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "350.769",
        "ok": "350.687",
        "ko": "0.082"
    }
},
contents: {
"req_get--api-v1-mes-9b886": {
        type: "REQUEST",
        name: "GET /api/v1/messages/{id_message}",
path: "GET /api/v1/messages/{id_message}",
pathFormatted: "req_get--api-v1-mes-9b886",
stats: {
    "name": "GET /api/v1/messages/{id_message}",
    "numberOfRequests": {
        "total": "68400",
        "ok": "68384",
        "ko": "16"
    },
    "minResponseTime": {
        "total": "27",
        "ok": "27",
        "ko": "485"
    },
    "maxResponseTime": {
        "total": "5961",
        "ok": "5961",
        "ko": "1533"
    },
    "meanResponseTime": {
        "total": "908",
        "ok": "908",
        "ko": "1094"
    },
    "standardDeviation": {
        "total": "1342",
        "ok": "1342",
        "ko": "290"
    },
    "percentiles1": {
        "total": "178",
        "ok": "178",
        "ko": "1088"
    },
    "percentiles2": {
        "total": "1076",
        "ok": "1076",
        "ko": "1337"
    },
    "percentiles3": {
        "total": "3835",
        "ok": "3835",
        "ko": "1448"
    },
    "percentiles4": {
        "total": "4520",
        "ok": "4520",
        "ko": "1516"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 49718,
    "percentage": 73
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2007,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 16659,
    "percentage": 24
},
    "group4": {
    "name": "failed",
    "count": 16,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "350.769",
        "ok": "350.687",
        "ko": "0.082"
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
