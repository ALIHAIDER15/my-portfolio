const Jimp = require('jimp');

async function tightCrop() {
    console.log("Loading transparent full GCO logo...");
    const image = await Jimp.read('./public/GCO-logo2.png');

    const width = image.getWidth();
    const height = image.getHeight();

    let top = height, bottom = 0, left = width, right = 0;

    // Find actual visible bounds
    image.scan(0, 0, width, height, function (x, y, idx) {
        const alpha = this.bitmap.data[idx + 3];
        // if pixel is NOT fully transparent
        if (alpha > 0) {
            if (y < top) top = y;
            if (y > bottom) bottom = y;
            if (x < left) left = x;
            if (x > right) right = x;
        }
    });

    console.log(`Visible bounds found: Top: ${top}, Bottom: ${bottom}, Left: ${left}, Right: ${right}`);

    // Add a very small 5px padding
    const padding = 5;
    const cropX = Math.max(0, left - padding);
    const cropY = Math.max(0, top - padding);
    const cropWidth = Math.min(width - cropX, right - left + (padding * 2));
    const cropHeight = Math.min(height - cropY, bottom - top + (padding * 2));

    console.log(`Cropping to: x=${cropX}, y=${cropY}, w=${cropWidth}, h=${cropHeight}`);

    image.crop(cropX, cropY, cropWidth, cropHeight);

    // Save as v3 to bypass aggressive Next.js cache
    await image.writeAsync('./public/GCO-Logo-V3.png');
    console.log("V3 Saved successfully!");
}

tightCrop().catch(console.error);
