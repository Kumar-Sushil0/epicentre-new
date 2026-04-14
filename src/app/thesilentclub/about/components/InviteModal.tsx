type Props = {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
};

export function InviteModal({ openModal, setOpenModal }: Props) {
  return (
    <div
      className={`modal ${openModal ? "show" : ""}`}
      onClick={(e) => e.currentTarget === e.target && setOpenModal(false)}
    >
      <div className="modal-box">
        <button className="modal-x" onClick={() => setOpenModal(false)}>
          ×
        </button>
        <div
          style={{
            fontSize: ".6rem",
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: "#7a6048",
            marginBottom: 12,
          }}
        >
          Request Invite
        </div>
        <div style={{ fontFamily: "var(--serif)", fontSize: "1.7rem", marginBottom: 6 }}>
          Two questions.
          <br />
          No pitch.
        </div>
        <div style={{ fontSize: ".82rem", color: "#7a6048", marginBottom: 22 }}>
          We respond within 72 hours.
        </div>
        <label style={{ display: "block", marginBottom: 13 }}>
          <span
            style={{
              display: "block",
              marginBottom: 5,
              fontSize: ".56rem",
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "#7a6048",
            }}
          >
            Your name
          </span>
          <input
            type="text"
            placeholder="Full name"
            style={{
              width: "100%",
              background: "#1c1410",
              border: "1px solid #2a1f17",
              padding: "10px 12px",
              color: "#e8d5b0",
            }}
          />
        </label>
        <label style={{ display: "block", marginBottom: 13 }}>
          <span
            style={{
              display: "block",
              marginBottom: 5,
              fontSize: ".56rem",
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "#7a6048",
            }}
          >
            Your email
          </span>
          <input
            type="email"
            placeholder="email@example.com"
            style={{
              width: "100%",
              background: "#1c1410",
              border: "1px solid #2a1f17",
              padding: "10px 12px",
              color: "#e8d5b0",
            }}
          />
        </label>
        <label style={{ display: "block", marginBottom: 13 }}>
          <span
            style={{
              display: "block",
              marginBottom: 5,
              fontSize: ".56rem",
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "#7a6048",
            }}
          >
            What do you do, and what kind of quiet do you need?
          </span>
          <textarea
            rows={3}
            style={{
              width: "100%",
              background: "#1c1410",
              border: "1px solid #2a1f17",
              padding: "10px 12px",
              color: "#e8d5b0",
            }}
          />
        </label>
        <label style={{ display: "block", marginBottom: 13 }}>
          <span
            style={{
              display: "block",
              marginBottom: 5,
              fontSize: ".56rem",
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "#7a6048",
            }}
          >
            Describe the last time you were truly alone with a thought.
          </span>
          <textarea
            rows={3}
            style={{
              width: "100%",
              background: "#1c1410",
              border: "1px solid #2a1f17",
              padding: "10px 12px",
              color: "#e8d5b0",
            }}
          />
        </label>
        <button
          style={{
            width: "100%",
            background: "#c5a065",
            color: "#0f0b08",
            fontSize: ".62rem",
            letterSpacing: ".18em",
            textTransform: "uppercase",
            padding: 12,
            border: 0,
          }}
        >
          Submit →
        </button>
      </div>
    </div>
  );
}
