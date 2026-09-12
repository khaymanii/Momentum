import Link from "next/link";

interface LogoProps {
  href?: string;
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export function Logo({
  href = "/",
  variant = "dark",
  size = "md",
  className = "",
  onClick,
}: LogoProps) {
  const isLight = variant === "light";

  const sizeConfig = {
    sm: {
      box: "h-7 w-7 rounded-md text-xs",
      text: "text-base font-semibold",
      gap: "gap-2",
    },
    md: {
      box: "h-8 w-8 rounded-lg text-sm",
      text: "text-lg font-semibold",
      gap: "gap-2.5",
    },
    lg: {
      box: "h-9 w-9 rounded-lg text-base",
      text: "text-lg font-semibold",
      gap: "gap-2.5",
    },
  }[size];

  const content = (
    <>
      <span
        className={`flex ${sizeConfig.box} shrink-0 items-center justify-center font-black leading-none tracking-tight select-none shadow-sm transition-transform duration-200 group-hover:scale-105 ${
          isLight
            ? "bg-white text-[#1d5c43]"
            : "bg-[#1d5c43] text-white ring-1 ring-[#1d5c43]/20"
        }`}
      >
        M
      </span>
      <span
        className={`tracking-tight ${sizeConfig.text} ${
          isLight ? "text-white" : "text-[#171817]"
        }`}
      >
        Momentum
      </span>
    </>
  );

  const containerClass = `group inline-flex items-center ${sizeConfig.gap} ${className}`;

  if (!href) {
    return <div className={containerClass}>{content}</div>;
  }

  return (
    <Link href={href} onClick={onClick} className={containerClass}>
      {content}
    </Link>
  );
}
