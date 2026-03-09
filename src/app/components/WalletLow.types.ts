export interface WalletLowProps {
  currentBalance: number | string;
  requiredForNextCycle: number | string;
  onTopUp?: () => void;
  onBack?: () => void;
}

