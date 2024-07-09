
// export const experimental_ppr = true;
import FoodieLogo from "@/app/ui/foodie-logo";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <div className=" bg-green-100 flex h-screen w-screen flex-col md:flex-row md:overflow-hidden items-center md:justify-center">
          <div className=" h-full md:h-[80%] w-screen md:w-[30%] bg-black md:rounded-bl-2xl md:rounded-tl-2xl">
          {children}
          </div>
          <div className=" items-center h-[80%] hidden md:block md:w-[25%]">
            <FoodieLogo />
          </div>
      </div>
  );
}