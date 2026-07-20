type AuthInputProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
};

export function AuthInput({
  label,
  name,
  type = "text",
  placeholder,
}: AuthInputProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-[#171817]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-[#dfe2dc] bg-white px-4 text-sm text-[#171817] outline-none transition-colors placeholder:text-[#9a9d97] focus:border-[#1d5c43] focus:ring-2 focus:ring-[#1d5c43]/10"
      />
    </div>
  );
}