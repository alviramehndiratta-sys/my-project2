function getFirebaseEnv(key) {
  if (typeof process !== "undefined" && process && process.env && process.env[key]) {
    return process.env[key];
  }

  if (typeof window !== "undefined" && window && window[key]) {
    return window[key];
  }

  return "";
}

var firebaseConfig = {
  apiKey: getFirebaseEnv("FIREBASE_API_KEY"),
  authDomain: getFirebaseEnv("FIREBASE_AUTH_DOMAIN"),
  databaseURL: getFirebaseEnv("FIREBASE_DATABASE_URL"),
  projectId: getFirebaseEnv("FIREBASE_PROJECT_ID"),
  storageBucket: getFirebaseEnv("FIREBASE_STORAGE_BUCKET"),
  messagingSenderId: getFirebaseEnv("FIREBASE_MESSAGING_SENDER_ID"),
  appId: getFirebaseEnv("FIREBASE_APP_ID")
};

firebase.initializeApp(firebaseConfig);
