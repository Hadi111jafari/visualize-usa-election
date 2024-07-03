import React from "react";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>USA Election Map</h1>
        <iframe
          src="https://flo.uri.sh/visualisation/18601981/embed"
          title="Interactive or visual content"
          className="flourish-embed-iframe mt-4 w-1/2 h-96"
          frameborder="0"
          scrolling="no"
          sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
        ></iframe>
      </main>
    </>
  );
}
