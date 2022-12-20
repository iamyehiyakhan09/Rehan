function check_form_valid(){
    let fname= document.form1.fname.value;
    if(fname == ""){
        document.getElementById("fmsg").innerHTML = "Enter Full name";
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
        document.getElementById("expmsg").innerHTML = "select Experience";
        return false;
    }


    let ms= document.form1.ms.value;
    if(ms == ""){
        document.getElementById("msmsg").innerHTML = "Enter Full name";
        return false;
    } 
}
