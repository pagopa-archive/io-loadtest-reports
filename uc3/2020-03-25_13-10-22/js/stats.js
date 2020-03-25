var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "57000",
        "ok": "29817",
        "ko": "27183"
    },
    "minResponseTime": {
        "total": "14",
        "ok": "14",
        "ko": "2952"
    },
    "maxResponseTime": {
        "total": "75926",
        "ok": "75795",
        "ko": "75926"
    },
    "meanResponseTime": {
        "total": "39145",
        "ok": "21698",
        "ko": "58283"
    },
    "standardDeviation": {
        "total": "28180",
        "ok": "24564",
        "ko": "17411"
    },
    "percentiles1": {
        "total": "58173",
        "ok": "9952",
        "ko": "62594"
    },
    "percentiles2": {
        "total": "63299",
        "ok": "45024",
        "ko": "66389"
    },
    "percentiles3": {
        "total": "70160",
        "ok": "66081",
        "ko": "71561"
    },
    "percentiles4": {
        "total": "72833",
        "ok": "70267",
        "ko": "74187"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9410,
    "percentage": 17
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 711,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 19696,
    "percentage": 35
},
    "group4": {
    "name": "failed",
    "count": 27183,
    "percentage": 48
},
    "meanNumberOfRequestsPerSecond": {
        "total": "220.077",
        "ok": "115.124",
        "ko": "104.954"
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
        "total": "57000",
        "ok": "29817",
        "ko": "27183"
    },
    "minResponseTime": {
        "total": "14",
        "ok": "14",
        "ko": "2952"
    },
    "maxResponseTime": {
        "total": "75926",
        "ok": "75795",
        "ko": "75926"
    },
    "meanResponseTime": {
        "total": "39145",
        "ok": "21698",
        "ko": "58283"
    },
    "standardDeviation": {
        "total": "28180",
        "ok": "24564",
        "ko": "17411"
    },
    "percentiles1": {
        "total": "58174",
        "ok": "9927",
        "ko": "62594"
    },
    "percentiles2": {
        "total": "63298",
        "ok": "45039",
        "ko": "66389"
    },
    "percentiles3": {
        "total": "70160",
        "ok": "66081",
        "ko": "71561"
    },
    "percentiles4": {
        "total": "72833",
        "ok": "70267",
        "ko": "74187"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9410,
    "percentage": 17
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 711,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 19696,
    "percentage": 35
},
    "group4": {
    "name": "failed",
    "count": 27183,
    "percentage": 48
},
    "meanNumberOfRequestsPerSecond": {
        "total": "220.077",
        "ok": "115.124",
        "ko": "104.954"
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
