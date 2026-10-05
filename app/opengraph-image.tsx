import { ImageResponse } from "next/og";
import { openGraphImage } from "@/lib/seo";

export const alt = openGraphImage.alt;
export const size = {
  width: openGraphImage.width,
  height: openGraphImage.height,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "56px 64px",
          backgroundColor: "#101010",
          color: "#F2F0E9",
          borderLeft: "16px solid #FF2442",
        }}
      >
        <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: 2 }}>
          ROCK EXPERIENCE
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: -4,
          }}
        >
          <span>VIVE ALGO</span>
          <span style={{ color: "#FF2442" }}>DIFERENTE.</span>
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#AAA69F",
            borderTop: "1px solid #55524F",
            paddingTop: 24,
          }}
        >
          Experiencias para conectar marcas, tecnología y personas.
        </div>
      </div>
    ),
    size,
  );
}
