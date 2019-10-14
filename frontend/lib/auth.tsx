import { auth } from './fire'
import { isEmpty } from 'lodash'
// import { useSelector } from 'react-redux'

/*********************************************************************/
// Sign Up
export const signUpWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<any> => auth.createUserWithEmailAndPassword(email, password)

// Sign In
export const signInWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<any> => auth.signInWithEmailAndPassword(email, password)

// Auth Status Tracking
export const authStatus = () => {
  auth.onAuthStateChanged(user => {
    console.log('auth status: ', user)
    return !isEmpty(user)
  })
}
/*********************************************************************/
/****Behaviors needs to be signed in First****************************/
/*****Current User is Set When Login Action success *****************/

//provide a store-connected var to get currentUser
// const currentUser = useSelector((state: any) => state.user.currentUser)
/*********************************************************************/
// Sign out
// dont define as async or use await,
// otherwise return would be undefined
export const signOut = () => auth.signOut()

// if (currentUser != null) {
//   currentUser.providerData.forEach(function(profile) {
//     console.log('Sign-in provider: ' + profile.providerId)
//     console.log('  Provider-specific UID: ' + profile.uid)
//     console.log('  Name: ' + profile.displayName)
//     console.log('  Email: ' + profile.email)
//     console.log('  Photo URL: ' + profile.photoURL)
//   })
// }

// // Password Reset
// export const doPasswordReset = (email: string) =>
//   auth.sendPasswordResetEmail(email)

// // Password Change
// export const doPasswordUpdate = (password: string) =>
//   auth.currentUser && auth.currentUser.updatePassword(password)

// //Send a user a verification email
// var user = firebase.auth().currentUser
// user
//   .sendEmailVerification()
//   .then(function() {
//     // Email sent.
//   })
//   .catch(function(error) {
//     // An error happened.
//   })

// var user = firebase.auth().currentUser
// var newPassword = getASecureRandomPassword()

// //Set a user's password
// user
//   .updatePassword(newPassword)
//   .then(function() {
//     // Update successful.
//   })
//   .catch(function(error) {
//     // An error happened.
//   })

// //Send a password reset email
// var auth = firebase.auth()
// var emailAddress = 'user@example.com'
// auth
//   .sendPasswordResetEmail(emailAddress)
//   .then(function() {
//     // Email sent.
//   })
//   .catch(function(error) {
//     // An error happened.
//   })

// //Delete a user
// var user = firebase.auth().currentUser
// user
//   .delete()
//   .then(function() {
//     // User deleted.
//   })
//   .catch(function(error) {
//     // An error happened.
//   })

// // Prompt the user to re-provide their sign-in credentials
// // Some security-sensitive actions—such as deleting an account
// // setting a primary email address, and changing a password—require
// // that the user has recently signed in.
// user
//   .reauthenticateWithCredential(credential)
//   .then(function() {
//     // User re-authenticated.
//   })
//   .catch(function(error) {
//     // An error happened.
//   })
