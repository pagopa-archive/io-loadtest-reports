var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6840",
        "ok": "4851",
        "ko": "1989"
    },
    "minResponseTime": {
        "total": "35",
        "ok": "35",
        "ko": "10625"
    },
    "maxResponseTime": {
        "total": "24305",
        "ok": "20496",
        "ko": "24305"
    },
    "meanResponseTime": {
        "total": "9060",
        "ok": "4064",
        "ko": "21243"
    },
    "standardDeviation": {
        "total": "9565",
        "ok": "6560",
        "ko": "621"
    },
    "percentiles1": {
        "total": "247",
        "ok": "49",
        "ko": "21058"
    },
    "percentiles2": {
        "total": "21037",
        "ok": "9183",
        "ko": "21283"
    },
    "percentiles3": {
        "total": "21444",
        "ok": "17540",
        "ko": "22229"
    },
    "percentiles4": {
        "total": "22390",
        "ok": "19387",
        "ko": "22716"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3425,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1425,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 1989,
    "percentage": 29
},
    "meanNumberOfRequestsPerSecond": {
        "total": "32.885",
        "ok": "23.322",
        "ko": "9.562"
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
        "total": "6840",
        "ok": "4851",
        "ko": "1989"
    },
    "minResponseTime": {
        "total": "35",
        "ok": "35",
        "ko": "10625"
    },
    "maxResponseTime": {
        "total": "24305",
        "ok": "20496",
        "ko": "24305"
    },
    "meanResponseTime": {
        "total": "9060",
        "ok": "4064",
        "ko": "21243"
    },
    "standardDeviation": {
        "total": "9565",
        "ok": "6560",
        "ko": "621"
    },
    "percentiles1": {
        "total": "247",
        "ok": "49",
        "ko": "21058"
    },
    "percentiles2": {
        "total": "21037",
        "ok": "9183",
        "ko": "21283"
    },
    "percentiles3": {
        "total": "21444",
        "ok": "17540",
        "ko": "22229"
    },
    "percentiles4": {
        "total": "22390",
        "ok": "19387",
        "ko": "22716"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3425,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1425,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 1989,
    "percentage": 29
},
    "meanNumberOfRequestsPerSecond": {
        "total": "32.885",
        "ok": "23.322",
        "ko": "9.562"
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
