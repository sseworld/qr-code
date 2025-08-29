import { Label } from "./ui/label";
import { Slider } from "./ui/slider";

interface SizeSelectorProps {
  size: number[];
  onSizeChange: (size: number[]) => void;
}

export default function SizeSelector({
  size,
  onSizeChange,
}: SizeSelectorProps) {
  return (
    <div className="mb-6">
      <Label
        htmlFor="root-slider"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        QR Code Size
      </Label>
      <Slider
        id="root-slider"
        min={200}
        max={512}
        value={size}
        step={1}
        className="w-full cursor-pointer"
        onValueChange={(value) => onSizeChange(value)}
      />
      <div className="text-sm text-gray-500 mt-1">{size}px</div>
    </div>
  );
}
