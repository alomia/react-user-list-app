import { useGlobalState } from "../context/GlobalState";

function ToggleUsersButton() {
  const { page, setPage } = useGlobalState();

  function handlerOnClick() {
    page === 1 ? setPage(2) : setPage(1);
  }

  return (
    <button
      className="border border-gray-500 p-2 my-5 bg-slate-900 hover:bg-slate-800 text-white"
      onClick={handlerOnClick}
    >
      Toggle users
    </button>
  );
}

export default ToggleUsersButton;
