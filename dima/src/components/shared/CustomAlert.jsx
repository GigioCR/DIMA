import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";

const alertVariants = {
  error: {
    icon: AlertCircle,
    className: "border-red-200 bg-red-50 animate-in slide-in-from-top-2 duration-500",
    titleClassName: "text-red-800",
    descriptionClassName: "text-red-700",
    iconClassName: "h-5 w-5 text-red-500"
  },
  success: {
    icon: CheckCircle,
    className: "border-green-200 bg-green-50 animate-in slide-in-from-top-2 duration-500",
    titleClassName: "text-green-800",
    descriptionClassName: "text-green-700",
    iconClassName: "h-5 w-5 text-green-500"
  },
  warning: {
    icon: AlertTriangle,
    className: "border-yellow-200 bg-yellow-50 animate-in slide-in-from-top-2 duration-500",
    titleClassName: "text-yellow-800",
    descriptionClassName: "text-yellow-700",
    iconClassName: "h-5 w-5 text-yellow-500"
  },
  info: {
    icon: Info,
    className: "border-blue-200 bg-blue-50 animate-in slide-in-from-top-2 duration-500",
    titleClassName: "text-blue-800",
    descriptionClassName: "text-blue-700",
    iconClassName: "h-5 w-5 text-blue-500"
  }
};

export function CustomAlert({ 
  variant = "info", 
  title, 
  description, 
  items = [], 
  className = "",
  ...props 
}) {
  const config = alertVariants[variant];
  const IconComponent = config.icon;

  return (
    <Alert 
      variant={variant === "error" ? "destructive" : "default"}
      className={`${config.className} ${className}`}
      {...props}
    >
      <IconComponent className={config.iconClassName} />
      {title && (
        <AlertTitle className={config.titleClassName}>
          {title}
        </AlertTitle>
      )}
      <AlertDescription className={config.descriptionClassName}>
        {description}
        {items.length > 0 && (
          <ul className="space-y-1 mt-2">
            {items.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        )}
      </AlertDescription>
    </Alert>
  );
}
