import Document, { Html, Head, Main, NextScript } from "next";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        
        <body className="font-poppins">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
