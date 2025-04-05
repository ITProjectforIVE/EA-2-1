function print_result() 
  {
    var name = document.Sign.name.value;
    alert("Name = " + name);
    var email = document.Sign.email.value;
    alert("Email = " + email);
    var telephone = document.Sign.tel.value;
    alert("telephone = " + telephone);
    var password = document.Sign.password.value;
    alert("Password = " + password);
    var choice;
    if (document.Sign.choice[0].checked)
    choice = document.Sign.choice[0].value;
    else
    choice = document.Sign.choice[1].value;
    alert('Team: ' + choice);
    var date = document.Sign.date.value;
    alert("Date = " + date);
    var index = document.Sign.war.selectedIndex;
    var wargame_val = document.Sign.war.options[index].value;
    var wargame_text = document.Sign.war.options[index].text;
    alert("Battle  = " + wargame_text + " ");
  }
