import { Button } from "@/ui/design-system/button/Button";
import { Typography } from "@/ui/design-system/typography/Typography";

export default function AboutPage() {
  return (
    <div className="flex-col mx-10 justify-around">
      <div className="my-6">
        <p className="text-4xl font-outfit font-light text-black tracking-widest mb-5">
          Strilherezh colors
        </p>
        <div className="flex gap-5">
          <div className="w-28 h-28 p-2 rounded-full border border-black flex items-center justify-center">
            <p>#FFFFFF</p>
          </div>
          <div className="w-28 h-28 p-2 rounded-full bg-gold flex items-center justify-center">
            <p>#E0AA3E</p>
          </div>
        </div>
      </div>
      <div className="my-6">
        <p className="text-4xl font-outfit font-light text-black tracking-widest mb-5">
          Skornenn colors colors
        </p>
        <div className="flex gap-5">
          <div className="w-28 h-28 p-2 rounded-full border border-black flex items-center justify-center">
            <p>#FFFFFF</p>
          </div>
          <div className="w-28 h-28 p-2 rounded-full bg-blue flex items-center justify-center ">
            <p>#003D75</p>
          </div>
          <div className="w-28 h-28 p-2 rounded-full bg-cyan flex items-center justify-center">
            <p>#33CEF1</p>
          </div>
        </div>
      </div>
      <div className="my-6">
        <p className="text-4xl font-outfit font-light text-black tracking-widest mb-5">
          Text colors
        </p>
        <div className="flex gap-5">
          <div className="w-28 h-28 p-2 rounded-full border border-black flex items-center justify-center">
            <p>#FFFFFF</p>
          </div>
          <div className="w-28 h-28 p-2 rounded-full bg-black flex items-center justify-center">
            <p>#505050</p>
          </div>
          <div className="w-28 h-28 p-2 rounded-full bg-gray flex items-center justify-center">
            <p>#AAAAAA</p>
          </div>
          <div className="w-28 h-28 p-2 rounded-full bg-lightgray flex items-center justify-center">
            <p>#E3E3E3</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <Typography variant="h1" font="outfit">
          H1 TITLE - Header banner title
        </Typography>
        <Typography variant="h2" font="outfit">
          H2 TITLE - banner title
        </Typography>
        <Typography variant="h3" font="outfit" className="my-2">
          H3 TITLE - Primary title
        </Typography>
        <Typography variant="h4" font="outfit">
          H4 TITLE - Secondary title
        </Typography>
        <Typography variant="p" font="quicksand" className="my-3">
          p - 16px Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Doloremque voluptas, consectetur voluptate cum aperiam saepe non dolor
          laborum. Minima culpa amet saepe minus commodi placeat molestiae.
          Accusantium molestias cupiditate fuga dolor quia, nihil, aperiam
          impedit tempora perspiciatis, cum ipsam beatae.
        </Typography>
        <Typography variant="p" font="quicksand" className="text-[14px] my-3">
          p - 14px Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Vitae omnis numquam nesciunt similique nulla ex aspernatur voluptatem
          atque quibusdam dolor, rem impedit pariatur deleniti culpa nisi natus
          molestias vel. Dolores optio cumque quis natus saepe quasi eum ipsam
          obcaecati nam provident repudiandae, inventore culpa, nulla
          accusantium eos quibusdam nisi rem!
        </Typography>
      </div>
      <div className="my-6">
        <p className="text-4xl font-outfit font-light text-black tracking-widest mb-5">
          Buttons
        </p>
        <div className="flex gap-5 bg-black p-6">
          <Button className="px-10 py-2 text-base">Primary button</Button>
          <Button className="px-10 py-2 text-base" variant="secondary">
            Secondary button
          </Button>
          <Button className="px-10 py-2 text-base" variant="tertiary">
            Tertiary button
          </Button>
        </div>
        <div className="flex gap-5 bg-black p-6">
          <Button className="px-10 py-2 text-base" skornenn>
            Primary button
          </Button>
          <Button className="px-10 py-2 text-base" variant="secondary" skornenn>
            Secondary button
          </Button>
          <Button className="px-10 py-2 text-base" variant="tertiary" skornenn>
            Tertiary button
          </Button>
        </div>
      </div>
    </div>
  );
}
