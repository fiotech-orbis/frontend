import Image from "next/image";
import Link from "next/link";

interface OrbisLogoProps {
  href?: string;
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function OrbisLogo({
  href = "/",
  className = "",
  showText = true,
  size = "md",
}: OrbisLogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  const logoElement = (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <Image
          src="/img/logo.png"
          alt="Fiotech Orbis Logo"
          width={size === "sm" ? 32 : size === "md" ? 40 : 48}
          height={size === "sm" ? 32 : size === "md" ? 40 : 48}
          className={`${sizeClasses[size]} object-contain`}
          priority
        />
      </div>
      {showText && (
        <div className="text-center">
          <div className={`${textSizeClasses[size]} font-bold tracking-tight`}>
            FIOTECH <span className="text-[#f4c430]">ORBIS</span>
          </div>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="flex items-center">
        {logoElement}
      </Link>
    );
  }

  return logoElement;
}
