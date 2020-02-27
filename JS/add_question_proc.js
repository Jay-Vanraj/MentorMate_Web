
// To open FOrm for adding question
function openForm() {
    document.getElementById("popupForm").style.display="block";
}

// CLose the form      
function closeForm() {
    document.getElementById("popupForm").style.display="none";
}
      
function select_mentor(s1,s2){
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



    closeForm();
}