import { Header } from "@/components/header/header";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="pt-[80px] bg-zinc-800 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}
