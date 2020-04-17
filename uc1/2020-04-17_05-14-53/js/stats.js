var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "79800",
        "ok": "79265",
        "ko": "535"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "128"
    },
    "maxResponseTime": {
        "total": "11996",
        "ok": "11996",
        "ko": "10072"
    },
    "meanResponseTime": {
        "total": "980",
        "ok": "921",
        "ko": "9663"
    },
    "standardDeviation": {
        "total": "1860",
        "ok": "1719",
        "ko": "1542"
    },
    "percentiles1": {
        "total": "177",
        "ok": "175",
        "ko": "10003"
    },
    "percentiles2": {
        "total": "870",
        "ok": "818",
        "ko": "10010"
    },
    "percentiles3": {
        "total": "4456",
        "ok": "4337",
        "ko": "10038"
    },
    "percentiles4": {
        "total": "10014",
        "ok": "9571",
        "ko": "10060"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 59298,
    "percentage": 74
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1807,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 18160,
    "percentage": 23
},
    "group4": {
    "name": "failed",
    "count": 535,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "405.076",
        "ok": "402.36",
        "ko": "2.716"
    }
},
contents: {
"req_get--info-4174b": {
        type: "REQUEST",
        name: "GET /info",
path: "GET /info",
pathFormatted: "req_get--info-4174b",
stats: {
    "name": "GET /info",
    "numberOfRequests": {
        "total": "79800",
        "ok": "79265",
        "ko": "535"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "128"
    },
    "maxResponseTime": {
        "total": "11996",
        "ok": "11996",
        "ko": "10072"
    },
    "meanResponseTime": {
        "total": "980",
        "ok": "921",
        "ko": "9663"
    },
    "standardDeviation": {
        "total": "1860",
        "ok": "1719",
        "ko": "1542"
    },
    "percentiles1": {
        "total": "177",
        "ok": "175",
        "ko": "10003"
    },
    "percentiles2": {
        "total": "870",
        "ok": "818",
        "ko": "10010"
    },
    "percentiles3": {
        "total": "4456",
        "ok": "4337",
        "ko": "10038"
    },
    "percentiles4": {
        "total": "10014",
        "ok": "9571",
        "ko": "10060"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 59298,
    "percentage": 74
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1807,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 18160,
    "percentage": 23
},
    "group4": {
    "name": "failed",
    "count": 535,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "405.076",
        "ok": "402.36",
        "ko": "2.716"
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
