
import "./globals.css";
import {Inter} from "next/font/google"

const inter = Inter({
  subsets:['latin'],
  variable:"--font-inter"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className= {`flex justify-center items-center bg-[#D8E4D8]
          ${inter.variable}
           px-4 md:px-20 lg:px-35 py-8
          `}
      >
        {children}
      </body>
    </html>
  );
}
