

function validateDate(){

    //create a date variable which stores the current day 
    let today = new Date();
    
    //users dob
    let birthdate = new Date(document.getElementById("dob").value);

    //if the user is more than 17 and less than 60 years old -> true
    //only problem in this way is, that its not 200% correct, because it only compairs the years
    if(today.getFullYear() - 17 > birthdate.getFullYear() && today.getFullYear() - 60 < birthdate.getFullYear())
    {
        return true;
    }
    else
    {
        //alert that the DOB ist unvalid 
        alert("Invalid DOB");
        return false;
    }
}
