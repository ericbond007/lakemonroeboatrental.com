import React from 'react';
import Helmet from 'react-helmet';

const seoImageURL = `https://lakemonroeboatrental.com/img/lmbrLogo.png`;

const getMetaTags = ({
  title, description, url,  published, updated, category, tags 
}) => {
  const metaTags = [
    { itemprop: 'name', content: title },
    { name: 'title', content: title },
    { name: 'description', content: description },
    { itemprop: 'description', content: description },
    { itemprop: 'image', content: seoImageURL },
    { name: 'description', content: description },
    { name: 'og:title', content: title },
    { name: 'og:url', content: url },
    { name: 'og:description', content: description },
    { name: 'og:type', content: 'website' },
    { name: 'og:site_name', content: 'Lake Monroe Boat Rental' },
  ];

  if (published) metaTags.push({ name: 'article:published_time', content: published });
  if (updated) metaTags.push({ name: 'article:modified_time', content: updated });
  if (category) metaTags.push({ name: 'article:section', content: category });
  if (tags) metaTags.push({ name: 'article:tag', content: tags });
  if (!description) metaTags.push ({ name: 'description', content: 'Lake Monroe Boat Rental' });

    return metaTags;
};

const SEO = ({
  title, description, path
}) => (
  <Helmet
    htmlAttributes= {{
      lang: `en`,
      itemscope: undefined,
      itemtype: `http://schema.org/LocalBusiness`,
    }}
    title={ title }
    description={ description }
    link={[
      { rel: 'canonical', href: `https://lakemonroeboatrental.com${path}` },
    ]}
    meta={getMetaTags({
      title,
      description,
      url: `https://lakemonroeboatrental.com${path}`
    })}
  />
);

export default SEO;

