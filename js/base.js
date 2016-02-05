var apiUrl = "https://go.infinise.com/api/2.5/";


/*	GOOGLE  ------------------------------------------------------ */

eng.google = {
	pageTitle: "Google",
	logo: "google.png",
	places: {
		'Web'    : ["https://www.google.com/search?q=%query%&hl=en",		apiUrl+"?eng=google&timestamp=%time%&q=%query%"],
		'Images' : ["https://images.google.com/images?q=%query%&hl=en",	apiUrl+"?eng=google&timestamp=%time%&q=%query%"],
		'Maps'   : ["https://maps.google.com/maps?q=%query%",			false]
	}
};


/*	WIKIPEDIA  --------------------------------------------------- */
	
eng.wikipedia = {
	pageTitle: "Wikipedia",
	logo: "wikipedia.png",
	places: {
		'Search'        : ["https://%lang%.wikipedia.org/wiki/Special:Search?search=%query%&fulltext=Search",	apiUrl+"?eng=wikipedia&timestamp=%time%&q=%query%&hl=%lang%"],
		'Go to Article' : ["https://%lang%.wikipedia.org/wiki/Special:Search?search=%query%&go=Go",				apiUrl+"?eng=wikipedia&timestamp=%time%&q=%query%&hl=%lang%"],
	},
	languages: {
		'': 'en'

	}
};


/*	YOUTUBE  ----------------------------------------------------- */

eng.youtube = {
	pageTitle: "YouTube",
	logo: "youtube.png",
	places: {
		'Videos' : ["https://www.youtube.com/results?search_query=%query%", apiUrl+"?eng=youtube&timestamp=%time%&q=%query%"]
	},
};


/*	TWITTER  ----------------------------------------------------- */

eng.twitter = {
	pageTitle: "Twitter",
	logo: "twitter.png",
	places: {
		'Search Twitter' : ["http://twitter.com/search?q=%query%", false]
	}
};


/*	E621  -------------------------------------------------------- */
/*
eng.e621 = {
    pageTitle: "e621",
    logo: "e621.png",
    places: {
        'Search Images' : ["https://e621.net/post?tags=%query%"]
    }
};
*/

/*	TUMBLR  ------------------------------------------------------ */

/*eng.tumblr = {
    pageTitle: "tumblr",
    logo: "tumblr.png",
    places: {
        'Search Images' : ["https://www.tumblr.com/search/%query%"]
    }
};*/
