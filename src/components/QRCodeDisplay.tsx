import QRCode from "react-qrcode-logo";
import type { QRCodeStyle, QRStyleName } from "../types/qr-code";
import { qrStyle as qrStyleMap } from "../types/qr-code";

interface QRCodeDisplayProps {
  text: string;
  size: number;
  style: QRCodeStyle;
  qrStyle: QRStyleName
}

export default function QRCodeDisplay({
  text,
  size,
  style,
  qrStyle
}: Readonly<QRCodeDisplayProps>) {
  const selectedStyle = qrStyleMap[qrStyle] ?? qrStyleMap.classic;
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <QRCode
        id="qr-code" // Ensures your download function targets the correct element
        value={text}
        size={size}
        eyeRadius={selectedStyle.eyeRadius}
        qrStyle={selectedStyle.qrStyle}
        logoImage="/form.png"
        logoWidth={30}
        logoHeight={30}
        logoOpacity={1}
        removeQrCodeBehindLogo
        logoPadding={5}
        logoPaddingStyle="circle"
        ecLevel={style.level}
        fgColor={style.fgColor}
        bgColor={style.bgColor}
      />
    </div>
  );
}
