export const imageToBase64 = (blob : Blob, qualityPercentage : number = 30, imageWidth : number = 1920) : Promise<string> => {
  const sourceReader = new FileReader();
  sourceReader.readAsDataURL(blob);

  return new Promise((resolve, reject) => {
    sourceReader.onerror = reject;
    sourceReader.onload = _ => {
      const img = new Image();
      img.src = sourceReader.result as string;
      img.onerror = reject;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const width = Math.min(imageWidth, img.width);
        const scaleFactor = width / img.width;
        canvas.width = width;
        canvas.height = img.height * scaleFactor;

        const ctx = canvas.getContext('2d')!!;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx.canvas.toBlob((blob) => {
          const compressedReader = new FileReader();
          compressedReader.onerror = reject;
          compressedReader.readAsDataURL(blob as Blob);
          compressedReader.onloadend = () => resolve(compressedReader.result as string);
        }, 'image/jpeg', 10 / qualityPercentage);
      };
    };
  });
};
