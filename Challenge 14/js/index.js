var data=JSON.parse(JSON.stringify(jsonData));



for(var i=0;i<2;i++){
	var tr=document.createElement("tr");
	tr.setAttribute("id", i);
	tr.addEventListener("click", function(e){
		document.getElementById("alert").innerHTML="<strong>"+data[this.id].name+"</strong> selected. Below are the local attractions."
	});

	var td_1=document.createElement("td");
	td_1.innerHTML=data[i].name;

	var td_2=document.createElement("td");
	td_2.innerHTML=data[i].country;

	var th_1=document.createElement("th");
	th_1.setAttribute("scope","row")
	th_1.innerHTML=data[i].geonameid;

	tr.appendChild(td_1);
	tr.appendChild(td_2);
	tr.appendChild(th_1);
	document.getElementsByTagName("tbody")[0].appendChild(tr);
}

$(document).ready(function(){
  $("#search_input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("tbody tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});