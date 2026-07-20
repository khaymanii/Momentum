import { AuthLayout } from "@/components/auth/AuthLayout";
import { VerifyEmail } from "@/components/auth/VerifyEmail";

export default function VerifyEmailPage() {
  return (
    <AuthLayout
      title="Verify your email"
      description="One quick step before you start building momentum."
    >
      <VerifyEmail />
    </AuthLayout>
  );
}