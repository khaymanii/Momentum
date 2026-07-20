import { AuthLayout } from "@/components/auth/AuthLayout";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Forgot your password?"
      description="Enter your email and we'll send you a secure link to reset your password."
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}