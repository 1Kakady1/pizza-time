/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{user} {
    	allow write: if false;
      allow read: if request.auth.uid != null;
    }
    match /orders/{order} {
    	allow write: if request.resource.data.key == "key";
      allow read: if false;
    }
    match /products/{product} {
    	allow write: if false;
      allow read: if true;
    }
    match /cat/{cat} {
    	allow write: if false;
      allow read: if true;
    }
  }
}
*/