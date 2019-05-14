$(function() {
    $(".eat-burger").on("click", function(event) {
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

        var newBurger = {
            burger_name: $("#burg").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                $("#burg").val("");

                location.reload();
            }
        );
    });
});
