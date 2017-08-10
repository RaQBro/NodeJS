$(document).ready(function () {
    var tTitle = $("#id1").attr("title");
    $("#id2").text(tTitle);
    // $("#id1").addClass("selected");
    // $("#id2").addClass("highlight");
    $("#addClass").click(function () {
        $("#id1").addClass("selected");
    });
    $("#togleClass").click(function () {
        $("#id2").toggleClass("highlight");
    });
    $("#copyHtml").click(function () {
        var htmlCont = $("#htmlDiv").html();
        $("#htmlToBeReplaced").html(htmlCont);
    });
    $("#fillPtag").click(function () {
        var vValue = $("#textToBeCopied").val();
        $("#divToBeCopiedTo").text(vValue);
    });
    $("#setInput").click(function () {
        var vValue = $("#id1").attr("title");
        $("#textToBeCopied").val(vValue);
    });
    $("#setListItem").click(function () {
         $("li").filter(".red").toggleClass("blue");
         $("li").filter(".blue").toggleClass("red");
    });
});