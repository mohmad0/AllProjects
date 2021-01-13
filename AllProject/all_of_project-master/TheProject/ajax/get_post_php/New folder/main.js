// Make Function To Do The Request
function getRepos() {
     // Assign The Request Object To Variable
    var myrequest = new XMLHttpRequest();

    // On Ready State Change ==> Function Called When Ready State Change
    myrequest.onreadystatechange = function () {

         if(this.readystate === 4 && this.status === 200) {
            console.log(this.responseText);
        }
               
    };

    // XMLHttpRequest.open(Method, URL, Async, User, Password) Async is mean [Call] A syncronus (True)  or  syncronus (False ==> i sead to browser do't do any thing before this Request )

    myrequest.open("get","send.php?name=mohmad&age=22",true);  // https://api.github.com/users/ElzeroWebSchool/repos
    myrequest.send();
};
