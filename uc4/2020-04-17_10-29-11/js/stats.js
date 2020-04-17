var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "55000",
        "ok": "55000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "19",
        "ok": "19",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "59856",
        "ok": "59856",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "20601",
        "ok": "20601",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "18452",
        "ok": "18452",
        "ko": "-"
    },
    "percentiles1": {
        "total": "15558",
        "ok": "15558",
        "ko": "-"
    },
    "percentiles2": {
        "total": "36540",
        "ok": "36480",
        "ko": "-"
    },
    "percentiles3": {
        "total": "53847",
        "ok": "53844",
        "ko": "-"
    },
    "percentiles4": {
        "total": "57680",
        "ok": "57680",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10944,
    "percentage": 20
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 552,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 43504,
    "percentage": 79
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "325.444",
        "ok": "325.444",
        "ko": "-"
    }
},
contents: {
"req_get--staticprof-30951": {
        type: "REQUEST",
        name: "GET /staticprofile",
path: "GET /staticprofile",
pathFormatted: "req_get--staticprof-30951",
stats: {
    "name": "GET /staticprofile",
    "numberOfRequests": {
        "total": "55000",
        "ok": "55000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "19",
        "ok": "19",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "59856",
        "ok": "59856",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "20601",
        "ok": "20601",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "18452",
        "ok": "18452",
        "ko": "-"
    },
    "percentiles1": {
        "total": "15594",
        "ok": "15556",
        "ko": "-"
    },
    "percentiles2": {
        "total": "36477",
        "ok": "36475",
        "ko": "-"
    },
    "percentiles3": {
        "total": "53847",
        "ok": "53833",
        "ko": "-"
    },
    "percentiles4": {
        "total": "57680",
        "ok": "57680",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10944,
    "percentage": 20
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 552,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 43504,
    "percentage": 79
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "325.444",
        "ok": "325.444",
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
