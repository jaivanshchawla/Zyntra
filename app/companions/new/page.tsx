import CompanionForm from "@/components/CompanionForm";

// Disable static generation since layout uses ClerkProvider
export const dynamic = "force-dynamic";

const NewCompanion = () => {
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
