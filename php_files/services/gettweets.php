<?php
    //prevent cors error
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');  
    
	// include config and twitter api wrappe
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
	$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
	
	// twitter api endpoint request type
	$requestMethod = 'GET';

	// twitter api endpoint data screen_name is developer account that we are using for api
	$getfield = '?screen_name=botuser';

	// make api call to twitter
	$twitter = new TwitterAPIExchange( $settings );
	$twitter->setGetfield( $getfield );
	$twitter->buildOauth( $url, $requestMethod );
	$response = $twitter->performRequest( true, array( CURLOPT_SSL_VERIFYHOST => 0, CURLOPT_SSL_VERIFYPEER => 0 ) );
	$tweets = json_decode( $response, true );
    
    // display all info we got back from twitter
    $echo($response);
?>