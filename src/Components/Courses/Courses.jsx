import { useEffect } from "react";
import { useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./Data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="">
      <h3>Course: {courses.length}</h3>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"></div>
    </div>
  );
};

export default Courses;
