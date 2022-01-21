

// Navbar mobile menu toggle

const menuButton = document.querySelector('.menu-button');
const menuContent = document.querySelector('.navigationlinks');
const heightChange = document.querySelector('.changeheight');
const makeDark = document.querySelector('.shadow-overlay');

menuButton.addEventListener('click', function(){
	menuButton.classList.toggle("openstate");
	menuContent.classList.toggle("openmenu");
	document.body.classList.toggle('modal-noscroll');
	makeDark.classList.toggle("darken");
	if (makeDark.style.display == 'flex'){
		makeDark.style.display = 'none';
	} else {
		makeDark.style.display = 'flex';
	}
}) 




// Bookmark toggle

let bookmark = document.querySelector('.bookmark-button-div');


bookmark.addEventListener('click', function(){
	bookmark.classList.toggle('bookmarked');
	if (bookmark.querySelector('.bookmark-button-text-div').innerHTML == 'Bookmark'){
		bookmark.querySelector('.bookmark-button-text-div').innerHTML = 'Bookmarked';
	} else if (bookmark.querySelector('.bookmark-button-text-div').innerHTML !== 'Bookmark'){
		bookmark.querySelector('.bookmark-button-text-div').innerHTML = 'Bookmark';
	}
	
})


bookmark.addEventListener('mouseover', function(){
	if (bookmark.querySelector('.bookmark-button-text-div').innerHTML == 'Bookmarked') {
		bookmark.querySelector('.bookmark-button-text-div').innerHTML = 'Unbookmark';
	}
})


bookmark.addEventListener('mouseout', function(){
	if (bookmark.querySelector('.bookmark-button-text-div').innerHTML == 'Unbookmark') {
		bookmark.querySelector('.bookmark-button-text-div').innerHTML = 'Bookmarked';
	}
})







// 	Stats data

let raisedCalculated = 500;
let targetAmount = 1500;
let backerAmount = 20;

const raisedBox = document.querySelector('.raised-box');
const targetBox = document.querySelector('.target-box');
const backerBox = document.querySelector('.backer-box');

const sliderValueLength = document.querySelector('.progress-money-progress-bar');
let sliderPercentage = String(100 * (raisedCalculated/targetAmount));
let percentageValue = sliderPercentage+"%"


function displayRaised(){
	let raisedDisplay = raisedCalculated.toLocaleString();
	let targetAmountDisplay = targetAmount.toLocaleString();
	let backerAmountDisplay = backerAmount.toLocaleString();
	let sliderPercentage = String(100 * (raisedCalculated/targetAmount));
	let percentageValue = sliderPercentage+"%"
	raisedBox.innerHTML = raisedDisplay;
	targetBox.innerHTML = targetAmountDisplay;
	backerBox.innerHTML = backerAmountDisplay;
	if (parseInt(sliderPercentage) < 100){
		sliderValueLength.setAttribute('style', 'width: ' + percentageValue);
	} else if (parseInt(sliderPercentage) >= 100){
		sliderValueLength.setAttribute('style', 'width: 100%');
	}

	// sliderValueLength.setAttribute('style', 'width: ' + percentageValue);
}



// Pledges data

let bambooStandRemaining = 101;
let blackEditionRemaining = 1;
let mahoganySpecialRemaining = 0;

const bambooBox = document.querySelector('.bamboo-box');
const blackBox = document.querySelector('.black-box');
const mahoganyBox = document.querySelector('.mahogany-box');

let pledge1 = document.querySelector('.rempledge1');
let pledge01 = document.querySelector('.rempledge01');
let pledge2 = document.querySelector('.rempledge2');
let pledge02 = document.querySelector('.rempledge02');
let pledge3 = document.querySelector('.rempledge3');
let pledge03 = document.querySelector('.rempledge03');


//function for displaying remaining available pledges

function showPledges(){
	pledge1.innerHTML = bambooStandRemaining;
	pledge01.innerHTML = bambooStandRemaining;
	pledge2.innerHTML = blackEditionRemaining;
	pledge02.innerHTML = blackEditionRemaining;
	pledge3.innerHTML = mahoganySpecialRemaining;
	pledge03.innerHTML = mahoganySpecialRemaining;
}


//function for identifying out of stock pledges

function disablePledgeBoxes(x, y){
	
	if (x == 0) {
		y.classList.add('out-of-stock');
		y.querySelector('.pledge-button').setAttribute('disabled', 'disabled');
		y.querySelector('.pledge-button').innerHTML = "Out of stock";
	}
};


// Function to highlight a selected pledge in the modal

const pledgeBoxes = document.querySelectorAll('.pledge-selection-box');
const boxFooter = document.querySelector('.pledge-selection-footer');
let pledgeAmountDefault = [1, 25, 75, 200]

function checkUncheckPledgeBox(){
	for (i=0; i<pledgeBoxes.length; i++){
		if (pledgeBoxes[i].querySelector('input[type=radio]').checked == true){
			pledgeBoxes[i].classList.add('highlight-box');
			pledgeBoxes[i].querySelector('.pledge-selection-footer').style.display = 'flex';
			pledgeBoxes[i].querySelector('.pledge-amount-style').value = pledgeAmountDefault[i];

		} else {
			pledgeBoxes[i].classList.remove('highlight-box');
			pledgeBoxes[i].querySelector('.pledge-selection-footer').style.display = 'none';
			pledgeBoxes[i].querySelector('.pledge-amount-style').value = 0;
		}
	}
}


// Click listener to check/uncheck



for (i=0; i<pledgeBoxes.length; i++){
	pledgeBoxes[i].addEventListener('click', function(){
		if (this.querySelector('input[type=radio]').disabled == true){
			//keep line blank;
		} else {
			this.querySelector('input[type=radio]').checked = true
			checkUncheckPledgeBox();
		}
	})
}


// Function for cecking if out of stock


function disableModalPledgeBox(){
let remPledgeList = [1, bambooStandRemaining, blackEditionRemaining, mahoganySpecialRemaining]
	for (i=0; i<pledgeBoxes.length; i++){
		if (remPledgeList[i] == 0){
			pledgeBoxes[i].querySelector('input[type=radio]').disabled = true;
			pledgeBoxes[i].classList.add('out-of-stock');
		}
	}
}		


// Open Modal (reward buttons)

let selectButton = document.querySelectorAll('.pledge-button')
let radioThingy = document.querySelectorAll('.radiothing')

for (i=0; i<selectButton.length; i++){
	selectButton[i].addEventListener('click', function(){
		document.querySelector('.modal-background').style.display = 'block';
		document.querySelector('.selection-modal-container').style.display = 'block';
		document.body.classList.add('modal-noscroll');
		// if (i == 0) {
		// 	radioThingy[1].checked = 1;
		// 	checkUncheckPledgeBox();
		// } else if (i == 1){
		// 	radioThingy[2].checked = 1;
		// 	checkUncheckPledgeBox();
		// } else if (i == 2) {
		// 	radioThingy[3].checked = 1;
		// 	checkUncheckPledgeBox();
		// }

		// I couldn't figure out why this wouldn't work.
				// radioThingy[i+1].checked = 1;
				// checkUncheckPledgeBox();
	})
}

selectButton[0].addEventListener('click', function(){
	radioThingy[1].checked = 1;
	checkUncheckPledgeBox();
});

selectButton[1].addEventListener('click', function(){
	radioThingy[2].checked = 1;
	checkUncheckPledgeBox();
});

selectButton[2].addEventListener('click', function(){
	radioThingy[3].checked = 1;
	checkUncheckPledgeBox();
});



// Open modal (back project button)
document.querySelector('.back-project').addEventListener('click', function(){
	document.querySelector('.modal-background').style.display = 'block';
	document.querySelector('.selection-modal-container').style.display = 'block';
	document.body.classList.add('modal-noscroll');	
})






// Submit button

function submitForm(){
	for (i=0; i<radioThingy.length; i++){
		calcValue();
		document.querySelector('.selection-modal-container').style.display = 'none';
		document.querySelector('.success-modal-container').style.display = 'flex';
		backerAmount = parseInt(backerAmount) + 1;
		if (radioThingy[1].checked == true){
		 	bambooStandRemaining = parseInt(bambooStandRemaining) - 1;
		} else if(radioThingy[2].checked == true){
		 	blackEditionRemaining = parseInt(blackEditionRemaining) - 1;
		} else if(radioThingy[3].checked == true){
		 	mahoganySpecialRemaining = parseInt(mahoganySpecialRemaining) - 1;
		}
		displayRaised()
		showPledges()
	}
}




function calcValue(){
	let pledgeAmount = document.querySelectorAll('.pledge-amount-style');

	for (i=0; i<pledgeAmount.length; i++){
		raisedCalculated = parseInt(raisedCalculated) + parseInt(pledgeAmount[i].value)
		
	}
}



// Close modal button

function closeModal(){
	document.querySelector('.modal-background').style.display = 'none';	
	document.querySelector('.success-modal-container').style.display = 'none';
	disableModalPledgeBox()
	disablePledgeBoxes(bambooStandRemaining,bambooBox)
	disablePledgeBoxes(blackEditionRemaining,blackBox)
	disablePledgeBoxes(mahoganySpecialRemaining,mahoganyBox)
	document.body.classList.remove('modal-noscroll');
	for (i=0; i<radioThingy.length; i++){
		radioThingy[i].checked = false;
	}
	checkUncheckPledgeBox()
}




// Close modal when tap outside of box

let entireModal = document.querySelector('.modal-background')

entireModal.addEventListener('click', function(event){
	if (event.currentTarget == event.target){
		closeModal();
	}
});









function limitLength(){
	if (this.value.length > this.maxLength){
		this.value = this.value.slice(0, this.maxLength);
	}
}


displayRaised()
showPledges()
disableModalPledgeBox()
disablePledgeBoxes(bambooStandRemaining,bambooBox)
disablePledgeBoxes(blackEditionRemaining,blackBox)
disablePledgeBoxes(mahoganySpecialRemaining,mahoganyBox)
