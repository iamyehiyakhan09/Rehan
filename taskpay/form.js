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
    let exp = document.form1.exp.value;
     if(exp == -1) {
        document.getElementById("expmsg").innerHTML = "select Option";
        return false;
    }
let mess= document.form1.mess.value;
    if(mess == ""){
        document.getElementById("ms_msg").innerHTML = "Enter Messge ";
        return false;
    } 
}