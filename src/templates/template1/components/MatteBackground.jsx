import "./MatteBackground.css";

export default function MatteBackground({ backgroundColor }) {
  return (
    <div
      className="matte-background"
      style={{ backgroundColor: backgroundColor || "#05070d" }}
    />
  );
}
