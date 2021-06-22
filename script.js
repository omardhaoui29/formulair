function verif(){
    if (f.name.value == "")
{
    alert("champ nom et prénom est obligatoire"
    );
    return false;

}else if (f.CIN.value == "")
{alert("champ CIN est obligatoire");
return false;

}else if (f.email.value == ""){
    alert("champ email est obligatoire");
    return false;
}else if  ( (f.email.value.indexof('@')==-1) ||
(f.email.value.indexof('.')<0) )
{
    alert("verifier que votre  email est correct");
    return false;
}else if ( (!f.Niveau[0].checked)&&(!f.Niveau[1].checked==false)&&(!f.Niveau[2].checked==false) )
{alert("vous devez choisir s/u/a !");
    return false;
}else if (f.Niveau.selectedIndex == 0)
{
    alert("Niveau obligatoire");
return false;
}else if ( (!f.H5.selected==true) && (!f.C3.selected==true)
(!f.JS.selected==false) (!f.JQ.selected==false) )
{ alert("Vous devvez choisir au moins H5/C3/JS/JQ")
return false;
}

}