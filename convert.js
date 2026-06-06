const fs = require('fs');
const heicConvert = require('heic-convert');

(async () => {
  try {
    const inputBuffer = fs.readFileSync('public/sindoro.HEIC');
    const outputBuffer = await heicConvert({
      buffer: inputBuffer, // the HEIC file buffer
      format: 'JPEG',      // output format
      quality: 0.8         // the jpeg compression quality, between 0 and 1
    });
    fs.writeFileSync('public/sindoro.jpg', outputBuffer);
    console.log('Conversion successful!');
  } catch (error) {
    console.error('Error during conversion:', error);
  }
})();
