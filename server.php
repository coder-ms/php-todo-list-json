<?php 

    header('Acess-Control-Allow-Origin: *');
    header("Acess-Control-Allow-Headers: X-Requested-With");

    $file_json = './data.json';
    $tasks = file_get_contents($file_json);
    $toDoList = json_decode($tasks, true);

    if(isset($_POST['newToDoText'])){
        $newTaskToDo = [
            'text' => $_POST['newToDoText'],
            'done' => false
        ];

        array_push($toDoList, $newTaskToDo);

        file_put_contents($file_json, json_encode($toDoList));
    }
    else{
        header('Content-Type: application/json');
        echo json_encode($toDoList);
    
    }
?>