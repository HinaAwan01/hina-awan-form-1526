
let fn=document.getElementById('fullname');
let em = document.getElementById('email');
let msg=document.getElementById('message');
let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let formSubmission = document.getElementById('submit-data');  // define the event-target-object

// event-handler
function handleForm() {	
	// empty buckets, one for inputs, the other for errors
	let uinput = {};
	let errors = [];
	
	// validating if user input exist at all    
    if (fn.value !== '') {				
            uinput.fullname = fn.value;	
		} else {
		errors.push('Fullname is empty!');
	}    
    
	if (em.value !== '') {		
		// validate email format
		if (pattern.test(em.value)) {
            uinput.email = em.value;
		} else {
			errors.push('Invalid emal!');
		}
		
	} else {
		errors.push('Email is empty!');
	}    
    
    if (msg.value !== '') {			
            uinput.message = msg.value;		
		} else {
		errors.push('Message is empty!');
	}	
	
	// printing either feedback or errors
	if (errors.length === 0) {
		console.log('COLLECTED DATA', uinput);
	} else {
		console.log('ERRORS', errors);
	}	
}

formSubmission.addEventListener('click', handleForm);
