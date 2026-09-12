"use client";

import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getAnalytics, type Analytics, isSupported } from "firebase/analytics";

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Lazy singleton — only initializes when first accessed on the client.
// Prevents Firebase from running during SSR / static prerendering.
let _app: FirebaseApp | null = null;
let _auth: Auth | null = null;

function getClientApp(): FirebaseApp {
  if (_app) return _app;
  if (getApps().length > 0) {
    _app = getApp();
    return _app;
  }
  _app = initializeApp(config);
  return _app;
}

/**
 * Returns the Firebase Auth instance.
 * Must only be called inside browser event handlers or effects, never at module level.
 */
export function getFirebaseAuth(): Auth {
  if (_auth) return _auth;
  _auth = getAuth(getClientApp());
  return _auth;
}

export let analytics: Analytics | undefined;

if (typeof window !== "undefined") {
  isSupported()
    .then((supported) => {
      if (supported) {
        analytics = getAnalytics(getClientApp());
      }
    })
    .catch(() => {
      // Analytics is optional and non-blocking
    });
}

export function formatAuthError(cause: unknown): string {
  if (!cause) return "An unexpected error occurred.";
  const message = cause instanceof Error ? cause.message : String(cause);

  if (
    message.includes("auth/invalid-api-key") ||
    message.includes("auth/api-key-not-valid")
  ) {
    return "Firebase authentication is not configured properly. Please check your NEXT_PUBLIC_FIREBASE_API_KEY environment variable.";
  }
  if (message.includes("auth/invalid-email")) {
    return "Please enter a valid email address.";
  }
  if (
    message.includes("auth/invalid-credential") ||
    message.includes("auth/wrong-password") ||
    message.includes("auth/user-not-found")
  ) {
    return "Invalid email or password.";
  }
  if (message.includes("auth/email-already-in-use")) {
    return "An account with this email already exists.";
  }
  if (message.includes("auth/weak-password")) {
    return "Password is too weak. Please use at least 6 characters.";
  }
  if (message.includes("auth/network-request-failed")) {
    return "Network error. Please check your internet connection.";
  }
  if (message.includes("auth/too-many-requests")) {
    return "Too many attempts. Please try again in a few moments.";
  }
  if (message.includes("auth/operation-not-allowed")) {
    return "This sign-in method is not enabled in Firebase Console.";
  }

  return (
    message
      .replace(/^Firebase:\s*/i, "")
      .replace(/^Error\s*\((.*?)\):?\s*/i, "")
      .trim() || "Authentication failed."
  );
}
