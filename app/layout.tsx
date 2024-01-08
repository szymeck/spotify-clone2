import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import SupabaseProvider from "@/providers/SupabaseProvider";

import ModalProvider from "@/providers/ModalProvider";
import UserProvider from "@/providers/UserProvider";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify-clone",
  description: "Listen to music",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider/>
      <Sidebar>
      {children}
      </Sidebar>
      </UserProvider>
      </SupabaseProvider>
      </body>
    </html>
  );
}
