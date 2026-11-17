import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "«Балажан» бөбекжай-балабақшасы — Қараой ауылы";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const unbounded = await readFile(join(process.cwd(), "assets/Unbounded-SemiBold.ttf"));

export default async function Image() {
  const chips = ["5 топ", "1,6–6 жас", "Күніне 4 рет ас", "Қазақ тілінде"];
  const colors = ["#fff4c9", "#e4f4fd", "#ffeadf", "#e5f6e4"];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "70px 80px",
          background: "linear-gradient(135deg, #fff4c9 0%, #fffaf1 55%, #e4f4fd 100%)",
          fontFamily: "Unbounded",
          color: "#2f2a3d",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", right: 70, top: 60, width: 150, height: 150, borderRadius: 999, background: "#ffd65c", display: "flex" }} />
        <div style={{ position: "absolute", right: 210, bottom: 70, width: 70, height: 70, borderRadius: 999, background: "#f28bb0", display: "flex" }} />
        <div style={{ position: "absolute", right: 110, bottom: 160, width: 44, height: 44, borderRadius: 999, background: "#8fd09c", display: "flex" }} />
        <div style={{ fontSize: 26, color: "#1f6ea6", display: "flex" }}>Қараой ауылындағы бөбекжай-балабақша</div>
        <div style={{ fontSize: 120, marginTop: 10, display: "flex" }}>Балажан</div>
        <div style={{ fontSize: 30, marginTop: 6, color: "#625b72", display: "flex" }}>ЖШС «Доскидс»</div>
        <div style={{ display: "flex", gap: 16, marginTop: 44 }}>
          {chips.map((c, i) => (
            <div key={c} style={{ display: "flex", padding: "14px 26px", borderRadius: 999, background: colors[i], fontSize: 24, border: "2px solid #ffffff" }}>
              {c}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Unbounded", data: unbounded, style: "normal", weight: 600 }] },
  );
}
