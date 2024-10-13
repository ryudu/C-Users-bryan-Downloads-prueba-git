$(document).ready(function() {
    // Evento de clic
    $("#click-btn").click(function() {
        alert("¡Haz hecho clic en el botón!");
    });

    // Evento de tecla presionada
    $("#keypress-input").keypress(function(event) {
        $("#keypress-input").css("background-color", "#d4edda");
        console.log("Tecla presionada: " + event.key);
    });

    // Evento hover (entrar y salir)
    $("#hover-box").hover(function() {
        $(this).css("background-color", "#343a40");
        $(this).css("color", "#ffffff");
    }, function() {
        $(this).css("background-color", "#17a2b8");
        $(this).css("color", "#ffffff");
    });

    // Evento de doble clic
    $("#hover-box").dblclick(function() {
        alert("¡Doble clic en la caja!");
    });

    // Evento de focus
    $("#keypress-input").focus(function() {
        $(this).css("border-color", "#007bff");
    });
});
