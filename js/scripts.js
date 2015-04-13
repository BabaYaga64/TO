$(document).ready(function() {
    $("form#new-task").submit(function(event) {
        event.preventDefault();

        var inputtedTaskItem = $("input#new-task-item").val();
        var newTask = {
                taskItem: inputtedTaskItem
            };

        $("ul#tasks").append("<li><span class='task'>" + newTask.taskItem + "</span></li>");

        $("input#new-task-item").val("");

        $(".task").last().click(function() {
            $("ul#completed-tasks").append("<li><span class='completed-task'>" + $(this).text() + "</span></li>");
            $(this).remove();
        });

        $(".completed-task").last().click(function() {
            $("ul#tasks").append("<li><span class='task'>" + $(this).text() + "</span></li>");
            $(this).remove();


            // $("ul#completed-tasks").unbind();
            // $("ul#completed-tasks").click(function() {
            //     $("ul#tasks").append("<li><span class='task'>" + $(this).text() + "</span></li>");
            //     $(this).remove();
            // });

        });

        $("button#delete-all").click(function() {
            $("ul#completed-tasks").empty();
        })
    });


});
