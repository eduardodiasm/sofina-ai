
import { Button, ButtonProps } from "@/components/ui/button";
import { useAnalytics } from "@/hooks/useAnalytics";

interface TrackedButtonProps extends ButtonProps {
  ctaName: string;
  location: string;
}

const TrackedButton = ({ ctaName, location, onClick, children, ...props }: TrackedButtonProps) => {
  const { trackCTAClick } = useAnalytics();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    trackCTAClick(ctaName, location);
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  );
};

export default TrackedButton;
