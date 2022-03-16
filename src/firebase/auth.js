import { initializeApp } from "firebase/app";
import firebaseconfig from "./config.js"
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth'
initializeApp(firebaseconfig)

const auth = getAuth()

const userRegister = (email, password, callbackRegister) => {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    callbackRegister()
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
  });

}

const userLogin = (email, password, callbackEmail) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    callbackEmail(user.email)
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
   
  });

}
const logOut = () => {
  signOut(auth)
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
};

const observador = (to, next) => {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      if (to.path !== "/" && to.path !== "/login" && to.path !== "/contacto" && to.path !== "/login" && to.path !== "/productos" && to.path !== "/servicios" && to.path !== "/chirighin" && to.path !== "/register") {
        next("/");
      } else {
        next(); 
      }
    } else {
      if (to.path === "/login") {
        next("/admin", "/editar");
      } else {
        next(); 
      }
    }
  });
};

export { observador, userLogin, logOut, userRegister }
