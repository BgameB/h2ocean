// import Image from "next/image";
import Quest from "@/ui/components/quest/Quest";
import { Button } from "@/ui/design-system/button/Button";

export default function Home() {
  return (
    <div className="flex">
      <nav>
        <Button>DuaoDingo</Button>
        <Quest current={10} max={15} text="&aa" />
      </nav>
    </div>
  );
}
