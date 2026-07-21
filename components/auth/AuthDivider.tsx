export function AuthDivider() {
  return (
    <div className="my-6 flex items-center gap-4">
      <div className="h-px flex-1 bg-[#e1e3de]" />

      <span className="text-xs font-medium uppercase tracking-wider text-[#9a9d97]">
        Or continue with email
      </span>

      <div className="h-px flex-1 bg-[#e1e3de]" />
    </div>
  );
}