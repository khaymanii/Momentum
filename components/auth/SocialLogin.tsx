import GoogleIcon from "@/public/Icon/google";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from "firebase/auth";
import { firebaseAuth } from "@/lib/firebase-client";

type SocialLoginProps = {
  onGoogleClick?: () => void;
  onGithubClick?: () => void;
  onSuccess?: (user: User) => Promise<void>;
};

export function SocialLogin({ onGoogleClick, onSuccess }: SocialLoginProps) {
  async function signIn(
    provider: GoogleAuthProvider | GithubAuthProvider,
    fallback?: () => void,
  ) {
    if (fallback) return fallback();
    if (onSuccess)
      await onSuccess((await signInWithPopup(firebaseAuth, provider)).user);
  }
  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={() => signIn(new GoogleAuthProvider(), onGoogleClick)}
        className="flex h-12 w-full items-center justify-center gap-3 rounded-full border border-[#dfe2dc] bg-white text-sm font-medium text-[#171817] transition-all hover:border-[#c8ccc5] hover:bg-[#fafaf9] active:scale-[0.99]"
      >
        <GoogleIcon />
        Continue with Google
      </button>
    </div>
  );
}
