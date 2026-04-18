"use client";

import { useEffect, useState } from "react";
import { InviteModal as InviteModalCore } from "../daydesigner/components/InviteModal";

type Props = {
  open: boolean;
  onClose: () => void;
  cycleLabel?: string;
};

export function InviteModal({ open, onClose, cycleLabel = "The Silent Club" }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [modalStep, setModalStep] = useState<1 | 2 | 3>(1);
  const [modalCalY, setModalCalY] = useState(() => new Date().getFullYear());
  const [modalCalM, setModalCalM] = useState(() => new Date().getMonth());
  const [modalDate, setModalDate] = useState("");
  const [modalTime, setModalTime] = useState("");
  const [modalName, setModalName] = useState("");
  const [modalEmail, setModalEmail] = useState("");
  const [modalPhone, setModalPhone] = useState("");
  const [modalQ1, setModalQ1] = useState("");
  const [modalQ2, setModalQ2] = useState("");
  const [modalSubmitted, setModalSubmitted] = useState(false);

  useEffect(() => {
    if (!open) {
      setShowModal(false);
      return;
    }
    setModalSubmitted(false);
    setModalStep(1);
    const now = new Date();
    setModalCalY(now.getFullYear());
    setModalCalM(now.getMonth());
    setModalDate("");
    setModalTime("");
    setModalName("");
    setModalEmail("");
    setModalPhone("");
    setModalQ1("");
    setModalQ2("");
    setShowModal(true);
  }, [open]);

  useEffect(() => {
    if (!showModal) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showModal]);

  const setShowModalWrapped = (v: boolean) => {
    setShowModal(v);
    if (!v) onClose();
  };

  return (
    <>
      <InviteModalStyles />
      <InviteModalCore
        showModal={showModal}
        setShowModal={setShowModalWrapped}
        modalStep={modalStep}
        setModalStep={setModalStep}
        modalCalY={modalCalY}
        setModalCalY={setModalCalY}
        modalCalM={modalCalM}
        setModalCalM={setModalCalM}
        modalDate={modalDate}
        setModalDate={setModalDate}
        modalTime={modalTime}
        setModalTime={setModalTime}
        modalSubmitted={modalSubmitted}
        setModalSubmitted={setModalSubmitted}
        modalName={modalName}
        setModalName={setModalName}
        modalEmail={modalEmail}
        setModalEmail={setModalEmail}
        modalPhone={modalPhone}
        setModalPhone={setModalPhone}
        modalQ1={modalQ1}
        setModalQ1={setModalQ1}
        modalQ2={modalQ2}
        setModalQ2={setModalQ2}
        cycleLabel={cycleLabel}
      />
    </>
  );
}

function InviteModalStyles() {
  return (
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400;600&display=swap');
      :root {
        --bg: #0f0b08;
        --bg-2: #160f0a;
        --bg-3: #1c1410;
        --gold: #c5a065;
        --gold-dim: #8a6e42;
        --gold-pale: #e8d5b0;
        --text-2: #b09070;
        --text-3: #7a6048;
        --rule: #2a1f17;
        --rule-2: #3a2a1f;
        --serif: 'Cormorant', Georgia, serif;
        --sans: 'Jost', sans-serif;
      }
      .btn {
        background: var(--gold);
        color: var(--bg);
        font-size: 0.75rem;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        padding: 11px 22px;
        border: none;
        cursor: pointer;
        font-weight: 500;
      }
      .btn-g {
        background: none;
        color: var(--text-3);
        font-size: 0.75rem;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        padding: 11px 18px;
        border: 1px solid var(--rule-2);
        cursor: pointer;
      }
      .btn:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
      .btn-g:hover {
        color: var(--gold-pale);
        border-color: var(--gold-dim);
      }
      .tsc-invite-modal-overlay {
        position: fixed;
        inset: 0;
        background: rgba(15, 11, 8, 0.88);
        display: grid;
        place-items: center;
        padding: 16px;
        z-index: 9999;
      }
    `}</style>
  );
}
