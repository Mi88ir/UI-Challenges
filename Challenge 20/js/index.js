var counter=0;
function test(argument) {
	if (counter==0) {
	jQuery("#navbar").removeClass("navbar-dark")

	jQuery("#navbar").addClass("bg-light")
	jQuery("#navbar").addClass("navbar-light")
	jQuery("#navbar").addClass("full-height")


	counter++;	
}else{
	jQuery("#navbar").removeClass("bg-light")
	jQuery("#navbar").removeClass("navbar-light")
	jQuery("#navbar").removeClass("full-height")

	jQuery("#navbar").addClass("navbar-dark")

	counter=0;
}
	

}