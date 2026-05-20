const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Sobre mim", href: "#about" },
  { label: "Stacks", href: "#stacks" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

export function Taskbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      <nav className="topbar flex h-16 w-full items-center justify-center border-b border-[#EAB308]/10 px-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-md sm:px-8 lg:px-12">
        <div className="flex w-full max-w-[1520px] items-center justify-center gap-6 text-xs leading-none text-zinc-500 sm:gap-10">
          {navLinks.map((item) => (
            <a className="nav-link" href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
