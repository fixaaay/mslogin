async function butsignIn() {
    var provider = new firebase.auth.OAuthProvider('microsoft.com');

    provider.setCustomParameters({
        // Force re-consent.
        prompt: 'consent',
        // Target specific email with login hint.
        login_hint: 'user@firstadd.onmicrosoft.com'
    });
    
    provider.addScope('mail.read');
    provider.addScope('calendars.read');
    
    await firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        console.log("here")
        // User is signed in.
        // IdP data available in result.additionalUserInfo.profile.
        // OAuth access token can also be retrieved:
        // result.credential.accessToken
        // OAuth ID token can also be retrieved:
        // result.credential.idToken
        console.log(result.additionalUserInfo.profile)
        var user = result.additionalUserInfo.profile
        return user
      })
      .catch(function(error) {
        // Handle error.
        console.log(error)
      });
}

async function butsignOut() {
    firebase.auth().signOut().then(function() {
        console.log("signed Out")
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
        console.log(error)
      });
}

