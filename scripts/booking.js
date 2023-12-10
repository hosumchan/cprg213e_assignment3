/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var costPerDay = 35; 
var daysSelected = 0; 
var totalCost = 0; 
var fiveDaysButtons = document.querySelectorAll('.day-selector li');
var fullDayButton = document.getElementById('full');
var halfDayButton = document.getElementById('half');
var calculatedCostElement = document.getElementById('calculated-cost');
var clearButton = document.getElementById('clear-button');


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

/*.classList is applied here to add or remove or toggle easily, https://www.w3schools.com/jsref/prop_element_classlist.asp*/

function DaySelection(button) {
    if (button.classList.contains('clicked') == false) {    
        button.classList.add('clicked');
        daysSelected++;
        calculateTotalCost();
    }
}
  
for (let i = 0; i < fiveDaysButtons.length; i++) {
    let button = fiveDaysButtons[i];
    button.addEventListener('click', function(){DaySelection(button);});
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function zeroDaySelection() {
    for (let i = 0; i < fiveDaysButtons.length; i++) {
        fiveDaysButtons[i].classList.remove('clicked');
    }
    daysSelected = 0;
    calculateTotalCost(); 
}

clearButton.addEventListener('click', function() {zeroDaySelection();});




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function toHalfDayPrice() {
    if (halfDayButton.classList.contains('clicked') == false) {
        halfDayButton.classList.add('clicked');
        fullDayButton.classList.remove('clicked');
        costPerDay = 20;
        calculateTotalCost();
      }
}

halfDayButton.addEventListener('click', function() {toHalfDayPrice();});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function toFullDayPrice() {
    if (fullDayButton.classList.contains('clicked') == false) {
        fullDayButton.classList.add('clicked');
        halfDayButton.classList.remove('clicked');
        costPerDay = 35;
        calculateTotalCost();
      }
}

fullDayButton.addEventListener('click', function() {toFullDayPrice();}); 


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateTotalCost() {
    totalCost = daysSelected * costPerDay;
    calculatedCostElement.innerHTML = totalCost;
}
  
// Initial calculation on page load
calculateTotalCost();
