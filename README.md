# Course Registration

## Features of this project.

- This project will provide 9 category courses.
- When the user clicks on the select button the course will added to the cart section. this time also added the total credit time of the cart section.
- Users cannot add course credit after 20 hours. If the user wants to add more than 20 hours, you will get a toast return.

## Description

Welcome to our project! This is a Course Registaion website made by in javascipt and the react library. Also used css and used tailwind and daisyUI as framework. It allows users to quickly and easily add course. It's build by react thats way this website will be user friendly. this project also responsive.

## Manage State

In this project, I have worked with 5 components. Added header section to header component. Added courses and cart components inside the App component. I have declared a state named 'Courses' in the component of the course and loaded the data in the useEffect hook to the Courses state. Courses are looped through the map method and each course data is taken into a Course component. In App component, I took 4 useState. I have added data to the 'selectedCourses' state through the click event on the selected button. Through selectedcourses.find, we provide the condition that if it has been added before, it will show the toast without being added at the second time. Added course_name by passing the selectedCourse state to the Cart component. Add the value of credit to the value of total credit in the Cart component to get the totalCredit state. 'RemainingCredit' state has an initial value of 20. Clicking on the select button will subtract the course credit remaining value and show the Cart component. The value of remaining-credit will be 0 or the value of the total credit is above 20 then will return a toast. Take another state named TatalPrice whose initial value is 0. To click on the selected button, add the cost price to the TotalPrice shown in the court component.
