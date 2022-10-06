// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block

//array of each hour block
var dayBlocks = [
    {
        hour: "08",
        ampm: "am",
    },
    {
        hour: "09",
        ampm: "am",
    },
    {
        hour: "10",
        ampm: "am",
    },
    {
        hour: "11",
        ampm: "am",
    },
    {
        hour: "12",
        ampm: "pm",
    },
    {
        hour: "01",
        ampm: "pm",
    },
    {
        hour: "02",
        ampm: "pm",
    },
    {
        hour: "03",
        ampm: "pm",
    },
    {
        hour: "04",
        ampm: "pm",
    }
]
//function to display date at top of page/header
function todaysDate(){
    const dateMoment = moment().format('[Today is] dddd, MMMM Do, YYYY');
    $("#currentDay").text(dateMoment);
}
todaysDate();
//create timeblock w/ times listed
function hourBlock(){
    let hourRow = $("<form>").attr({"class": "row"});
    $(".container").append(hourRow);
}
//show save button
let saveButton = $("<i class='far fa-save fa-lg'></i>")
let savePlan = $("<button>").attr({"class": "col-md-1 saveBtn"});
//save to local storage
function saveEvent(){
    localStorage.setItem("dayBlocks", JSON.stringify(dayBlocks));
}
//save to local storage
$(".saveBtn").on('click', function(event){
    event.preventDefault();

})