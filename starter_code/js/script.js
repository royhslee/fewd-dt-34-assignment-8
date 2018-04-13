console.log("ready");

var stateName = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']



$(document).ready(function (event){
	for ( var i = 0 ;  i < stateName.length ; i ++){
		$("#state").append(`<option>${stateName[i]}</option>`);
	};
	
	$("#new-post").submit(registed);

});

function registed(event){
	event.preventDefault();
	var validation = validateInputs();
	if (validation) {
	
		window.open('submission.html', '_blank');
        this.target = '_blank';
		

	} else {
		console.log("validation fail");
	}
}

function validateInputs(){
	// set validationSuccess to true;
	var validationSuccess = true;
	$(".control").each(function(){
		var userInput = $(this).val();
		var id = $(this).attr("id");
		console.log(userInput);
		if (userInput === ""){
			// if any input fields blank
			// validation will be false
			validationSuccess = false;
			alert ("Please enter  a value "+id);
		}
	})
	return validationSuccess;
	
}




