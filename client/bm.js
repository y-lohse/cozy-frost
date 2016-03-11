(function(){
	var url = window.location.href,
		scriptSrc = document.currentScript.getAttribute('src'),
		api = scriptSrc.substr(0, scriptSrc.lastIndexOf('/')) + '/snapshot';
	
	if (self.fetch){
		var myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');
		
		fetch(api, {
			method: 'post',
			headers: myHeaders,
			mode: 'no-cors',
			credentials: 'include',
			body: JSON.stringify({
				url: url
			})
		}).then(function(response){
			alert("Snapshot saved in Frost");
		}, function(reason){
			alert("Error: "+reason);
		});
	}
	else{
		alert("Sorry but your browser doesn't support the Fetch API.");
	}
})()