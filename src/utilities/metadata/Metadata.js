import React from 'react';
import { Helmet } from 'react-helmet';

const MetaData = ({ title, url, imageSrc, description, imageWidth, imageHeight }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="fragment" content="!" />
      <meta property="og:title" data-react-helmet="true" content={title} />
      <meta name="description" data-react-helmet="true" content={description} />
      <meta property="og:description" data-react-helmet="true" content={description} />
      <meta property="og:url" data-react-helmet="true" content={url} />
      <meta property="og:image" data-react-helmet="true" content={imageSrc} />
      <meta name="twitter:image" data-react-helmet="true" content={imageSrc} />
      {imageWidth && <meta property="og:image:width" content={imageWidth} />}
      {imageHeight && <meta property="og:image:height" content={imageHeight} />}
    </Helmet>
  );
};

export default MetaData;
