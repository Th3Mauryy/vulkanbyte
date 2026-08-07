import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Vulkanbyte — Páginas web para negocios de Colima"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#14161A",
          padding: "90px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", marginBottom: 44 }}>
          <div style={{ width: 18, height: 18, borderRadius: 4, backgroundColor: "#B8401F", marginRight: 18 }} />
          <div style={{ display: "flex", color: "#8A9099", fontSize: 28, letterSpacing: 4 }}>VULKANBYTE</div>
        </div>
        <div
          style={{
            display: "flex",
            color: "#FFFFFF",
            fontSize: 66,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 880,
          }}
        >
          Páginas web para negocios de Colima
        </div>
        <div style={{ display: "flex", color: "#3F6F52", fontSize: 32, marginTop: 40 }}>
          Desde $7,500 + IVA · Precio fijo, sin sorpresas
        </div>
      </div>
    ),
    { ...size },
  )
}
