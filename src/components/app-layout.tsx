interface LeftBarLink {
  id: string,
  text: string;
}

const leftBarLinks: LeftBarLink[] = [
  {
    id: "l1",
    text: "Link 1",
  },
  {
    id: "l2",
    text: "Link 2",
  },
  {
    id: "l3",
    text: "Link 3",
  },
];

const Header = () => {
  return (
    <header className="h-20 bg-slate-800 flex items-center fixed z-10 top-0 w-full inset-x-0">
      <div className="w-full flex justify-between px-2">
        <h1 className="inline-block">App</h1>
      </div>
    </header>
  );
};

const LeftBar = () => {
  return (
    <div className="h-full w-64 bg-gray-800 fixed top-0 flex flex-col">
      <div className="mt-20 overflow-auto scrollbar-thin">
        <p className="font-medium uppercase text-xs mb-3 sticky top-0 px-2 shadow-md bg-gray-900 py-5">
          Perfect scrollbars
        </p>
        <div className="px-2">
          {leftBarLinks.map(link => (
            <div key={link.id} className="mb-2.5 h-[800px] border">
              <a href="/" className="flex items-center space-x-2">
                <span>
                  {link.text}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MainContent = () => {
  return (
    <main className="h-full pl-[16rem] grid grid-cols-8">
      <div
        className="h-full bg-gradient-to-tr from-teal-500/80 to-teal-800 pt-20 col-span-1 hidden lg:block"
      ></div>
      <div className="pt-20 col-span-full lg:col-span-6 bg-slate-500/60 px-2">
        <p>Main content</p>
        <p className="h-[160rem]"></p>
      </div>
      <div
        className="h-full bg-gradient-to-tr from-teal-500/80 to-teal-800 pt-20 col-span-1 hidden lg:block"
      ></div>
    </main>
  );
};

export const AppLayout = () => {
  return (
    <div>
      <Header />
      <LeftBar />
      <MainContent />
    </div>
  );
};
