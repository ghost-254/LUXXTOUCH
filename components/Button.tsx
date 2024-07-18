// Button.tsx
import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  href?: string;
}

const Button = ({ type, title, icon, variant, full, href }: ButtonProps) => {
  const buttonContent = (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'} hover:shadow-glowy hover:animate-glow transition-shadow duration-300`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
}

export default Button;
