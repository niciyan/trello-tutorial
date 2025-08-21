import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-full">
      <ClerkProvider>
        <Toaster />
        {children}
      </ClerkProvider>
    </section>
  );
}
