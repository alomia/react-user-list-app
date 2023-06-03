import Header from "./components/Header";
import ToggleUsersButton from "./components/ToggleUsersButton";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App max-w-3xl mx-auto h-full">
      <Header />
      <ToggleUsersButton />
      <UserList />
    </div>
  );
}

export default App;
