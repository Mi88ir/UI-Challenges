var data=JSON.parse(JSON.stringify(profileData));

$(".carousel").carousel({
	interval: false
})
	document.getElementsByTagName('h3')[0].innerHTML=data[0].Name;
	document.getElementsByTagName('p')[0].innerHTML=data[0].Desc;

document.getElementById('prev').addEventListener('click',function(){

	$(".carousel").carousel('prev')
	currentIndex = $('div.active').index();
	document.getElementsByTagName('h3')[0].innerHTML=data[currentIndex-1].Name;
	document.getElementsByTagName('p')[0].innerHTML=data[currentIndex-1].Desc;

});

document.getElementById('next').addEventListener('click',function(){
	$(".carousel").carousel('next')
	currentIndex = $('div.active').index();
	document.getElementsByTagName('h3')[0].innerHTML=data[currentIndex+1].Name;
	document.getElementsByTagName('p')[0].innerHTML=data[currentIndex+1].Desc;
	console.log(currentIndex)
});
var standardFontSize=16;
document.getElementById('increase').addEventListener('click',function(){
	standardFontSize++;
	document.getElementsByTagName('p')[0].style.fontSize = standardFontSize+"px"

})

document.getElementById('decrease').addEventListener('click',function(){
	standardFontSize++;
	document.getElementsByTagName('p')[0].style.fontSize = standardFontSize+"px"

})