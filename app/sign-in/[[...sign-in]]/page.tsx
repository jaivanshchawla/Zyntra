import { SignIn } from "@clerk/nextjs";

// Disable static generation for pages using Clerk components
export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <main className="flex items-center justify-center">
      <SignIn />
    </main>
  );
}
