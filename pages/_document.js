import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    static async getInitialProps (ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <Html lang="id">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />

                    {/* favicon */}
                    <link rel="icon" href="../static/favicon.ico" type="image/x-icon"></link>
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(
                            {
                                "@context": "https://schema.org",
                                "@type": "Organization",
                                "url": "https://www.dignite.studio",
                                "contactPoint": [
                                { "@type": "ContactPoint",
                                    "telephone" : "+62 813 1610 0044",
                                    "contactType": "customer service"
                                }
                                ]
                            }
                        ) }}
                    />;
                </body>
            </Html>
        )
    }
}


