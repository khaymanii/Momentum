import GoogleIcon from "@/public/Icon/google";
import { GoogleAuthProvider, signInWithPopup, type User } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase-client";

type SocialLoginProps = {
  onGoogleClick?: () => void;
  onGithubClick?: () => void;
  onSuccess?: (user: User) => Promise<void>;
  onError?: (error: unknown) => void;
  disabled?: boolean;
};

export function SocialLogin({
  onGoogleClick,
  onSuccess,
  disabled,
}: SocialLoginProps) {
  async function signIn(provider: GoogleAuthProvider, fallback?: () => void) {
    if (fallback) return fallback();

    const auth = getFirebaseAuth();
    const result = await signInWithPopup(auth, provider);

    if (onSuccess) {
      await onSuccess(result.user);
    }
  }

  return (
    <div className="space-y-3">
      <button
        type="button"
        disabled={disabled}
        onClick={() => signIn(new GoogleAuthProvider(), onGoogleClick)}
        className="flex h-12 w-full items-center justify-center gap-3 rounded-full border border-[#dfe2dc] bg-white text-sm font-medium text-[#171817] transition-all hover:border-[#c8ccc5] hover:bg-[#fafaf9] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <GoogleIcon />
        Continue with Google
      </button>
    </div>
  );
}
