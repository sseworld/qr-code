import type React from "react";
import type { QRCodeStyle, QRStyleName } from "../types/qr-code";
import ColorPicker from "./ColorPicker";
import { Label } from "./ui/label";

interface StyleSelectorProps {
  styles: QRCodeStyle[];
  selectedStyle: QRCodeStyle;
  onStyleSelect: (style: QRCodeStyle) => void;
  onCustomStyleChange: (style: Partial<QRCodeStyle>) => void;
  qrStyle: QRStyleName;
  onQRStyle: React.Dispatch<React.SetStateAction<any>>;
}

export default function StyleSelector({
  styles,
  selectedStyle,
  onStyleSelect,
  onCustomStyleChange,
}: StyleSelectorProps) {
  return (
    <div className="mb-6 space-y-4">
      <div>
        <Label className="block text-sm font-medium text-gray-700 mb-2">
          Preset Styles
        </Label>
        <div className="flex flex-wrap gap-3">
          {styles.map((style, index) => (
            <button
              key={index}
              onClick={() => onStyleSelect(style)}
              className={`p-2 rounded-md border transition-all ${
                style.fgColor === selectedStyle.fgColor &&
                style.bgColor === selectedStyle.bgColor
                  ? "border-blue-500 ring-2 ring-blue-200"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div
                className="w-8 h-8 rounded"
                style={{ backgroundColor: style.fgColor }}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t">
        <Label className="block text-sm font-medium text-gray-700 mb-3">
          Custom Colors
        </Label>
        <div className="space-y-3">
          <ColorPicker
            label="Foreground"
            color={selectedStyle.fgColor}
            onChange={(color) => onCustomStyleChange({ fgColor: color })}
          />
          <ColorPicker
            label="Background"
            color={selectedStyle.bgColor}
            onChange={(color) => onCustomStyleChange({ bgColor: color })}
          />
        </div>
      </div>

      <div className="pt-4 border-t">
        <Label className="block text-sm font-medium text-gray-700 mb-3">
          Error Correction Level
        </Label>
        <select
          value={selectedStyle.level}
          onChange={(e) =>
            onCustomStyleChange({
              level: e.target.value as QRCodeStyle["level"],
            })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="L">Low (7%)</option>
          <option value="M">Medium (15%)</option>
          <option value="Q">Quartile (25%)</option>
          <option value="H">High (30%)</option>
        </select>
        {/* <Select
          value={selectedStyle.level}
          onValueChange={(value) =>
            onCustomStyleChange({ level: value as QRCodeStyle["level"] })
          }
        >
          <SelectTrigger className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
            <SelectValue placeholder="Select level" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Level</SelectLabel>
              <SelectItem value="L">Low (7%)</SelectItem>
              <SelectItem value="M">Medium (15%)</SelectItem>
              <SelectItem value="Q">Quartile (25%)</SelectItem>
              <SelectItem value="H">High (30%)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select> */}
      </div>
    </div>
  );
}
