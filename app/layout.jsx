export const metadata = {
  title: "Matemática A — Plataforma de Estudo",
  description: "Prepara o Exame 635 de Matemática A, do zero, ao teu ritmo.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
        <meta name="theme-color" content="#0f1419" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#0f1419", color: "#e8edf2", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
