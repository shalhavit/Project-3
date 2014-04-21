//this file takes care of all the youtube api
 
 
 //get youtube videos from track and artist
 
 function getVideos(artist, trackName, duration)
 {
 	var url = 'http://gdata.youtube.com/feeds/api/videos?q='+encodeURIComponent(artist+' '+trackName)+'&format=5&max-results=10&v=2&alt=jsonc';
 
 	videoList = JSON.parse(httpGET(url));
 
 	//for now we will just return the first result assuming its the best match in future may compare duration
 	return videoList.data.items[0];
 }