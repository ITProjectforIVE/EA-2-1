function print_result() 
  {
    /* --- (f) --- */
    var name = document.Sign.name.value;
    alert("Name = " + name);
    var email = document.Sign.email.value;
    alert("Email = " + email);
    var telephone = document.Sign.tel.value;
    alert("telephone = " + telephone);
    var date = document.Sign.date.value;
    alert("Date = " + date);
    var choice;
     if (document.Sign.choice[0].checked)
    choice = document.Sign.gender[0].value;
    else
     choice = document.Sign.choice[1].value;
    alert("choice = " + choice);


    var index = document.Sign.sport.selectedIndex;
    var wargame_val = document.Sign.wargame.options[index].value;
    var wargame_text = document.Sign.wargame.options[index].text;
    alert("Favourite Sport = " + wargame_text + " " + wargame_val);
  }