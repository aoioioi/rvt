export const BentoGrid = () => {
  return (
    <div className="bg-gray-700/50 py-24">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl">
        <p className="mx-auto mt-2 max-w-lg text-center text-2xl font-semibold text-gray-400">
          Bento Grid Section
        </p>
        <p className="text-center text-xs text-gray-500">Minimally Styled</p>
        <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          <div className="lg:row-span-2">
            <div className="flex flex-col rounded bg-white h-full">
              <div className="px-6 pt-6 pb-3 sm:p-8 sm:pb-0">
                <p className="text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Title
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, reprehenderit!
                </p>
              </div>
              <div className="px-3 mt-auto w-full">
                <div className="h-[25rem] max-w-[15rem] mx-auto bg-fuchsia-900/50"></div>
              </div>
            </div>
          </div>
          <div className="max-lg:row-start-1">
            <div className="flex h-full flex-col rounded bg-white">
              <div className="p-6 sm:p-8">
                <p className="text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Title</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos saepe animi quos!
                </p>
              </div>
              <div className="mt-auto">
                <div className="h-[9rem] w-full bg-fuchsia-900/80"></div>
              </div>
            </div>
          </div>
          <div className="max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="flex h-full flex-col rounded bg-white px-6 pt-6 sm:px-8 sm:pt-8">
              <p className="text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Title</p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600 text-center mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="mt-8">
                <div className="h-[9rem] w-full bg-emerald-900/80"></div>
              </div>
            </div>
          </div>
          <div className="lg:row-span-2">
            <div className="flex flex-col rounded bg-white h-full">
              <div className="px-6 pt-6 sm:px-8 sm:pt-8 sm:pb-0">
                <p className="text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Title
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate sit aperiam repellendus harum?
                </p>
              </div>
              <div className="h-[25rem] bg-emerald-950/50 mt-auto">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
