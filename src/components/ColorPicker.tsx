// import { ColorPickerAlpha, ColorPickerEyeDropper, ColorPickerFormat, ColorPickerHue, ColorPicker as ColorPickerMain, ColorPickerOutput, ColorPickerSelection } from "./ui/color-picker";

interface ColorPickerProps {
  label: string;
  color: string;
  onChange: (color: string) => void;
}

export default function ColorPicker({
  label,
  color,
  onChange,
}: ColorPickerProps) {
  return (
    <div className="flex items-center gap-3">
      <label className="text-sm font-medium text-gray-700 min-w-24">
        {label}
      </label>
      <div className="flex items-center gap-2">
        <input
          type="color"
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className="w-10 h-10 p-1 rounded cursor-pointer"
        />
        <input
          type="text"
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className="w-24 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="#000000"
        />
        {/* <Color /> */}
      </div>
    </div>
  );
}

// const Color = () => (
//   <ColorPickerMain>
//     <ColorPickerSelection />
//     <div className="flex items-center gap-4">
//       <ColorPickerEyeDropper />
//       <div className="grid w-full gap-1">
//         <ColorPickerHue />
//         <ColorPickerAlpha />
//       </div>
//     </div>
//     <div className="flex items-center gap-2">
//       <ColorPickerOutput />
//       <ColorPickerFormat />
//     </div>
//   </ColorPickerMain>
// )