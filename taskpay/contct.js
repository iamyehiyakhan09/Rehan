/**
    * @description      : 
    * @author           : NP-SoftTech
    * @group            : 
    * @created          : 20/12/2022 - 16:57:10
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/12/2022
    * - Author          : NP-SoftTech
    * - Modification    : 
**/
function check_form_valid(){
    let fname= document.form1.fname.value;
    if(fname == ""){
        document.getElementById("fmsg").innerHTML = "Enter Name";
        return false;
    } 
    else if(!isNaN(fname)){
        document.getElementById("fmsg").innerHTML = "Enter Alphabet Only";
        return false;

    }

    let mail = document.form1.mail.value;
    if(mail == ""){
        document.getElementById("mmsg").innerHTML = "Enter Email";
        return false;
    }
    else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
        document.getElementById("mmsg").innerHTML = "Enter Email properly";
        return false;  
    } 

    let sname= document.form1.sname.value;
    if(sname == ""){
        document.getElementById("smsg").innerHTML = "Enter Name";
        return false;
    } 










let mess= document.form1.mess.value;
    if(mess == ""){
        document.getElementById("ms_msg").innerHTML = "Enter Messge ";
        return false;
    } 




    
}