import { createSlice } from '@reduxjs/toolkit';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import authFB from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

GoogleSignin.configure({
    webClientId: '773447083531-ea9v1as1leavtf4be0u2onmtrerr7hes.apps.googleusercontent.com',
});

export const auth = createSlice({
    name: 'auth',
    initialState: {
        initializing: true,
        user: {},
        teams: ''
    },
    reducers: {
        setInitializing(state, action) {
            state.initializing = action.payload
        },
        setUser(state, action) {
            state.user = action.payload;
            // console.log(state.user.uid);
            // console.log(state.user);
        }
    }
});

export const { setInitializing, setUser } = auth.actions;

export default auth.reducer;

export const fetchLogin = () => async() => {
    // console.log(state)
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = authFB.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return authFB().signInWithCredential(googleCredential);

    // Set data on database
//     const ref = await database().ref(`/users/${state.user.uid}`)
//     await ref.set({
//         name: state.user.displayName
//     })
}

export const fetLogOut = () => () => {
    authFB().signOut()
        .then(() => console.log("Se cerro la sesión"))
}