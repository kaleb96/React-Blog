import { mdiReact, mdiMagnify, mdiNote } from "@mdi/js";
import Icon from "@mdi/react";

function MainLogo() {
  return (
    <>
      {/* <div className="border-2 border-blue-200 p-4 mb-4 w-full flex justify-center items-center"> */}
      <div className="p-4 mb-4 w-full flex justify-center items-center">
        <Icon path={mdiReact} size={3} style={{ color: "#58c4dc" }} />
        <span className="text-5xl font-bold">React Blog</span>
      </div>
    </>
  );
}

function SearchEngine() {
  return (
    // <div className="border-2 border-amber-200 p-4 mb-4 w-full flex justify-center items-center">
    <div className="p-4 mb-4 w-full flex justify-center items-center">
      <div
        className="flex items-center w-200 p-2 rounded-xs"
        style={{ backgroundColor: "#333a45" }}
      >
        <Icon path={mdiMagnify} size={1} />
        <input className="ml-px w-full" placeholder="Search" />
      </div>
    </div>
  );
}

function ItemList() {
  const icons = [1, 2, 3, 4, 5];
  return (
    // <div className="border-2 p-4 mb-4 w-full text-center border-orange-200">
    <div className="p-4 mb-4 w-full text-center">
      <div className="flex flex-row justify-center gap-35">
        {icons.map((_, index) => (
          <Icon key={index} path={mdiNote} size={2} />
        ))}
      </div>
    </div>
  );
}
function IndexPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <MainLogo />
        <SearchEngine />
        <ItemList />
      </div>
    </>
  );
}

export default IndexPage;
