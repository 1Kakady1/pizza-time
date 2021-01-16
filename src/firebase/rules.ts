/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
  	function prefix() {
      return /databases/{database}/documents;
    }
    function checkUser(users,id){
    	return id in users
    }
    match /users/{user} {
    	allow write: if false;
      allow read: if request.auth.uid != null;
    }
    match /task/{taskItem} {
    	allow write: if request.auth.uid != null && checkUser(resource.data.userID,request.auth.uid) && get(/$(prefix())/users/$(request.auth.uid)).data.userStatus == "admin";
      allow read: if request.auth.uid != null && checkUser(resource.data.userID,request.auth.uid);
    }
  }
}

*/