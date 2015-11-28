<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootsrap/3.3.4/bootsrapt.min.css">

    </head>
    <body>
        <div class="container">
            <h1>My Tasks</h1>

            <ul class="list-group">
                @foreach($tasks as $task)
                    <li class="list-group-item">

                        {{$task->body}}

                    </li>
                    @endforeach

            </ul>
        </div>
    </body>
</html>
