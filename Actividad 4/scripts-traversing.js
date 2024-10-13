$(document).ready(function() {
    // Resaltar padres de un elemento
    $("#btn-parents").click(function() {
        $(".children").parents("li").css("background-color", "#f8d7da");
    });

    // Resaltar los hijos de un elemento
    $("#btn-children").click(function() {
        $(".parent").children("ul").css("background-color", "#d1ecf1");
    });

    // Encontrar y resaltar el siguiente elemento
    $("#btn-next").click(function() {
        $(".parent:first").next().css("background-color", "#c3e6cb");
    });

    // Encontrar y resaltar el elemento anterior
    $("#btn-prev").click(function() {
        $(".parent:last").prev().css("background-color", "#fff3cd");
    });
});
