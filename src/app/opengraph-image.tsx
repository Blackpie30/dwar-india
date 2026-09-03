import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #121110 0%, #1C1A17 50%, #2A2622 100%)",
          color: "#E4E2DC",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Top Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "16px",
                border: "2px solid #C9BFB2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
                fontWeight: "bold",
                background: "#181715",
              }}
            >
              D
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "28px", fontWeight: "bold", letterSpacing: "4px" }}>
                DWAR INDIA
              </span>
              <span style={{ fontSize: "14px", color: "#C9BFB2", letterSpacing: "2px", textTransform: "uppercase" }}>
                Rajasthan Stone Factory
              </span>
            </div>
          </div>

          <div
            style={{
              padding: "10px 24px",
              borderRadius: "50px",
              border: "1px solid rgba(201, 191, 178, 0.4)",
              background: "rgba(201, 191, 178, 0.1)",
              fontSize: "14px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#E4E2DC",
            }}
          >
            GST: 08UBJPS6187Q1ZX
          </div>
        </div>

        {/* Center Title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "900px" }}>
          <div style={{ fontSize: "56px", fontWeight: "bold", lineHeight: 1.15, color: "#FFFFFF" }}>
            Natural Stone Door Frames & Rajasthan Slabs
          </div>
          <div style={{ fontSize: "24px", color: "#C5BCB1", fontFamily: "sans-serif", fontWeight: 400 }}>
            100% Termite Proof • Zero Monsoon Swelling • 100+ Years Lifespan
          </div>
        </div>

        {/* Bottom Feature Tags */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(201, 191, 178, 0.2)",
            paddingTop: "30px",
            fontFamily: "sans-serif",
            fontSize: "16px",
            color: "#B9ADA2",
          }}
        >
          <span>• Kota Stone Flooring Slabs</span>
          <span>• Single & Double Paitam Chokhats</span>
          <span>• Bijoliya Heavy Roofing Pati</span>
          <span style={{ color: "#E4E2DC", fontWeight: "bold" }}>dwarindia.com</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
