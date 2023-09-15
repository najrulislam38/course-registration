import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const alreadySelected = () => toast("You have already selected the course.");
  const moreThan = () =>
    toast(
      "You can't cross total-credit more than 20 and your credit remaining time cannot be below 0."
    );
  const handleAddToCart = (course) => {
    const isSelectedCourse = selectedCourses.find(
      (item) => item.id === course.id
    );

    if (isSelectedCourse) {
      return alreadySelected();
    } else {
      let allCredit = totalCredit + course.credit;
      let remaining = 20 - allCredit;
      if (allCredit > 20 || remaining < 0) {
        return moreThan();
      } else {
        setSelectedCourses([...selectedCourses, course]);
        setTotalCredit(allCredit);
        setRemainingCredit(remaining);
        setTotalPrice(totalPrice + course.price);
      }
    }
  };
  return (
    <>
      <Header></Header>
      <main className="max-w-screen-2xl mx-auto px-5 md:px-10 lg:px-16">
        <div className="lg:flex gap-6">
          <div className="flex-1">
            <Courses
              handleAddToCart={handleAddToCart}
              ToastContainer={ToastContainer}
            ></Courses>
          </div>
          <div className="lg:w-[300px]">
            <Cart
              selectedCourses={selectedCourses}
              totalCredit={totalCredit}
              remainingCredit={remainingCredit}
              totalPrice={totalPrice}
            ></Cart>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
