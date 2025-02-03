import React from 'react';
import { auth } from "../../lib/auth";
import { headers } from 'next/headers';
import Link from 'next/link';
import { Button } from "@/components/ui/button"

export default async function Navbar() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-2xl font-bold">
        <Link href="/">Logo</Link>
      </div>
      <div className="space-x-4">
        {
            session ?(
                <form  action={async () =>}> 
                    <Button type='submit'>logout</Button>
                </form>
            ) :
                    
            <Link href="/login" className="hover:underline">Login</Link>
        }
         
      </div>
    </nav>
  );
}