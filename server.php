<?php 

    header('Acess-Control-Allow-Origin: *');
    header("Acess-Control-Allow-Headers: X-Requested-With");

    $file_url = './data.json';
    $tasks = file_get_contents($file_url);
    $toDoTasks = json_decode($tasks);

    if(isset($_POST['text'])){
        $taskToDo = [
            'text' => $_POST['text'],
            'done' => $_POST['done'] //  'done' => false
        ];

        array_push($toDoTasks, $taskToDo);

        file_put_contents($file_url, json_encode($toDoTasks));
    }
    else{
        header('Content-Type: application/json');
    }
?>