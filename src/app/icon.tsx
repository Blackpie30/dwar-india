import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "linear-gradient(135deg, #1C1A17 0%, #121110 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#E4E2DC",
          borderRadius: "8px",
          border: "1.5px solid #C9BFB2",
          fontWeight: 900,
          fontFamily: "serif",
          boxShadow: "0 2px 6px rgba(0,0,0,0.5)",
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
