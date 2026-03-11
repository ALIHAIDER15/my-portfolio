const Jimp = require('jimp');

async function cropEmblem() {
    console.log("Loading MOFA logo...");
    const image = await Jimp.read('./public/Mofa-Logo-Clean.png');

    // The original image is a wide rectangle because of the text at the bottom.
    // We want to crop out the bottom half (the text) and keep only the top emblem (swords & dhow).

    const width = image.getWidth();
    const height = image.getHeight();

    // We will crop from the top (y=20%) to about 50% of the height to cut off the text
    // We will also crop the extreme left and right wide empty spaces

    const cropX = width * 0.35; // Trim 35% from left
    const cropY = height * 0.20; // Start 20% down from the very top (removes empty sky)
    const cropWidth = width * 0.30; // Keep only the middle 30% (tight around emblem)
    const cropHeight = height * 0.25; // Keep only 25% height (tight around emblem)

    console.log("Cropping to emblem only...");
    image.crop(cropX, cropY, cropWidth, cropHeight);

    // Auto crop one more time just to ensure it's perfectly tight around the emblem
    image.autocrop();

    console.log("Saving new emblem...");
    await image.writeAsync('./public/Mofa-Emblem-Only.png');
    console.log("Done!");
}

cropEmblem().catch(console.error);
