function check_form_valid(){
    let fname= document.form1.fname.value;
    if(fname == ""){
        document.getElementById("fmsg").innerHTML = "Enter First name";
        return false;
    } 
    else if(!isNaN(fname)){
        document.getElementById("fmsg").innerHTML = "Enter Alphabet Only";
        return false;

    }

    let mname= document.form1.mname.value;
    if(mname == ""){
        document.getElementById("Mmsg").innerHTML = "Enter Middle name";
        return false;
    } 
    else if(!isNaN(mname)){
        document.getElementById("Mmsg").innerHTML = "Enter Alphabet Only";
        return false;

    }


    let lname= document.form1.lname.value;
    if(lname == ""){
        document.getElementById("lmsg").innerHTML = "Enter Last name";
        return false;
    } 
    else if(!isNaN(lname)){
        document.getElementById("lmsg").innerHTML = "Enter Alphabet Only";
        return false;

    }



    let mail = document.form1.mail.value;
if(mail == ""){
    document.getElementById("mailmsg").innerHTML = "Enter Email";
    return false;
}
else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
{
    document.getElementById("mailmsg").innerHTML = "Enter Email properly";
    return false;  
}

let sec = document.form1.security.value;
if(sec == ""){
    document.getElementById("pmsg").innerHTML ="Enter Password";
    return false;
}
else if(sec.length <= 8){
    document.getElementById("pmsg").innerHTML ="Enter only 8 Charcter";
    return false;
}
else if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{0,8}$/)
{
    document.getElementById("pmsg").innerHTML ="only  8 characters which contain at least one numeric digit and a special character";
    return false;  
}

let male = document.form1.gen[0].checked;
let female = document.form1.gen[1].checked;

if( male == false && female == false){
    document.getElementById("gmsg").innerHTML = "select gender";
    return false;
}



let c1 = document.form1.c1.checked;
let c2 = document.form1.c2.checked;
let c3 = document.form1.c3.checked;

if(c1 == false && c2 == false && c3 == false){
    document.getElementById("submsg").innerHTML = "select Subject";
    return false;
}

let exp = document.form1.exp.value;
    
if(exp == -1) {
    document.getElementById("expmsg").innerHTML = "select Experience";
    return false;
}


}