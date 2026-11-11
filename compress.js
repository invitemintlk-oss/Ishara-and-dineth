import sharp from 'sharp';

sharp('public/Gemini_Generated_Image_j0d29j0d29j0d29j.jpg')
  .jpeg({ quality: 60 })
  .toFile('public/og-image.jpg')
  .then(() => console.log('Successfully compressed!'))
  .catch(err => console.error(err));
