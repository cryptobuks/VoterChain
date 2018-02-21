$(document).ready(function () {
    getUserName();
    getElections();
});

function getUserName() {
    $.ajax({
        dataType: "json",
        url: "../username",
        type: "GET",
        success: function (data) {
            $("#user").html(""+data+"<br />MAKE YOUR VOTE COUNT");
        }
    });
}

function getElections() {
    $.ajax({
        dataType: "json",
        url: "../getElections",
        type: "GET",
        success: function (data) {
            for(var i = 0; i < data.length; i++) {
                var ele = data[i].value;
                if(!voteExist(ele)) {
                    getCandidates(ele);
                }
            }
        }
    });
}

function getCandidates(eleid) {
    $.ajax({
        dataType: "json",
        url: "../getcandidate/"+eleid,
        type: "GET",
        success: function (data) {
            console.log(data);
        }
    });
}

function voteExist(eleid) {
    $.ajax({
        dataType: "json",
        url: "../blk/"+eleid,
        type: "GET",
        success: function (data) {
            console.log(data);
        }
    });
}