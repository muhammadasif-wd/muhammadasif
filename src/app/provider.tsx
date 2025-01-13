import Header from "@/components/header/header";
import { ThemeProvider } from "@/components/theme/theme-provider";

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Header />
      {children}
    </ThemeProvider>
  );
};

export default Provider;
