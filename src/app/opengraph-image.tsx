import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const alt = `${SITE.name} — ${SITE.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          color: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          padding: 80,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top row: mark + url */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 8,
                background: "#0a0a0a",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                fontWeight: 800,
                letterSpacing: "-0.04em",
              }}
            >
              D
            </div>
            <span style={{ display: "flex", fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em" }}>
              {SITE.name}
            </span>
          </div>
          <span
            style={{
              display: "flex",
              fontSize: 16,
              color: "#6b7280",
              fontFamily: "monospace",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            {SITE.url.replace(/^https?:\/\//, "")}
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <span
            style={{
              display: "flex",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              color: "#4f46e5",
            }}
          >
            Full-Stack Developer · Open to hire
          </span>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 86,
              fontWeight: 800,
              lineHeight: 0.98,
              letterSpacing: -3,
            }}
          >
            <span style={{ display: "flex" }}>I build production</span>
            <span style={{ display: "flex" }}>
              web platforms,&nbsp;
              <span style={{ color: "#6b7280" }}>end-to-end.</span>
            </span>
          </div>

          <span
            style={{
              display: "flex",
              fontSize: 22,
              color: "#404040",
              maxWidth: 900,
            }}
          >
            5 years · 24 production systems · 4 OSS libraries · 50+ engineers mentored.
          </span>
        </div>

        {/* Accent stripe */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 8,
            background: "#4f46e5",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
