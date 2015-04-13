$(document).ready(function() {
    $("form#new-task").submit(function(event) {
        event.preventDefault();

        var inputtedTaskItem = $("input#new-task-item").val();
        var newTask = {
                taskItem: inputtedTaskItem
            };

        $("ul#tasks").append("<li><span class='task'>" + newTask.taskItem + "</span></li>");

        $("input#new-task-item").val("");

        $(".task").click(function() {
            $(this).remove();
            $("ul#completed-tasks").append("<li><span class='completed-task'>" + newTask.taskItem + "</span></li>");
        });

    });


});
