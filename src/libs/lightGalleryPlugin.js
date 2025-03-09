import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

document.addEventListener('DOMContentLoaded', () => {
  lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgThumbnail, lgZoom],
    speed: 500,
    download: true,
    getCaptionFromTitleOrAlt: false
  });

  // lightGallery(document.getElementById('shopFeatured'), {
  //   plugins: [lgThumbnail, lgZoom],
  //   speed: 500,
  // });
});