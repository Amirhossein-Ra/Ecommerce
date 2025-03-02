import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="p-3">
      <div className="w-[100%] flex justify-end">
        <ThemeToggle />
      </div>
      <div className="font-barlow">welcome</div>
      <Button variant="destructive">Click Here</Button>
    </div>
  );
}
