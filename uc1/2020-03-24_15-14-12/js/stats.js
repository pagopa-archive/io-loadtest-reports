var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "88259",
        "ok": "65334",
        "ko": "22925"
    },
    "minResponseTime": {
        "total": "10",
        "ok": "10",
        "ko": "23"
    },
    "maxResponseTime": {
        "total": "21070",
        "ok": "21070",
        "ko": "16860"
    },
    "meanResponseTime": {
        "total": "4959",
        "ok": "6044",
        "ko": "1866"
    },
    "standardDeviation": {
        "total": "5595",
        "ok": "5979",
        "ko": "2387"
    },
    "percentiles1": {
        "total": "1598",
        "ok": "4466",
        "ko": "877"
    },
    "percentiles2": {
        "total": "10280",
        "ok": "11644",
        "ko": "2174"
    },
    "percentiles3": {
        "total": "15692",
        "ok": "15920",
        "ko": "6404"
    },
    "percentiles4": {
        "total": "17905",
        "ok": "18159",
        "ko": "11791"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 23793,
    "percentage": 27
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2510,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 39031,
    "percentage": 44
},
    "group4": {
    "name": "failed",
    "count": 22925,
    "percentage": 26
},
    "meanNumberOfRequestsPerSecond": {
        "total": "490.328",
        "ok": "362.967",
        "ko": "127.361"
    }
},
contents: {
"req_io---appbackend-040ad": {
        type: "REQUEST",
        name: "IO - appbackend",
path: "IO - appbackend",
pathFormatted: "req_io---appbackend-040ad",
stats: {
    "name": "IO - appbackend",
    "numberOfRequests": {
        "total": "88259",
        "ok": "65334",
        "ko": "22925"
    },
    "minResponseTime": {
        "total": "10",
        "ok": "10",
        "ko": "23"
    },
    "maxResponseTime": {
        "total": "21070",
        "ok": "21070",
        "ko": "16860"
    },
    "meanResponseTime": {
        "total": "4959",
        "ok": "6044",
        "ko": "1866"
    },
    "standardDeviation": {
        "total": "5595",
        "ok": "5979",
        "ko": "2387"
    },
    "percentiles1": {
        "total": "1598",
        "ok": "4460",
        "ko": "879"
    },
    "percentiles2": {
        "total": "10280",
        "ok": "11644",
        "ko": "2174"
    },
    "percentiles3": {
        "total": "15692",
        "ok": "15920",
        "ko": "6404"
    },
    "percentiles4": {
        "total": "17905",
        "ok": "18159",
        "ko": "11752"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 23793,
    "percentage": 27
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2510,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 39031,
    "percentage": 44
},
    "group4": {
    "name": "failed",
    "count": 22925,
    "percentage": 26
},
    "meanNumberOfRequestsPerSecond": {
        "total": "490.328",
        "ok": "362.967",
        "ko": "127.361"
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
