import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="p-3">
      <div className="w-[100%] flex justify-end">
        <UserButton />
        <ThemeToggle />
      </div>
      <h1>Home Page</h1>
    </div>
  );
}
