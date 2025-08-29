import React from "react";
import { type QRStyleName, qrStyle } from "../types/qr-code";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

interface QRStyleSelectorProps {
  selectedStyle: QRStyleName;
  onSelectedStyle: React.Dispatch<React.SetStateAction<any>>;
}

export default function QRStyleSelector({
  selectedStyle,
  onSelectedStyle,
}: QRStyleSelectorProps) {
  return (
    <div className="mb-6 space-y-4">
      <div>
        <Label className="block text-sm font-medium text-gray-700 mb-3">
          QR Style
        </Label>
        <div className="flex flex-col gap-3">
          <RadioGroup defaultValue={selectedStyle} onChange={onSelectedStyle}>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="classic" id="classic" />
              <Label htmlFor="classic">Classic</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="rounded" id="rounded" />
              <Label htmlFor="rounded">Rounded</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="thin" id="thin" />
              <Label htmlFor="thin">Thin</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="smooth" id="smooth" />
              <Label htmlFor="smooth">Smooth</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="circle" id="circle" />
              <Label htmlFor="classic">Circle</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}
