var years = 5;

$("#orderNow").click(function () {
    $(".presentationText").addClass("hide");
    $("#presentationPicture").addClass("hide");
    $("#dotSvg1").addClass("hide");
    $("#orderMade").removeClass("hide");
})

$("#dynamicTitle").text("depuis " + years + " ans.");

$("#addYear").click(function () {
    years++;
    $("#dynamicTitle").text("depuis " + years + " ans.");
});

$("#meetThem").click(function () {
    $("#presentationPicture").addClass("hide");
    $("#video").removeClass("hide");
})

$("#burger").click(function () {
    $(".presentationText").css({
        "opacity": "0",
    });
    $(".contains").css({
        "display": "inline-block",
    });
    $("#close").css({
        "display": "inline-block",
    })
})

$("#close").click(function () {
    $(".presentationText").css({
        "opacity": "1",
    });
    $(".contains").css({
        "display": "none",
    });
    $("#close").css({
        "display": "none",
    })

})

var min = 1;
var max = 99999;
$("#randValue1").text("94000+")
$("#randValue2").text("11000+")
$("#randValue3").text("1500+")


// function random(min, max) {
//     var randomNumber = Math.floor(Math.random() * (max - min)) + min;
//     console.log(randomNumber)
// }

$("#randomButton").click(function () {
    var randomNumber = Math.floor(Math.random() * (max - min)) + min;
    $("#randValue1").text(randomNumber + "+")
    var randomNumber = Math.floor(Math.random() * (max - min)) + min;
    $("#randValue2").text(randomNumber + "+")
    var randomNumber = Math.floor(Math.random() * (max - min)) + min;
    $("#randValue3").text(randomNumber + "+")    
})

$("#submitButton").click(function () {
    var inputValue = $("#input").val();
    $("#resultInput").text("Merci " + inputValue);
    $("#input").addClass("hide");
    $("#submitButton").addClass("hide");
    $("#resultInput").removeClass("hide");
})