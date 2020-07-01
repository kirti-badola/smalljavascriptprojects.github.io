//image slider start
var sliders = document.getElementById('box');
	var image = ['a', 'b', 'c', 'd', 'e', 'f',
	 'g', 'h', 'i', 'j', 'k'];
	var m = image.length;

//function for next image slider
	function nextImage(){
		if(m<image.length){
			m = m+1;
		}
		else{ m = 1;}

		sliders.innerHTML = "<img src="+image[m-1]+".png>";
	}

//function for prew image slider
	function prewImage(){
		if(m<image.length+1 && m>1){
			m = m-1;
		}
		else{ m = image.length;}

		sliders.innerHTML = "<img src="+image[m-1]+".png>";
	}

//script for auto image slider
	setInterval(nextImage, 4000);

//imageslider end

