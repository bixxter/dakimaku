export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch((err) => {
            dispatch({type: 'LOGIN_ERROR', err})
        })
    }
}
export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({type:'SIGNOUT_SUCCESS'});
        })
    }
}
export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0],
                img: newUser.img,
                cartList: [],
                wishList: []
            })
        }).then(()=>{
            dispatch({type: 'SIGNUP_SUCCESS'})
        }).catch(err => {
            dispatch({type: 'SIGNUP_ERROR', err})
        })
    }
}
export const addToWishList = (newWish) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        var user = firebase.auth().currentUser;

        firestore.collection('users').doc(user.uid).update({
            wishList: firebase.firestore.FieldValue.arrayUnion(newWish.id)
        }).then(()=>{
            dispatch({type: 'ADD_WISHLIST_SUCCESS'})
        }).catch(err => {
            dispatch({type: 'ADD_WISHLIST_ERROR', err})
        })
    }

}
export const addToCartList = (newCart) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        var user = firebase.auth().currentUser;

        firestore.collection('users').doc(user.uid).update({
            cartList: firebase.firestore.FieldValue.arrayUnion(newCart)
        }).then(()=>{
            dispatch({type: 'ADD_WISHLIST_SUCCESS'})
        }).catch(err => {
            dispatch({type: 'ADD_WISHLIST_ERROR', err})
        })
    }

}
export const removeFromWishList = (oldWish) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        var user = firebase.auth().currentUser;

        firestore.collection('users').doc(user.uid).update({
            wishList: firebase.firestore.FieldValue.arrayRemove(oldWish)
        }).then(()=>{
            dispatch({type: 'REMOVE_FROM_WISHLIST_SUCCESS'})
        }).catch(err => {
            dispatch({type: 'REMOVE_FROM_WISHLIST_ERROR', err})
        })
    }

}
export const removeFromCartList = (oldCart) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        var user = firebase.auth().currentUser;

        firestore.collection('users').doc(user.uid).update({
            cartList: firebase.firestore.FieldValue.arrayRemove(oldCart)
        }).then(()=>{
            dispatch({type: 'REMOVE_FROM_CARTLIST_SUCCESS'})
        }).catch(err => {
            dispatch({type: 'REMOVE_FROM_CARTLIST_ERROR', err})
        })
    }

}