
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import React from 'react'

export default async function Dashboard() {
     const { getUser } = getKindeServerSession();
     const user = await getUser();
   
     console.log(user);
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='text-4xl text-blue-800'>
        <h2>Welcome to your porfile! {user?.given_name} {user?.family_name}</h2>
      </div>
    </div>
  )
}

