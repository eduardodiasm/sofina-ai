
import { Button, ButtonProps } from "@/components/ui/button";
import { useSimpleAnalytics } from "@/hooks/useSimpleAnalytics";

interface TrackedButtonProps extends ButtonProps {
  ctaName: string;
}

const TrackedButton = ({ ctaName, onClick, children, ...props }: TrackedButtonProps) => {
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

export default TrackedButton;
