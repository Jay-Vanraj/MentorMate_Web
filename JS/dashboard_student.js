function openTab(evt, TabName) { // for tabbed pages
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(TabName).style.display = "block";
      evt.currentTarget.className += " active";
    }

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
/*
    function openForm() {
      document.getElementById("myForm").style.display = "block";
    }

    function closeForm() {
      document.getElementById("myForm").style.display = "none";
    }
*/

// To open Form for adding question
function openForm() {
    document.getElementById("popupForm").style.display="block";
}

// CLose the form      
function closeForm() {
    document.getElementById("popupForm").style.display="none";
}
      
function select_mentor(s1,s2){ // add names to mentors in selection list dynamically
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    s2.innerHTML = "";
        
    if(s1.value == "Maths"){
        var optionArray = ["select|Select", "jaysan|Jaysan","mihir|Mihir","rekha|Rekha"];
    } 
    else if(s1.value == "Science"){
        var optionArray = ["select|Select", "isha|Isha","ankita|Ankita","prayag|Prayag"];
    } 
    else if(s1.value == "English"){
        var optionArray = ["select|Select", "shalin|Shalin","saurabh|Saurabh"];
    }
      
    for(var option in optionArray){
        var pair = optionArray[option].split('|');
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
}


function select_mentorm(s1,s2){ // add names to mentors in selection list dynamically
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    s2.innerHTML = "";
        
    if(s1.value == "Maths"){
        var optionArray = ["select|Select", "jaysan|Jaysan","mihir|Mihir","rekha|Rekha"];
    } 
    else if(s1.value == "Science"){
        var optionArray = ["select|Select", "isha|Isha","ankita|Ankita","prayag|Prayag"];
    } 
    else if(s1.value == "English"){
        var optionArray = ["select|Select", "shalin|Shalin","saurabh|Saurabh"];
    }
      
    for(var option in optionArray){
        var pair = optionArray[option].split('|');
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
}


// DB add queestion
function db_add_ques() {

  
  var adda = document.getElementById("Questions"); 
  /*var aTag = document.createElement('a');
  aTag.setAttribute('href',"a.html");
  aTag.innerHTML = "link text";*/
  adda.innerHTML = adda.innerHTML + "<a href = \"a.html\">HELLO</a> <br>" //the lines in quotes is to be added using string processing | currently only adds link to a.html and name HELLO
    closeForm();
}

function db_add_meet() {
 
  /*var s1 = document.getElementById("slct1m").value;
  var s2 = document.getElementById("slct2m").value;
  var d = document.getElementById("dm").value;
  var t = document.getElementById("tm").value;
  var desc = " ";
  desc = desc + s1 + s2 + d + t;
  var para = document.createElement('p');
  var text = document.createTextNode(desc);
  para.appendChild(text);

  var ele = document.getElementById("Meetings");
  ele.appendChild(para);
  // var desc = " Hello";
  //addst.innerHTML = addst.innerHTML + desc + <br/> //the lines in quotes is to be added using string processing | currently only adds link to a.html and name HELLO
*/

  var desc = " ";

  desc = desc + "Subject : "
  + document.getElementById("slct1m").value + "<br/>" 
  + "Mentor : "
  + document.getElementById("slct2m").value + "<br/>"
  + "Date : "
  + document.getElementById("dm").value + "<br/>"
  + "Time : "
  + document.getElementById("tm").value + "<br/>";

  document.getElementById("Meetings").innerHTML=desc;
  closeForm();
}


// To open Form for adding question for Meeting
function openFormM() {
    document.getElementById("popupFormM").style.display="block";
}