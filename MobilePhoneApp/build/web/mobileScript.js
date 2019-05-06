var users = [];
var listedusers = $(".list");
var editor = true;
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
                $("#flipgender").val(users[j].gender);
            });
        });
    }
}

function saveUser()
{
    var userName_ = document.getElementById("userName").value;
    var userPhone_ = document.getElementById("userPhone").value;
    var userMail_ = document.getElementById("userMail").value;
    var gender_ = document.getElementById("flipgender").value;
    users.push({userName: userName_, userPhone: userPhone_, userMail: userMail_, gender: gender_});
    clearData();
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
        clearData();
    });
});
$(document).ready(function () {
    $("#btndelete").click(function () {
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
    });
});

//$(document).ready(function() {
//    $("#formId").submit(function(e) {
////        e.preventDefault();
//        var userName = $('#userName').val();
//        var userPhone = $('#userPhone').val();
//        var email = $('#userMail').val();
//
////        $(".error").remove();
//
//        if (userName.length < 1) {
//            alert("Enter a valid name");
//        }
//        if (userPhone.length < 1) {
//            alert("Enter a valid phone number");
//        }else {
//            var regEx = /^[0-9]{11}$/;
//            var validPhone = regEx.test(userPhone);
//            if (!validPhones) {
//                alert("Enter a valid phone number");
//            }
//        }
//        if (email.length < 1) {
//            alert("Enter a valid email");
//        } else {
//           var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
//           var validEmail = regEx.test(email);
//           if (!validEmail) {
//                alert("Enter a valid email");
//            }
//        }
//});
//});