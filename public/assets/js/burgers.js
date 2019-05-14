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

    $(".delete-it").on("click", function(event) {
        var id = $(this).data("id");
        $.ajax("/api/burgers/" + id, {
        type: "DELETE"
        }).then(
        function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
    });
    $(".new-input").on("submit", function(event) {
        event.preventDefault();
        $.ajax("/api/burgers/", {
            type: "POST",
            data: {burger_name: $("#burg").val().trim()}
        }).then(
            function() {
                location.reload();
            }
        );
    });
});
