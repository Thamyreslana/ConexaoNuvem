<?php 

    $place_id = "ChIJCbYvd6lTzpQRLfbgyICTrTk";
    $api_key = "AIzaSyAU5VczjkRU2GiMn377pXk7yksAAtzFi0M";
    $url = "https://maps.googleapis.com/maps/api/place/details/json?place_id=$place_id&fields=reviews&key=$api_key";

    $response = file_get_contents($url);
    header('Content-Type: application/json');
    echo $response;
?>