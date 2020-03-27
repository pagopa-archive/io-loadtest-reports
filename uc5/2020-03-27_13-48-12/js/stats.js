var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "11400",
        "ok": "10762",
        "ko": "638"
    },
    "minResponseTime": {
        "total": "19",
        "ok": "40",
        "ko": "19"
    },
    "maxResponseTime": {
        "total": "23448",
        "ok": "21910",
        "ko": "23448"
    },
    "meanResponseTime": {
        "total": "8682",
        "ok": "7949",
        "ko": "21040"
    },
    "standardDeviation": {
        "total": "4743",
        "ok": "3768",
        "ko": "858"
    },
    "percentiles1": {
        "total": "8497",
        "ok": "8356",
        "ko": "21039"
    },
    "percentiles2": {
        "total": "10003",
        "ok": "9509",
        "ko": "21047"
    },
    "percentiles3": {
        "total": "21028",
        "ok": "14817",
        "ko": "21095"
    },
    "percentiles4": {
        "total": "21051",
        "ok": "18656",
        "ko": "22310"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 370,
    "percentage": 3
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 10386,
    "percentage": 91
},
    "group4": {
    "name": "failed",
    "count": 638,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "53.521",
        "ok": "50.526",
        "ko": "2.995"
    }
},
contents: {
"req_get-messages-aa89a": {
        type: "REQUEST",
        name: "Get Messages",
path: "Get Messages",
pathFormatted: "req_get-messages-aa89a",
stats: {
    "name": "Get Messages",
    "numberOfRequests": {
        "total": "11400",
        "ok": "10762",
        "ko": "638"
    },
    "minResponseTime": {
        "total": "19",
        "ok": "40",
        "ko": "19"
    },
    "maxResponseTime": {
        "total": "23448",
        "ok": "21910",
        "ko": "23448"
    },
    "meanResponseTime": {
        "total": "8682",
        "ok": "7949",
        "ko": "21040"
    },
    "standardDeviation": {
        "total": "4743",
        "ok": "3768",
        "ko": "858"
    },
    "percentiles1": {
        "total": "8497",
        "ok": "8356",
        "ko": "21039"
    },
    "percentiles2": {
        "total": "10003",
        "ok": "9509",
        "ko": "21047"
    },
    "percentiles3": {
        "total": "21028",
        "ok": "14817",
        "ko": "21095"
    },
    "percentiles4": {
        "total": "21051",
        "ok": "18656",
        "ko": "22310"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 370,
    "percentage": 3
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 10386,
    "percentage": 91
},
    "group4": {
    "name": "failed",
    "count": 638,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "53.521",
        "ok": "50.526",
        "ko": "2.995"
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
