import logo from "@/assets/logo/logo.png";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="absolute top-0 left-0 w-full bg-transparent z-10 pt-2">
      <nav className="flex items-center justify-around">
        <div>
          <img src={logo} alt="" className="w-[4.5vw]" />
        </div>
        <div className="flex items-center gap-20">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Pesquisar..."
              className="w-full px-12 py-2 border border-gray-300 rounded-lg bg-black placeholder:text-white"
            />
          </div>
          <ul className="flex items-center gap-12 text-white">
            <li className="cursor-pointer">Categorias</li>
            <li className="cursor-pointer">Lançamentos</li>
            <li className="cursor-pointer">Séries</li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <Button variant={"ghost"} className="text-white">Entrar</Button>
          <Button>Criar conta</Button>
        </div>
      </nav>
    </header>
  );
}

