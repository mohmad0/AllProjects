// Make Function To Do The Request
function getRepos() {
     // Assign The Request Object To Variable
    var myrequest = new XMLHttpRequest();

    // On Ready State Change ==> Function Called When Ready State Change
    myrequest.onreadystatechange = function () {

         if(this.readystate === 4 && this.status === 200) {
            var myObject = JSON.parse(this.responseText),
                myText = "";

            for(var i = 0; i < myObject.length; i++) {
                // console.log(myObject[i].username);

                myText += myObject[i].username + "<br>";
                // console.log(myText);
            }
            document.getElementById("show").innerHTML = myText;
            console.log(myText);
         }
               
    };

    // XMLHttpRequest.open(Method, URL, Async, User, Password) Async is mean [Call] A syncronus (True)  or  syncronus (False ==> i sead to browser do't do any thing before this Request )

    myrequest.open("get","object.json",true);  // https://api.github.com/users/ElzeroWebSchool/repos
    myrequest.send();
};
