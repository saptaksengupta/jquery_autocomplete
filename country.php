<?php
    $country = array();
    $country[0]['id'] = 1;
    $country[0]['country'] = 'India';
    
    $country[1]['id'] = 2;
    $country[1]['country'] = 'Australia';
    
    $country[2]['id'] = 3;
    $country[2]['country'] = 'England';
    
    $country[3]['id'] = 4;
    $country[3]['country'] = 'Ireland';
    
    $country[4]['id'] = 5;
    $country[4]['country'] = 'Usa';
    
    $country[5]['id'] = 6;
    $country[5]['country'] = 'South Africa';
    
    echo json_encode($country);
