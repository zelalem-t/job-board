import { getSignInUrl,  getUser, signOut } from '@workos-inc/authkit-nextjs';
import Link from 'next/link';

export default async function Header(){
    const { user } = await getUser();
    const signInUrl = await getSignInUrl();
    
    return (
        <header>
        
        <div className='container flex items-center justify-between mx-auto my-4'>
        <Link href = "/" className = 'font-bold text-xl'>Job Board</Link>
        <nav className = 'flex gap-2'>
          {!user &&(
            <Link href={signInUrl} className='rounded-md py=1 px-2 sm:py-2 sm:px-4bg-gray-500'>Login</Link>
          )}
           {user &&(
             <form
             action={async () => {
               'use server';
               await signOut();
             }}
           >
             
             <button type="submit" className="rounded-md py=1 px-2 sm:py-2 sm:px-4bg-gray-500">Logout, {user.firstName}</button>
           </form>
          )} 
          <Link href="/new-job" 
          className='rounded-md py-1 px-2 sm:py-2 sm:px-4 bg-blue-600 text-white'>
            Post a job
            </Link>
        </nav>
      </div>
      </header>
    );
}