import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-extrabold text-blue-600">Home</h1>
      <div className="ml-4">
        <Button>Click me</Button>
      </div>
    </div>
  );
}
