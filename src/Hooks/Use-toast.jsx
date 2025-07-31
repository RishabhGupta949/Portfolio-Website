import { toast as sonnerToast } from "sonner";

// Simple wrapper around the toast functionality
export const useToast = () => {
  const toast = ({ title, description, variant = "default" }) => {
    if (variant === "destructive") {
      sonnerToast.error(title, {
        description: description,
      });
    } else {
      sonnerToast.success(title, {
        description: description,
      });
    }
  };

  return { toast };
};