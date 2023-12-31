import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from "prop-types";

const Courses = ({ handleAddToCart, ToastContainer }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./Data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-10">
      {courses.map((course) => (
        <Course
          key={course.id}
          course={course}
          handleAddToCart={handleAddToCart}
          ToastContainer={ToastContainer}
        ></Course>
      ))}
    </div>
  );
};

Courses.propTypes = {
  handleAddToCart: PropTypes.func,
  ToastContainer: PropTypes.any,
};

export default Courses;
