
import { Button, ButtonProps } from "@/components/ui/button";
import { useSimpleAnalytics } from "@/hooks/useSimpleAnalytics";

interface SimpleTrackedButtonProps extends ButtonProps {
  ctaName: string;
}

const SimpleTrackedButton = ({ ctaName, onClick, children, ...props }: SimpleTrackedButtonProps) => {
  const { trackCTAClick } = useSimpleAnalytics();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    trackCTAClick(ctaName);
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

export default SimpleTrackedButton;
