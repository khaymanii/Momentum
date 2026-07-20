import { AuthLayout } from "@/components/auth/AuthLayout";
import { SignUpForm } from "@/components/auth/SignUpForm";

export default function SignUpPage() {
  return (
    <AuthLayout
      title="Start building momentum"
      description="Create your account and start building an audience that is ready for your launch."
    >
      <SignUpForm />
    </AuthLayout>
  );
}