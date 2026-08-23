"use client";

import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getAnalytics, type Analytics } from "firebase/analytics";

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = getApps().length ? getApp() : initializeApp(config);

export let firebaseAuth: Auth;
export let analytics: Analytics | undefined;

if (typeof window !== "undefined") {
  firebaseAuth = getAuth(app);
  analytics = getAnalytics(app);
} else {
  // server: provide a placeholder so imports don't crash the build.
  // Nothing server-side should actually call auth methods on this.
  firebaseAuth = getAuth(app);
}
