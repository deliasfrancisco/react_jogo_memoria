import firebase from "firebase";
import { firebaseConfig } from "../constants/defaultValues";

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database };
