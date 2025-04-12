import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, title = 'SonicAI - AI音乐工具聚合平台' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="发现最前沿的AI音乐创作工具，提升您的音乐制作效率和创造力" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="SonicAI - AI音乐工具聚合平台" />
        <meta property="og:description" content="发现最前沿的AI音乐创作工具，提升您的音乐制作效率和创造力" />
        <meta property="og:image" content="https://sonicai.com/images/og-image.jpg" />
        <meta property="og:url" content="https://sonicai.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
} 