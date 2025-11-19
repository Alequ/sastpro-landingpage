import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Are | S.A.S Transition - Turnkey Engineering Specialists | S.A.S Transition",
  description:
    "Global electrical and mechanical specialists — delivering safe, efficient turnkey engineering from design and commissioning to maintenance.",
  keywords: [
    "engineering company",
    "electrical engineering",
    "mechanical engineering",
    "safety solutions",
    "SASTpro",
    "critical infrastructure",
    "engineering team",
  ],
  openGraph: {
    title: "Who We Are | S.A.S Transition - Turnkey Engineering Specialists | S.A.S Transition",
    description:
      "Global electrical and mechanical specialists — delivering safe, efficient turnkey engineering from design and commissioning to maintenance.",
    type: "website",
    url: "https://sastransition.com/who-we-are",
    images: [
      {
        url: "/who-we-are_2/WhoWeAreHeader.webp",
        width: 1200,
        height: 630,
        alt: "S.A.S Transition Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Who We Are | S.A.S Transition - Turnkey Engineering Specialists",
    description:
      "Global electrical and mechanical specialists — delivering safe, efficient turnkey engineering from design and commissioning to maintenance.",
    images: ["/who-we-are_2/WhoWeAreHeader.webp"],
  },
};

export default function WhoWeAreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
