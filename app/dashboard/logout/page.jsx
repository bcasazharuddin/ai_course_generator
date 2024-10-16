
"use client"
import React,{ useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import LoadingDialog from '@/app/create-course/_components/LoadingDialog';




function Logout() {
    const { signOut } = useAuth();
    const router = useRouter();
  
    useEffect(() => {
        const performLogout = async () => {
          await signOut();
          // Redirect to a different page after logging out
          router.push('/'); // Redirect to home or any other page
        };
    
        performLogout();
      }, [signOut, router]);
  
  return (
    <div className="flex justify-center items-center h-screen">
      <LoadingDialog loading={true} text = "Please wait... User logging out"/>
    </div>
  )
}

export default Logout