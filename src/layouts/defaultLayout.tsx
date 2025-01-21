import { Header } from "@/components/header/header";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="pt-[80px]">
        <Outlet />
      </div>
    </div>
  );
}
