"use client";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useContext, useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { UserCourseListContext } from "@/app/_context/UserCourseListContext";

function UserCourseList() {
  const [courseList, setCourseList] = useState([]);
  const [loading,setLoading] = useState(false)
  const { userCourseList, setUserCourseList } = useContext(
    UserCourseListContext
  );
  const { user } = useUser();
  useEffect(() => {
    user && getUserCourses();
  }, [user]);
  const getUserCourses = async () => {
    setLoading(true); // Start loading
    const result = await db
      .select()
      .from(CourseList)
      .where(
        eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress)
      );
    console.log(result);
    setCourseList(result);
    setUserCourseList(result);
    setLoading(false); // End loading
  };
  console.log("--- courseList--",courseList);
  return (
    <div className="mt-10">
      <h2 className="font-bold text-xl">My AI Courses</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {!loading ? (
          courseList?.length > 0 ? (
            courseList?.map((course, index) => (
              <CourseCard
                course={course}
                key={index}
                refreshData={() => getUserCourses()}
              />
            ))
          ) : (
            <div className="col-span-2 text-center mt-5">
              <p className="text-gray-600">
              No courses available. Please click the "Create AI Course" button to generate a course.
              </p>
            </div>
          )
        ) : (
          [1, 2, 3, 4, 5].map((item, index) => (
            <div
              key={index}
              className="w-full mt-5 bg-slate-200 animate-pulse rounded-lg h-[270px]"
            ></div>
          ))
        )}
      </div>
    </div>
  );
}

export default UserCourseList;
