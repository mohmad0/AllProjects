// Make Function To Do The Request
function getRepos() {
     // Assign The Request Object To Variable
    var myrequest = new XMLHttpRequest();

    // On Ready State Change ==> Function Called When Ready State Change
    myrequest.onreadystatechange = function () {
        // console.log(this.responseText);
        /*
            Ready State => The Status Of The Request
                [0] Request Not Initialized (not be ready)
                [1] Server Connection Established (he is agree of connection)
                [2] Request Recieved
                [3] Processing Request
                [4] Request Is Finished And Response Is Ready
            Status => Code Response Status
                [200] Ok
        */
        // if Request Is Finished And Response Is Ready And Status Code Is [200] (Ok) Get Response Text
         if(this.readystate === 4 && this.status === 200) {
                console.log(this.responseText);
         }
    };

    // XMLHttpRequest.open(Method, URL, Async, User, Password) Async is mean [Call] A syncronus (True)  or  syncronus (False ==> i sead to browser do't do any thing before this Request )

    myrequest.open("GET","object.json",true);  // https://api.github.com/users/ElzeroWebSchool/repos
    myrequest.send();
