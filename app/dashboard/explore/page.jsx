"use client"
import { db } from '@/configs/db'
import { CourseList } from '@/configs/schema'
import React, { useEffect,useState } from 'react'
import CourseCard from '../_components/CourseCard';
import { Button } from '@/components/ui/button';
import LoadingDialog from '@/app/create-course/_components/LoadingDialog';

function Explore() {

  const [courseList,setCourseList] = useState([]);
  const [pageIndex,setPageIndex] = useState(0);
  const [loading, setLoading] = useState(true); // Loading state
  useEffect(()=>{
     GetAllCourse();
  },[pageIndex])
  const GetAllCourse = async()=>{
    setLoading(true); // Start loading
    const result = await db.select().from(CourseList)
    .limit(9)
    .offset(pageIndex*9)
    console.log("---result--",result);
    setCourseList(result)
    setLoading(false); // End loading
  }
  return (
    <div>
      {loading ? (
         <LoadingDialog loading={true} text = "Please wait..."/>
      ):(<>
      <h2 className='font-bold text-3xl '>Explore More Projects</h2>
      <p>Explore more project build with AI by other users</p>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
        {courseList?.map((course,index)=>(
          <div >
            <CourseCard course={course} displayUser={true}/>
          </div>
        ))}
      </div>
      <div className='flex justify-between mt-5'>
      {pageIndex != 0 &&  <Button onClick={()=>setPageIndex(pageIndex-1)}>Previous Page</Button>}
      <Button onClick={()=>setPageIndex(pageIndex+1)}>Next Page</Button>
      </div>
      </>)}
    </div>
  )
}

export default Explore