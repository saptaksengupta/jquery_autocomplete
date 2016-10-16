<?php
    $country = array();
    $country[0]['id'] = 1;
    $country[0]['country'] = 'INDIA';
    
    $country[1]['id'] = 2;
    $country[1]['country'] = 'AUSTRALYA';
    
    $country[2]['id'] = 3;
    $country[2]['country'] = 'ENGLAND';
    
    $country[3]['id'] = 4;
    $country[3]['country'] = 'IRELAND';
    
    $country[4]['id'] = 5;
    $country[4]['country'] = 'USA';
    
    $country[5]['id'] = 6;
    $country[5]['country'] = 'SOUTH AFRICA';
    
    echo json_encode($country);
