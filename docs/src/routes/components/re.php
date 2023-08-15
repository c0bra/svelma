<?php

//foreach .svelte file in this folder

$files = glob(__DIR__ . '/*.svelte');

foreach($files as $file) {
    $name = basename($file, '.svelte');
    //create a folder with the same name as the file
    mkdir(__DIR__ . '/' . $name);
    //move the file into the folder
    rename($file, __DIR__ . '/' . $name . '/+page.svelte');

}