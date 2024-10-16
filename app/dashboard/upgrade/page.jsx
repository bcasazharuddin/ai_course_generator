"use client"
import React,{useState,useEffect} from 'react'
import PlanCard from './_components/PlanCard'
import LoadingDialog from '@/app/create-course/_components/LoadingDialog';

function upgrade() {
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate a loading delay (e.g., for fetching data)
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 1000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

    const coursePlans = [
        {
          name: "Basic Plan",
          price: "Free",
          features: [
            "Unlimited access to all features",
            "5 courses per month", // Updated to "courses"
            "Email support",
            "Access to exclusive resources and webinars",
            "Personalized course recommendations",
          ]
        },
        {
          name: "Advanced Plan",
          price: "14.99$",
          features: [
            "Everything in Basic Plan",
            "Unlimited courses per month", // Updated to "courses"
            "Priority email support",
            "Access to exclusive resources and webinars",
            "Personal mentorship",
          ]
        }
      ];
      
  return (
    <div>
       {loading ? (
         <LoadingDialog loading={true} text = "Please wait..."/>
      ):
     (
      <>
        <h2 className='font-bold text-3xl '>Upgrade your plan for unlimited course generate</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-center gap-5 mt-10" >
        {coursePlans.map((item,index)=>(
            <div key={index} className="flex justify-center" > 
                  <PlanCard item={item}/>
            </div>
          ))}
          </div>
          </>)}
    </div>
  )
}

export default upgrade