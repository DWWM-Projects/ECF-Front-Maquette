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
