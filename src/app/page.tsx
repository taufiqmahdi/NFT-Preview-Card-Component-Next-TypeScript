import Image from "next/image";
import Attribution from "./components/Attribution";
import EthereumIcon from "./components/EthereumIcon";
import ClockIcon from "./components/ClockIcon";
import ViewIcon from "./components/ViewIcon";

export default function Home() {
  return (
    <main className="flex min-w-screen min-h-screen flex-col items-center justify-center p-6 bg-neutral-very-dark-blue-main md:shadow-2xl shadow-neutral-very-dark-blue-card">
      <div className="p-6 bg-neutral-very-dark-blue-card rounded-xl flex flex-col gap-4 md:w-96">
        <div className="relative flex group rounded-lg">
          <Image className="rounded-lg w-full object-contain md:hidden" src="/image-equilibrium.jpg" width={200} height={250} alt="Image of Equilibrium" />
          <Image className="rounded-lg w-full object-contain hidden md:block" src="/image-equilibrium.jpg" width={150} height={200} alt="Image of Equilibrium" />
          <div className="absolute rounded-lg hidden group-hover:block group-hover:cursor-pointer bg-primary-cyan bg-opacity-40 w-full h-full"></div>
          <ViewIcon />
        </div>
        <a href="" className="text-neutral-white text-2xl font-medium hover:text-primary-cyan">Equilibrium #3429</a>
        <div className="text-primary-soft-blue text-base font-light md:text-xl">Our Equilibrium collection promotes balance and calm.</div>
        <div className="flex gap-4 justify-between border-b border-neutral-very-dark-blue-line pb-4">
          <div className="text-primary-cyan text-lg font-medium flex gap-2 items-center">
              <EthereumIcon />
              0.041 ETH
            </div>
          <div className="text-primary-soft-blue text-base font-medium flex gap-2 items-center">
              <ClockIcon />
              3 days left
            </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="border-neutral-white border rounded-full">
            <Image className="rounded-lg w-full object-contain" src="/image-avatar.png" width={32} height={32} alt="Image of Jules Wyvern" />
          </div>
          <div className="text-primary-soft-blue font-light md:text-lg">Creation of <a href="" className="text-neutral-white font-normal hover:text-primary-cyan">Jules Wyvern</a></div>
        </div>
      </div>
      <Attribution />
    </main>
  )
}
