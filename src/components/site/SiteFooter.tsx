import { footerText } from "@/lib/content/home";

const SiteFooter = () => (
  <footer className="border-t border-line-border">
    <div className="flex items-center justify-between px-5 py-6 md:px-8 lg:px-[72px]">
      <span className="font-mono text-[10px] tracking-[0.2em] text-meta md:text-[10.5px]">
        {footerText}
      </span>
      <div aria-hidden="true" className="flex gap-1.5">
        <span className="h-[5px] w-[26px] bg-pink md:w-[34px]" />
        <span className="h-[5px] w-[26px] bg-ochre md:w-[34px]" />
        <span className="h-[5px] w-[26px] bg-blue md:w-[34px]" />
      </div>
    </div>
  </footer>
);

export default SiteFooter;
