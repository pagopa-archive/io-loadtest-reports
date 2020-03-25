var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "27886",
        "ok": "26862",
        "ko": "1024"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "13",
        "ko": "15988"
    },
    "maxResponseTime": {
        "total": "83642",
        "ok": "83642",
        "ko": "26404"
    },
    "meanResponseTime": {
        "total": "20993",
        "ok": "20983",
        "ko": "21254"
    },
    "standardDeviation": {
        "total": "19672",
        "ok": "20036",
        "ko": "2725"
    },
    "percentiles1": {
        "total": "14589",
        "ok": "13056",
        "ko": "21236"
    },
    "percentiles2": {
        "total": "35865",
        "ok": "36537",
        "ko": "23477"
    },
    "percentiles3": {
        "total": "59845",
        "ok": "60232",
        "ko": "25577"
    },
    "percentiles4": {
        "total": "65031",
        "ok": "65185",
        "ko": "25876"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3810,
    "percentage": 14
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 481,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 22571,
    "percentage": 81
},
    "group4": {
    "name": "failed",
    "count": 1024,
    "percentage": 4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "157.548",
        "ok": "151.763",
        "ko": "5.785"
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
        "total": "27886",
        "ok": "26862",
        "ko": "1024"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "13",
        "ko": "15988"
    },
    "maxResponseTime": {
        "total": "83642",
        "ok": "83642",
        "ko": "26404"
    },
    "meanResponseTime": {
        "total": "20993",
        "ok": "20983",
        "ko": "21254"
    },
    "standardDeviation": {
        "total": "19672",
        "ok": "20036",
        "ko": "2725"
    },
    "percentiles1": {
        "total": "14591",
        "ok": "13030",
        "ko": "21236"
    },
    "percentiles2": {
        "total": "35874",
        "ok": "36529",
        "ko": "23477"
    },
    "percentiles3": {
        "total": "59845",
        "ok": "60232",
        "ko": "25577"
    },
    "percentiles4": {
        "total": "65031",
        "ok": "65185",
        "ko": "25876"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3810,
    "percentage": 14
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 481,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 22571,
    "percentage": 81
},
    "group4": {
    "name": "failed",
    "count": 1024,
    "percentage": 4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "157.548",
        "ok": "151.763",
        "ko": "5.785"
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
