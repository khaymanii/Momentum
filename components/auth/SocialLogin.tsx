import GithubIcon from "@/public/Icon/github";
import GoogleIcon from "@/public/Icon/google";

type SocialLoginProps = {
  onGoogleClick?: () => void;
  onGithubClick?: () => void;
};

export function SocialLogin({
  onGoogleClick,
  onGithubClick,
}: SocialLoginProps) {
  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={onGoogleClick}
        className="flex h-12 w-full items-center justify-center gap-3 rounded-full border border-[#dfe2dc] bg-white text-sm font-medium text-[#171817] transition-all hover:border-[#c8ccc5] hover:bg-[#fafaf9] active:scale-[0.99]"
      >
        <GoogleIcon />
        Continue with Google
      </button>

      <button
        type="button"
        onClick={onGithubClick}
        className="flex h-12 w-full items-center justify-center gap-3 rounded-full border border-[#dfe2dc] bg-white text-sm font-medium text-[#171817] transition-all hover:border-[#c8ccc5] hover:bg-[#fafaf9] active:scale-[0.99]"
      >
        <GithubIcon />
        Continue with GitHub
      </button>
    </div>
  );
}
