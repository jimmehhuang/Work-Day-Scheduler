// variable/array of each hour block to loop through the scheduler
var dayBlocks = [
    {
        id: "0",
        hour: "09",
        time: "09",
        ampm: "am",
        reminder: " "
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        ampm: "am",
        reminder: " "
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        ampm: "am",
        reminder: " "
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        ampm: "pm",
        reminder: " "
    },
    {
        id: "4",
        hour: "01",
        time: "13",
        ampm: "pm",
        reminder: " "
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        ampm: "pm",
        reminder: " "
    },
    {
        id: "6",
        hour: "03",
        time: "15",
        ampm: "pm",
        reminder: " "
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        ampm: "pm",
        reminder: " "
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        ampm: "pm",
        reminder: " "
    }
]

// function to display date at top of page/header
function todaysDate(){
    var dateMoment = moment().format('[Today is] dddd, MMMM Do, YYYY [and it is] h:mm:ss:a');
    $("#currentDay").text(dateMoment);
}
//todaysDate();

//save user-inputted reminder data to local storage
function saveReminder(){
    localStorage.setItem("dayBlocks", JSON.stringify(dayBlocks));
}

//push data from local storage to viewable on the page
function displayReminders(){
    dayBlocks.forEach(function(_dayBlocks) {
        $(`#${_dayBlocks.id}`).val(_dayBlocks.reminder);
    })
}
//displays local storage data in view
function finalDisplay() {
    var dayStorage = JSON.parse(localStorage.getItem("dayBlocks"));
    if (dayStorage){
        dayBlocks = dayStorage;
    }
    saveReminder();
    displayReminders();
}
// display todays date
todaysDate();

//visually creates overall timeblocks w/ times and events appended
dayBlocks.forEach(function (hourBlock) {
//row of the time blocks for each hour
    var hourRow = $("<form>").attr({"class": "row"});
    $(".container").append(hourRow);
//area to display time
    var timeField = $("<div>")
    .text(`${hourBlock.hour}${hourBlock.ampm}`)
    .attr({"class": "col-md-2 hour"});
//scheduling data
    var hourPlan = $("<div>")
        .attr({"class": "col-md-9 description p-0"});
    var planData = $("<textarea>");
    hourPlan.append(planData);
    planData.attr("id", hourBlock.id);
//checks the current time with the time block  
    if (hourBlock.time < moment().format("HH")){
        planData.attr({
            "class": "past"
        })
    } else if (hourBlock.time === moment().format("HH")){
        planData.attr({
            "class": "present"
        })
    } else if (hourBlock.time > moment().format("HH")){
        planData.attr({
            "class": "future"
        })
    }
//create save button
    var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var savePlan = $("<button>")
        .attr({"class": "col-md-1 saveBtn"});
    savePlan.append(saveButton);
    hourRow.append(timeField, hourPlan, savePlan);
})

// load local storage data
finalDisplay();

//save to local storage
$(".saveBtn").on("click", function(event){
    event.preventDefault();
    var arrayIndex = $(this).siblings(".description").children(".future").attr("id");
    dayBlocks[arrayIndex].reminder = $(this).siblings(".description").children(".future").val();
    console.log(arrayIndex);
    saveReminder();
    displayReminders();
})