/**
 * variable to count the attempts
 * -> only three atemps are allowed!!!
 */
var attemptOnAdminLogin = 3;
var attemptOnStaffLogin = 3;

function validateAdminLogin()
{   
    var username = document.getElementById("adminUsername").value;
    var password = document.getElementById("adminPassword").value;
    if(username == "Admin" && password == "Admin")
    {   
        return true;
    }
    else
    {
        //decrementing attempt by one
        attemptOnAdminLogin--;

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
