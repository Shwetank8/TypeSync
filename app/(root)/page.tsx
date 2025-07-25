import AddDocBtn from "@/components/AddDocBtn";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {

  const clerkUser = await currentUser();
  if(!clerkUser) redirect('/sign-in');

  const documents = []
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center gap-5 sm:gap-10">
        <Header className="sticky left-0 top-0">
          <div className="flex items-center gap-2 lg:gap-4">
              <span className="text-white">Notification</span>
              <SignedIn>
                <UserButton/>
              </SignedIn>
          </div>
        </Header>

       {documents.length > 0 ? (
        <div>

        </div>
       ): (
        <div className="flex w-full max-w-[730px] flex-col items-center justify-center gap-5 rounded-lg bg-dark-200 px-10 py-8">
            <Image
              src = '/assets/icons/doc.svg'
              alt="Document"
              width={40}
              height={40}
              className="mx-auto"
            />
            <AddDocBtn
              userId = {clerkUser.id}
              email = {clerkUser.emailAddresses[0]?.emailAddress || ''}
            />
        </div>
       )}
    </main>
  );
}
