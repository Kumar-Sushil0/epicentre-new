export interface ApplicationReceivedProps {
  applicantEmail: string;
  subject: string;
  from: string;
  body: string;
  onSeeReviewDemo?: () => void;
}

