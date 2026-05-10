import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: SITE.name,
            alternateName: SITE.handle,
            jobTitle: SITE.title,
            url: SITE.url,
            email: SITE.email,
            telephone: SITE.phone,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Gwalior",
              addressCountry: "IN",
            },
            sameAs: [SITE.github, SITE.linkedin],
          }),
        }}
      />
      <Navbar />
      <main className="min-h-dvh pt-24">{children}</main>
      <Footer />
    </>
  );
}
