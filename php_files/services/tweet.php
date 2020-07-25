<?php
    //prevent cors error
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');  
    
	// include config and twitter api wrapper
	require_once( 'config.php' );
	require_once( 'TwitterAPIExchange.php' );

	// settings for twitter api connection
	$settings = array(
		'oauth_access_token' => TWITTER_ACCESS_TOKEN, 
		'oauth_access_token_secret' => TWITTER_ACCESS_TOKEN_SECRET, 
		'consumer_key' => TWITTER_CONSUMER_KEY, 
		'consumer_secret' => TWITTER_CONSUMER_SECRET
	);

	// twitter api endpoint
	$url = 'https://api.twitter.com/1.1/statuses/update.json';
	
	// twitter api endpoint request type
	$requestMethod = 'POST';

    //get the searched item
	$quote = $_POST['title'];

	// twitter api endpoint data
	$apiData = array(
	    'status' => $quote,
	);

	// create new twitter for api communication
	$twitter = new TwitterAPIExchange( $settings );

	// make our api call to twiiter
	$twitter->buildOauth( $url, $requestMethod );
	$twitter->setPostfields( $apiData );
	$response = $twitter->performRequest( true, array( CURLOPT_SSL_VERIFYHOST => 0, CURLOPT_SSL_VERIFYPEER => 0 ) );

	// display response from twitter
    echo($response);
?>