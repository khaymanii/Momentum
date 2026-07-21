import { AuthLayout } from "@/components/auth/AuthLayout";
import { SignInForm } from "@/components/auth/SignInForm";

export default function SignInPage() {
  return (
    <AuthLayout
      title="Welcome back"
      description="Sign in to continue building momentum for your launch."
    >
      <SignInForm />
    </AuthLayout>
  );
}