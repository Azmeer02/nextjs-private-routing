"use client";

import "./globals.css";
import { ApolloProvider } from "@apollo/client";
import { getApolloClient } from "@/lib/client";

export default function RootLayout({ children }) {
  const client = getApolloClient();
  return (
    <html lang="en">
      <body>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </body>
    </html>
  );
}
