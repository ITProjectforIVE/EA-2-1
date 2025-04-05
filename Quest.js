function Westcountry(){
let c = prompt("Please input country name",""); //show prompt box
let line = "You have choose " + c +"!\n"; //show country name
	if (c == "British" || c == "France"){
	    alert(line+" Defend your homeland and counter attack the Axis!");
	}
    else if(c =="Germany"||c == "Italy"){
        alert(line+" Invade Europe as soon as possible!");
    }
    else if(c== "USA"){
        alert(line+"Help British and France land on the Europe!");
    }
    else if(c == null){
        return false;
    }
    else{
        alert("Invalid country name!");
        return Westcountry();
    }
}

function Eastcountry(){
let c = prompt("Please input country name","");
let line = "You have choose " + c +"!\n";
    if (c == "Soviet Union"){
	    alert(line+"Defend your homeland and counter attack the Berlin!");
	}
    else if(c=="Germany"){
        alert(line+"Invades Moscow!");
    }
    else if(c=="Finland"){
        alert(line+"Protect your country between Soviet Union and Germany!");
    }
    else if(c == null){
        return false;
    }
    else{
        alert("Invalid country name!");
        return Eastcountry();
    }
}

function Asiacountry(){
    let c = prompt("Please input country name","");
    let line = "You have choose " + c +"!\n";
        if (c == "China"||c =="Soviet Union"){
            alert(line+"Defend your homeland!");
        }
        else if(c=="USA"){
            alert(line+"Try to land on Japan and  nuke!");
        }
        else if(c=="Japan"){
            alert(line+"Invades China and Pacific Islands!");
        }
        else if(c == null){
            return false;
        }
        else{
            alert("Invalid country name!");
            return Asiacountry();
        }
}

function Dunkirk(){
    const Allies = "<fieldseet><legend>Allies:</legend>Escape from the Dunkirk before the germany bingo all of the allies!</fieldseet>";
    const Axis = "<fieldseet><legend>Axis:</legend>Bingo all the allies army!</fieldseet>";
    let text = document.getElementById("Dunkirk");
    text.innerHTML = Allies+Axis;
}
function Stalingrad(){
    const Allies = "<fieldseet><legend>Allies:</legend>Bingo all the German army!</fieldseet>";
    const Axis = "<fieldseet><legend>Axis:</legend>Bingo all the Soviet Union army!</fieldseet>";
    let text = document.getElementById("Stalingrad");
    text.innerHTML = Allies+Axis;
}
function IwoJima(){
    const Allies = "<fieldseet><legend>Allies:</legend>Occupy the all the base of Iwo Jima island!</fieldseet>";
    const Axis = "<fieldseet><legend>Axis:</legend>Defend all the military base!</fieldseet>";
    let text = document.getElementById("IwoJima");
    text.innerHTML = Allies+Axis;
}