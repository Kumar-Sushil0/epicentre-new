export interface InviteConfirmedProps {
  from: string;
  subject: string;
  body: string;
  onReviewPayment?: () => void;
}

