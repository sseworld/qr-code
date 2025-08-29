export interface QRCodeStyle {
  fgColor: string;
  bgColor: string;
  level: "L" | "M" | "Q" | "H";
}

export type QRStyleName = "classic" | "rounded" | "thin" | "smooth" | "circle";
export type QRStyle = {
  [K in QRStyleName]: {
    qrStyle: 'squares' | 'dots' | 'fluid';
    eyeRadius: number;
  };
};

export const presetStyles: QRCodeStyle[] = [
  { fgColor: "#000000", bgColor: "#ffffff", level: "H" },
  { fgColor: "#0088cc", bgColor: "#ffffff", level: "Q" },
  { fgColor: "#ff4444", bgColor: "#ffffff", level: "H" },
  { fgColor: "#4CAF50", bgColor: "#ffffff", level: "Q" },
  { fgColor: "#9C27B0", bgColor: "#ffffff", level: "H" },
];

export const qrStyle: QRStyle = {
  classic: { qrStyle: "squares", eyeRadius: 0 },
  rounded: { qrStyle: "squares", eyeRadius: 10 },
  thin: { qrStyle: "dots", eyeRadius: 0 },
  smooth: { qrStyle: "fluid", eyeRadius: 15 },
  circle: { qrStyle: "dots", eyeRadius: 50 },
};
