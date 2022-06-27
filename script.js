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


