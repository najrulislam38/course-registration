import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(0);

  const handleAddToCart = (course) => {
    const isSelectedCourse = selectedCourses.find(
      (item) => item.id === course.id
    );

    if (!isSelectedCourse) {
      let allCredit = totalCredit + course.credit;
      let remaining = 20 - course.credit;
      if (allCredit > 20 || remaining < 0) {
        return alert(
          "You can't cross total-credit more than 20 and your credit remaining time cannot be below 0."
        );
      } else {
        setSelectedCourses([...selectedCourses, course]);
        setTotalCredit(allCredit);
        setRemainingCredit(remaining);
      }
    }
  };
  return (
    <>
      <Header></Header>
      <main className="max-w-screen-2xl mx-auto px-5 md:px-10 lg:px-16">
        <div className="md:flex gap-6">
          <div className="flex-1">
            <Courses handleAddToCart={handleAddToCart}></Courses>
          </div>
          <div className="md:w-[180px] lg:w-[300px]">
            <Cart
              selectedCourses={selectedCourses}
              totalCredit={totalCredit}
              remainingCredit={remainingCredit}
            ></Cart>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
