function print_result() 
  {
    var name = document.Sign.name.value;
    alert("Name = " + name);
    var email = document.Sign.email.value;
    alert("Email = " + email);
    var telephone = document.Sign.tel.value;
    alert("telephone = " + telephone);
    var date = document.Sign.date.value;
    alert("Date = " + date);
    var index = document.Sign.wargame.selectedIndex;
    var wargame_val = document.Sign.wargame.options[index].value;
    var wargame_text = document.Sign.wargame.options[index].text;
    alert("Battle  = " + wargame_text + " " + wargame_val);
    var passwd1 = document.Sign.passwd1
  }
var i = 0;
function move() {
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBar");
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
  }