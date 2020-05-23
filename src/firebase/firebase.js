import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_API_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };


// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())

// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())

// })
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())

// })



// // database.ref('expenses')
// //     .once('value')
// //     .then((snapshot) => {
// //         const expenses = [];
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             })
// //         })
// //         console.log(expenses)
// //     })

// // database.ref('expenses')
// //     .on('value', (snapshot) => {
// //         const expenses = [];
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             })
// //         })
// //         console.log(expenses)
// //     })

// // database.ref('expenses').push({
// //     title: 'To do 2',
// //     body: 'finish react lesson'
// // });
// // database.ref('notes/-M7uga2UbIRGXIgv73lt').remove()

// // database.ref('notes').push({
// //     title: 'To do 2',
// //     body: 'finish react lesson'
// // });


// // const subData = database.ref().on('value', (snapshot) => {
// //     console.log(snapshot.val())
// // }, (e) => {
// //     console.log('error', e)
// // })

// // setTimeout(() => {
// //     database.ref().update({ age: 26 })
// // }, 3000)
// // setTimeout(() => {
// //     database.ref().update({ age: 27 })
// // }, 6000)
// // setTimeout(() => {
// //     database.ref().off(subData)
// // }, 9000)

// // setTimeout(() => {
// //     database.ref().update({ age: 29 })
// // }, 12000)

// // database.ref().update({ jobTitle: 'Taint Waxer' })

// // database.ref('location/city').once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val()
// //         console.log(val)
// //     })
// //     .catch((e) => {
// //         console.log('error', e)
// //     })

// // database.ref().set({
// //     name: 'Jessica Lara',
// //     age: 26,
// //     isSingle: false,
// //     stressLevel: 6,
// //     jobTitle: 'Bussy Slayer',
// //     location: {
// //         city: 'Fairfield',
// //         country: 'United States'
// //     }
// // }).then(() => {
// //     console.log('data is saved')
// // }).catch((e) => {
// //     console.log('This failed', e)
// // })

// // database.ref().update({
// //     stressLevel: 9,
// //     jobTitle: 'Big ole poon muncher',
// //     'location/city': 'Oakland'

// // }).then(() => {
// //     console.log('data updated')
// // }).catch((e) => {
// //     console.log('there was an error', e)
// // })

// // database.ref('age').set(27)
// // database.ref('location/city').set('Fairfield').then(() => {
// //     console.log('second call worked')
// // }).catch((e) => {
// //     console.log('This failed', e)
// // })

// // database.ref().update({
// //     name: 'Jessica',
// //     age: 25,
// //     isSingle: null,
// //     job: 'Bussy Slayer',
// //     'location/city': 'Oakland'
// // })

// // database.ref('isSingle').remove().then(() => {
// //     console.log('is single was removed')
// // }).catch((e) => {
// //     console.log('This failed', e)
// // })

// // database.ref('isSingle').set(null).then(() => {
// //     console.log('is single was removed')
// // }).catch((e) => {
// //     console.log('this failed', e)
// // })