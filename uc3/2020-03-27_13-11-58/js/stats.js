var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "45600",
        "ok": "40925",
        "ko": "4675"
    },
    "minResponseTime": {
        "total": "15",
        "ok": "15",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60297",
        "ok": "60075",
        "ko": "60297"
    },
    "meanResponseTime": {
        "total": "19299",
        "ok": "14642",
        "ko": "60073"
    },
    "standardDeviation": {
        "total": "22322",
        "ok": "18536",
        "ko": "78"
    },
    "percentiles1": {
        "total": "8647",
        "ok": "5417",
        "ko": "60044"
    },
    "percentiles2": {
        "total": "35778",
        "ok": "25668",
        "ko": "60126"
    },
    "percentiles3": {
        "total": "60048",
        "ok": "53506",
        "ko": "60227"
    },
    "percentiles4": {
        "total": "60198",
        "ok": "58661",
        "ko": "60266"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 18679,
    "percentage": 41
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 350,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 21896,
    "percentage": 48
},
    "group4": {
    "name": "failed",
    "count": 4675,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "181.673",
        "ok": "163.048",
        "ko": "18.625"
    }
},
contents: {
"req_echo-request-38d4a": {
        type: "REQUEST",
        name: "Echo Request",
path: "Echo Request",
pathFormatted: "req_echo-request-38d4a",
stats: {
    "name": "Echo Request",
    "numberOfRequests": {
        "total": "45600",
        "ok": "40925",
        "ko": "4675"
    },
    "minResponseTime": {
        "total": "15",
        "ok": "15",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60297",
        "ok": "60075",
        "ko": "60297"
    },
    "meanResponseTime": {
        "total": "19299",
        "ok": "14642",
        "ko": "60073"
    },
    "standardDeviation": {
        "total": "22322",
        "ok": "18536",
        "ko": "78"
    },
    "percentiles1": {
        "total": "8637",
        "ok": "5429",
        "ko": "60044"
    },
    "percentiles2": {
        "total": "35778",
        "ok": "25856",
        "ko": "60126"
    },
    "percentiles3": {
        "total": "60048",
        "ok": "53507",
        "ko": "60227"
    },
    "percentiles4": {
        "total": "60198",
        "ok": "58661",
        "ko": "60266"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 18679,
    "percentage": 41
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 350,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 21896,
    "percentage": 48
},
    "group4": {
    "name": "failed",
    "count": 4675,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "181.673",
        "ok": "163.048",
        "ko": "18.625"
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
