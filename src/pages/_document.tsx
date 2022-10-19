import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <>
      <Html lang='en'>
        <Head>
          <meta charSet='UTF-8' />
          <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
          <link rel='manifest' href='/favicons/site.webmanifest' />
          <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#5bbad5' />
          <link rel='shortcut icon' href='/favicons/favicon.ico' />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='msapplication-config' content='/favicons/browserconfig.xml' />
          <meta name='theme-color' content='#ffffff' />
          <meta
            name='description'
            content='Third generation family farm serving the Baldwin County area with high-quality Wagyu beef. From our farm, to your table.'
          />
          <meta name='keywords' content='Baldwin County, Alabama, Beef, Farm, Wagyu, Angus, Family Farm' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
          <link
            href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='bg-[#f5f4ef]'>
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  );
}
