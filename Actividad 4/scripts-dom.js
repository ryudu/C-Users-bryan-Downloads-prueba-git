$(document).ready(function() {
    $("#append-btn").click(function() {
        $("#dom-container").append("<p>Nuevo párrafo (append).</p>");
    });

    $("#prepend-btn").click(function() {
        $("#dom-container").prepend("<p>Nuevo párrafo al inicio (prepend).</p>");
    });

    $("#after-btn").click(function() {
        $("#example").after("<p>Párrafo después de 'example' (after).</p>");
    });

    $("#before-btn").click(function() {
        $("#example").before("<p>Párrafo antes de 'example' (before).</p>");
    });

    $("#remove-btn").click(function() {
        $("#example").remove();
    });
});
