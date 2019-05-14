$(function() {

    $(".eat-it").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(
            function() {
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        $.ajax("/api/burgers", {
            type: "POST",
            data: {burger_name: $("#burg").val().trim()}
        }).then(
            function() {
                location.reload();
            }
        );
    });
});
