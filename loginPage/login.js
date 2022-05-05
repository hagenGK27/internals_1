/**
 * variable to count the attempts
 * -> only three atemps are allowed!!!
 */
var attemptOnAdminLogin = 3;
var attemptOnStaffLogin = 3;

/**
 * This function validates th eadmin login data ONLY. It reads the input 
 * via .getElementById().value and compairs it to the static given login data. 
 * If the data is not exactly what it should be, the method decrements the attemps
 * and sends an allert to the user. After three attmeps the input fields get 
 * disabled as well as the Button. 
 *   
 * @returns true, if the login data is correct and false, if it`s not
 */
function validateAdminLogin()
{  
    // reading the input of the login data  
    var username = document.getElementById("adminUsername").value;
    var password = document.getElementById("adminPassword").value;
    
    // compiaring the login data 
    if(username == "Admin" && password == "Admin")
    {   
        return true;
    }
    else
    {
        //decrementing attempt by one
        attemptOnAdminLogin--;

        //just a small information about the failure and the left attemps
        alert("Login Credentials Incorrect\n" + "You have left " + attemptOnAdminLogin + " attempts!");
        if(attemptOnAdminLogin == 0)
        {
            //username.disabled;
            document.getElementById("adminUsername").disabled = true;
            document.getElementById("adminPassword").disabled = true;
            document.getElementById("submitAdmin").disabled = true;
        }
        return false;
    }   
}

/**
 * This function validates the staff login data ONLY. It reads the input 
 * via .getElementById().value and compairs it to the static given login data. 
 * If the data is not exactly what it should be, the method decrements the attemps
 * and sends an allert to the user. After three attmeps the input fields get 
 * disabled as well as the Button. 
 *   
 * @returns true, if the login data is correct and false, if it`s not
 */
function validateStaffLogin()
{   
    var username = document.getElementById("staffUsername").value;
    var password = document.getElementById("staffPassword").value;
    
    if(username == "Staff" && password == "Staff")
    {   
        return true;
    }
    else
    {
        //decrementing attempt by one
        attemptOnStaffLogin--;

        alert("Login Credentials Incorrect\n" + "You have left " + attemptOnStaffLogin + " attempts!");
        if(attemptOnStaffLogin == 0)
        {
            //username.disabled;
            document.getElementById("staffUsername").disabled = true;
            document.getElementById("staffPassword").disabled = true;
            document.getElementById("submitStaff").disabled = true;
        }
        return false;
    }   
}
