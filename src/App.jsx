import "./App.css";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main className="max-w-screen-2xl mx-auto px-5 md:px-10 lg:px-16">
        <div className="md:flex gap-4">
          <div className="md:w-2/3">
            <Courses></Courses>
          </div>
          <div className="md:w-1/3">cart</div>
        </div>
      </main>
    </>
  );
}

export default App;
