import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: "linear-gradient(135deg, #1C1A17 0%, #121110 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#E4E2DC",
          borderRadius: "36px",
          border: "4px solid #C9BFB2",
          fontWeight: 900,
          fontFamily: "serif",
          boxShadow: "0 10px 30px rgba(0,0,0,0.8)",
        }}
      >
        D
      </div>
    ),
    {
      ...size,
    }
  );
}
