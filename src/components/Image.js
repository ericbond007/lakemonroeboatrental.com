import React from 'react';

const Image = ({imgName, imgAlt, className, imgLink}) => (
  <div>
    <picture>
 <source
   className={className}
   media="(min-width: 900px)"
   srcSet={`img/${imgName}-lg_1x.webp 1x, img/${imgName}-lg_2x.webp 2x`}
   type="image/webp" />
 <source
   className={className}
   media="(min-width: 601px)"
   srcSet={`img/${imgName}-md_1x.webp 1x, img/${imgName}-md_2x.webp 2x`}
   type="image/webp" />
 <source
   className={className}
   srcSet={`img/${imgName}-sm_1x.webp 1x, img/${imgName}-sm_2x.webp 2x`}
   type="image/webp" />
 <img
   className={className}
   srcSet={`img/${imgName}-sm_1x.jpg 600w,
   img/${imgName}-md_1x.jpg 900w,
   img/${imgName}-lg_1x.jpg 1440w`}
   src={`img/${imgName}-lg_1x.jpg`}
   type="image/jpeg"
   alt={imgAlt} />
</picture>
</div>
);

export default Image;
