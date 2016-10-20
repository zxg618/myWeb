<?php
/**
 * @author    Shawn ZHAO
 * @since     20/10/2016
 * @copyright 2016
 */

$xmlData = file_get_contents("../../SampleData/Database.xml");
$arrayData = simplexml_load_string($xmlData);
$jsonData = json_encode($arrayData);
file_put_contents("../../SampleData/Database.json", $jsonData);


print_r($jsonData);
