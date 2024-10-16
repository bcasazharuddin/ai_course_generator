"use client"
import React,{useState,useEffect} from "react";
import AddCourse from "./_components/AddCourse";
import UserCourseList from "./_components/UserCourseList";
import LoadingDialog from "../create-course/_components/LoadingDialog";

function Dashboard() {
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate a loading delay (e.g., for fetching data)
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 1000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div>
      {loading ? (
         <LoadingDialog loading={true} text = "Please wait..."/>
      ):
     (
      <>
        <AddCourse />
        {/* Display List of Course */}
        <UserCourseList />
      </>
    )}
    </div>
  );
}

export default Dashboard;
