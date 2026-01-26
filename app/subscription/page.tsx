import { PricingTable } from "@clerk/nextjs";

// Disable static generation for pages using Clerk components
export const dynamic = "force-dynamic";

const Subscription = () => {
  return (
    <div>
      <PricingTable />
    </div>
  );
};

export default Subscription;
