import CompanionForm from "@/components/CompanionForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

// Disable static generation since layout uses ClerkProvider
export const dynamic = "force-dynamic";

const NewCompanion = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");
  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 flex items-center justify-center">
      <article className="w-full gap-4 flex flex-col mb-10">
        <h1>Companion Builder</h1>
        <CompanionForm />
      </article>
    </main>
  );
};

export default NewCompanion;
