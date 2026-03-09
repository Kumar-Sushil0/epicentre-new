## Membership flow UI components

### `Dashboard` (`src/app/components/Dashboard.tsx`)

- **Purpose**: Main user dashboard shell; can preview the prototype screens via internal boolean flags and local state.
- **Preview toggles** (set inside `Dashboard`):
  - `SHOW_APPLICATION_RECEIVED: boolean` – when `true`, shows `ApplicationReceived` full-screen.
  - `SHOW_INVITE_CONFIRMED: boolean` – when `true`, shows `InviteConfirmed` full-screen.
  - `showWalletLowView: boolean` state – when `true`, shows `WalletLow` full-screen.
  - `showRenewalView: boolean` state – when `true`, shows `MembershipRenewal` full-screen.
- **Other behaviour**:
  - Contains the My Membership dashboard (stats, tabs).
  - Opens the **Top Up Wallet** modal.

---

### `MembershipRenewal` (`src/app/components/MembershipRenewal.tsx`)

- **Purpose**: Full-screen “Membership renewal due / Your 2026 membership expires soon” screen.
- **Layout**:
  - Centered badge: *Renewal Due*.
  - Heading + explanation copy.
  - `Membership Summary` card with rows:
    - Current membership – `2026 — Post-Exit Founders`
    - Expiry – `31 March 2027`
    - 2027 cohort – `To be announced`
    - Alignment review – `Initiated by D.D.`
  - `Back to My Membership →` button (handled externally by parent).

---

### `WalletLow` (`src/app/components/WalletLow.tsx`)

- **Types**: `WalletLowProps` from `WalletLow.types.ts`
  - `currentBalance: number | string`
  - `requiredForNextCycle: number | string`
  - `onTopUp?: () => void`
  - `onBack?: () => void`
- **Purpose**: Full-screen “Your wallet needs topping up” low-balance screen.
- **Layout**:
  - Badge: *Wallet Low*.
  - Heading: *Your wallet needs topping up.*
  - Copy about insufficient balance and membership still active.
  - Card with:
    - Current balance
    - Required for next cycle
  - CTAs:
    - `Top Up Wallet →` (calls `onTopUp`)
    - `← Back to membership` (calls `onBack`)

---

### `VisitConfirmed` (`src/app/components/VisitConfirmed.tsx`)

- **Types**: `VisitConfirmedProps` from `VisitConfirmed.types.ts`
  - `cycle: string`
  - `arrival: string`
  - `location: string`
  - `whatToBring: string`
  - `protocolReminder: string`
  - `onBack?: () => void`
- **Purpose**: Full-screen “Your visit is confirmed” screen.
- **Layout**:
  - Badge: *Visit Confirmed*.
  - Heading + copy: *Your visit is confirmed. Details have been sent to your email.*
  - `Visit Details` card with rows:
    - Cycle
    - Arrival
    - Location
    - What to bring
    - Protocol reminder
  - `Back to My Membership →` button (calls `onBack`).

---

### `ApplicationReceived` (`src/app/components/ApplicationReceived.tsx`)

- **Types**: `ApplicationReceivedProps` from `ApplicationReceived.types.ts`
  - `applicantEmail: string`
  - `subject: string`
  - `from: string`
  - `body: string`
  - `onSeeReviewDemo?: () => void`
- **Purpose**: Full-screen “Your application is with D.D.” screen (application received confirmation).
- **Layout**:
  - Top gold rule + badge: *Application Received*.
  - Heading and copy about personal review and 7‑day response time.
  - Card:
    - “Email confirmation sent to” + applicant email.
    - Subject / From lines.
    - Body text showing the confirmation email content.
  - `→ See D.D.'s review (demo)` text button (calls `onSeeReviewDemo` if provided).

---

### `InviteConfirmed` (`src/app/components/InviteConfirmed.tsx`)

- **Types**: `InviteConfirmedProps` from `InviteConfirmed.types.ts`
  - `from: string`
  - `subject: string`
  - `body: string`
  - `onReviewPayment?: () => void`
- **Purpose**: Full-screen “You have been invited” screen (invite / alignment confirmed).
- **Layout**:
  - Badge: *Invite Confirmed*.
  - Heading: *You have been invited.*
  - Copy about alignment with the estate protocol and 7‑day hold on the spot.
  - `Email received` card with:
    - From
    - Subject
    - Body text (invite email content).
  - `Review & Complete Payment →` button (calls `onReviewPayment`).

---

### How to preview these screens quickly

Inside `Dashboard`:

- Set `SHOW_APPLICATION_RECEIVED = true` to see `ApplicationReceived`.
- Set `SHOW_INVITE_CONFIRMED = true` to see `InviteConfirmed`.
- Set `showWalletLowView` initial state to `true` to see `WalletLow`.
- Set `showRenewalView` initial state to `true` to see `MembershipRenewal`.

Then visit `/dashboard` in the browser. Reset the flags back to `false` when done.

