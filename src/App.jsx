import "./App.css";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main className="max-w-screen-2xl mx-auto px-5 md:px-10 lg:px-16">
        <div className="md:flex gap-6">
          <div className="flex-1">
            <Courses></Courses>
          </div>
          <div className="md:w-[300px]">cart</div>
        </div>
      </main>
    </>
  );
}

export default App;
