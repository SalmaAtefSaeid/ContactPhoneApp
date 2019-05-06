var users = [];
var listedusers = $(".list");
var editor = false;
let currentuser;
function appendToList()
{
    saveUser();
    var content = document.getElementById("content");
    content.innerHTML = "";
    for (let i = 0; i < users.length; i++)
    {
        var astart = "<a class='list' href='#contactDetais'>";
        var aend = "</a>";
        var image = users[i].gender == "male" ? "man.png" : "woman.png";
        var content = document.getElementById("content");
        $('<ul>').attr({'id': 'test-listview', 'data-role': 'listview', 'data-filter': 'true', 'data-filter-placeholder': 'Search...'}).appendTo(content);
        $('<li>').append(astart + `<img src=${image}>` + users[i].userName + aend + "<a href='" + "tel:" + users[i].userPhone + "'class='ui-btn ui-icon-phone ui-btn-icon-notext ui-corner-all'id='myphone' >").appendTo('#test-listview');
        $('#test-listview').listview().listview('refresh');
        listedusers = $(".list");
    }
    for (let j = 0; j < listedusers.length; j++) {
        listedusers[j].addEventListener("click", function (e) {
            var image = users[j].gender == "male" ? "man.png" : "woman.png";
            $("#detailsImage").attr("src", image);
            document.getElementById("detailsName").innerHTML = users[j].userName;
            $("#userTel").attr("href", "tel:" + users[j].userPhone);
            currentuser = j;
            $("#editUser").click(function () {

                $("#userName").val(users[j].userName);
                $("#userPhone").val(users[j].userPhone);
                $("#userMail").val(users[j].userMail);
                $("#btnSave").click(function () {
                    // listedusers.splice(users[j], 1);
                    deleteUser();
                });
            });
        });
    }
}

function saveUser()
{
	if(validate()){
	    var userName_ = document.getElementById("userName").value;
	    var userPhone_ = document.getElementById("userPhone").value;
	    var userMail_ = document.getElementById("userMail").value;
	    var gender_ = document.getElementById("flipgender").value;
	    users.push({userName: userName_, userPhone: userPhone_, userMail: userMail_, gender: gender_});
	    clearData();
	}
}
function clearData()
{
    $("#userName").val("");
    $("#userPhone").val("");
    $("#userMail").val("");
}

$(document).ready(function () {
    $("#btnSave").click(function () {
        appendToList();
    });
});
$(document).ready(function () {
    $("#btnCancel").click(function () {
    });
});

function validate() {
    var testName, testEmail, testPhone;
    var name = document.getElementById("userName").value;
    if (name == "") {
        testName = false;
        document.getElementById("errname").innerHTML = "Empty Field";
    }
    else
        document.getElementById("errname").innerHTML = "";

    var phone = document.getElementById("userPhone").value;
    var re = /^(010|011|012)[0-9]{8}$/;
    if (re.test(phone) == false) {
        testPhone = false;
        document.getElementById("errphone").innerHTML = "Invalid Phone";
    }
    else
        document.getElementById("errphone").innerHTML = "";

    var email = document.getElementById("userMail").value;
    var re = /^\S+@\S+\.\S+$/;
    if (re.test(email) == false) {
        testEmail = false;
        document.getElementById("errmail").innerHTML = "Invalid Field";
    }
    else
        document.getElementById("errmail").innerHTML = "";

    var gender = document.getElementById("flipgender").value;

    if (testName != false && testPhone != false && testEmail != false) {
        return true;
    }
    else
        return false;
}

function deleteUser(){
    console.log("delete " + currentuser);
        users.splice(currentuser, 1);
        var content = document.getElementById("content");
        content.innerHTML = "";
        for (let i = 0; i < users.length; i++)
        {
            var astart = "<a class='list' href='#contactDetais'>";
            var aend = "</a>";
            var image = users[i].gender === "male" ? "man.png" : "woman.png";
            var content = document.getElementById("content");
            $('<ul>').attr({'id': 'test-listview', 'data-role': 'listview', 'data-filter': 'true', 'data-filter-placeholder': 'Search...'}).appendTo(content);
            $('<li class="item">').append(astart + `<img src=${image}>` + users[i].userName + aend + "<a href='" + "tel:" + users[i].userPhone + "'class='ui-btn ui-icon-phone ui-btn-icon-notext ui-corner-all'id='myphone' >").appendTo('#test-listview');
            $('#test-listview').listview().listview('refresh');
            listedusers = $(".list");

        }
        for (let j = 0; j < listedusers.length; j++) {
            listedusers[j].addEventListener("click", function () {
                var image = users[j].gender === "male" ? "man.png" : "woman.png";
                $("#detailsImage").attr("src", image);
                $("#userTel").attr("href", "tel:" + users[j].userPhone);
                document.getElementById("detailsName").innerHTML = users[j].userName;
                currentuser = j;
            });
        }
}
$(document).ready(function () {
    $("#btndelete").click(function () {
        deleteUser();
    });
});

