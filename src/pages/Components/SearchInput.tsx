import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="relative w-full">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Search className="w-4 h-4 text-gray-400" />
      </span>
      <Input
        type="text"
        placeholder="Consultar"
        className="pl-10 w-full h-10-"
      />
    </div>
  );
}
