import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
  title:
    "India’s Advanced Exam Preparation Site: examys.com | Online Course | Mock Test",
  content:
    "Competitive exam preparation with India’s best learning platform. Live class, mock test & previous year pdf in English & Hindi for SSC, RRB, SBI, IBPS, CTET and more Govt exams. Examys ai, Course journey, Examys inspire & more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
        />
        <meta
          name="keywords"
          content="Examys, examys.com, online coaching, online coaching app, best online exam preparation app, online exam preparation platform, best learning app, examys.in"
        />
        <link rel="icon" href="./favicon.ico" type="image/ico"></link>
        <meta property="og:url" content="https://examys.com/" />
        <meta property="og:site_name" content="Examys" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
