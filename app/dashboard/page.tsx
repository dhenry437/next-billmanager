import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();

  // Protected route (middleware is not working with Prisma ATM)
  if (!session?.user)
    redirect(`${process.env.NEXT_PUBLIC_SIGNIN_PATH}?callbackUrl=/dashboard`);

  return (
    <div className="px-6 pt-20 lg:px-8">
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
