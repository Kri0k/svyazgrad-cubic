window.onload = function onPageLoad() {
    $("#loader").addClass("hideLoader");



    $(".screenshots_block").click(
        function(e) {
            var sendTarget = $(e.currentTarget);
            $(".screenshots_open").addClass("screenshotsActive");
            var beba = $(sendTarget).find("img").attr("src");
            $(".screenshots_open").css("background-image", "url(" + beba + ")");
        }
    );

    $(".mods_counter").text("Колиечство модов: " + $(".mods_contentBlock").length);
};

let status = "menu";

function toMenu() {
    if (status != "menu") {
        status = "menu";
        $(".mods").removeClass("activeWindow");
        $(".panel").removeClass("hiddenPanel");
        $(".screenshots").removeClass("activeWindow");
    }
};

function modsButton() {
    $(".mods").addClass("activeWindow");
    $(".screenshots").removeClass("activeWindow");
    $(".panel").addClass("hiddenPanel");
    status = "mods";
}

function screenshotButton() {
    $(".mods").removeClass("activeWindow");
    $(".screenshots").addClass("activeWindow");
    $(".panel").addClass("hiddenPanel");
    status = "screenshot";
}

function imageClose() {
    $(".screenshots_open").removeClass("screenshotsActive");
}