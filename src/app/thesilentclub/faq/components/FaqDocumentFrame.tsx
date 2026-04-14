type Props = {
  html: string;
};

export function FaqDocumentFrame({ html }: Props) {
  return (
    <iframe
      title="The Silent Club FAQ"
      srcDoc={html}
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
        display: "block",
      }}
    />
  );
}
