import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs';


export function TopNav() {
  return (
    <nav className="flex items-center justify-between border-b flex-wrap p-6 text-xl font-semibold"> 
    <div>T3 Gallery</div>

    <div>
        <SignedOut>
            <SignInButton />
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
    </div>
    </nav>
  );
}