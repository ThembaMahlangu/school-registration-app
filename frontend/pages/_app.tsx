import PageLayout from "@/components/layout/PageLayout";
import { AppProvider } from "@/context/app.context";
import { UIProvider } from "@/context/ui.context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <UIProvider>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </UIProvider>
    </AppProvider>
  );
}
