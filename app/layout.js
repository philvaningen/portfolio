import "./globals.css";
import Nav from "@/components/Nav";
import { profile } from "@/lib/content";

export const metadata = {
  title: { default: "Phil Van Ingen · Product Manager & Builder", template: "%s · Phil Van Ingen" },
  description: profile.tagline + " Case studies from Maxio: segment-level pricing, wallets and prepaid billing, and AI workflows.",
  openGraph: {
    title: "Phil Van Ingen · Product Manager & Builder",
    description: profile.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>
        <div className="wrap">
          <Nav />
          <main>{children}</main>
          <footer>
            <span>{profile.name} · {profile.location}</span>
            <span>
              <a href={profile.linkedin}>LinkedIn</a> · <a href={profile.github}>GitHub</a> · {profile.email}
            </span>
          </footer>
        </div>
      </body>
    </html>
  );
}
