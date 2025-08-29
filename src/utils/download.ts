export const downloadSVG = (elementId: string, fileName: string) => {
  const svg = document.getElementById(elementId);
  if (svg) {
    const svgData = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([svgData], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a") as HTMLAnchorElement;
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
};

export const downloadImage = async (
  elementId: string,
  fileName: string,
  type: "jpeg" | "png",
  padding: number = 10
) => {
  const svg = document.getElementById(elementId);
  if (svg) {
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const width = svg.clientWidth + padding * 2;
    const height = svg.clientHeight + padding * 2;
    canvas.width = width;
    canvas.height = height;

    const img = new Image();
    const url =
      "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgData);

    img.onload = () => {
      ctx?.drawImage(img, 0, 0);
      const mimeType = type === "png" ? "image/png" : "image/jpeg";
      canvas.toBlob((blob) => {
        if (blob) {
          const link = document.createElement("a") as HTMLAnchorElement;
          link.href = URL.createObjectURL(blob);
          link.download = fileName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        }
      }, mimeType);
    };

    img.src = url;
  }
};
