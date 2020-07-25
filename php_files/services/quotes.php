<?php
    //prevent cors error
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');  
    //The URL that we want to GET.
    $url = 'http://extensions.biryudumkitap.com/quote';
 


    //define the problematic values and correct values.
    $problem = array("\u00fc","\u011f","\u0131","\u015f","\u00e7","\u00f6","\u00dc","\u011e","\u0130","\u015e","\u00c7","\u00d6");
    $fix = array("ü","ğ","ı","ş","ç","ö","Ü","Ğ","İ","Ş","Ç","Ö");
  

    $contents = file_get_contents($url);
    //change problematic values with the right ones.
    $fixed = str_replace($problem, $fix, $contents);
    //If $fixed is not a boolean FALSE value.
    if($fixed !== false){
    //Print out the contents.
       echo ($fixed);
    }

?>