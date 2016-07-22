
// get age as of today
//var dateString = 19800810;
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// get days to birthday from today
//var dateString = 07/25/1980; i.e, dd/MM/yyy
function DaysToBirthdayFromToday(birthdayString) {
    var currentYear = new Date().getFullYear();
    //get today midnight
    var today = new Date(currentYear, new Date().getMonth(), new Date().getDate());
    var birthdayParts = birthdayString.split("/");
    var yearBirthday = new Date(currentYear, birthdayParts[0] - 1, birthdayParts[1]);
    var timDiffInMilliSeconds = yearBirthday.getTime() - today.getTime();
    var timDiffInDays = timDiffInMilliSeconds / (1000 * 60 * 60 * 24);
    return timDiffInDays < 0 ? 0 : timDiffInDays; // set zero if past
}

//get expiry date from today given the number of days
//var startDate = "2016-07-14"; //yyyy-MM-dd format
//var days = 21; //days count
function GetExpiryDate(startDate, days) {
    var expiry = new Date(startDate);
    expiry.setDate(expiry.getDate() + days);
    return expiry;
}
