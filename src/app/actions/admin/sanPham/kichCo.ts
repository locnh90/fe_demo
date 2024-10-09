'use server'
import { revalidateTag } from 'next/cache'
const API_URL = process.env.NEXT_PUBLIC_API_URL
export  const handleCreateKichCo = async (data:any) => {
    const res = await fetch(`${API_URL}/admin/kichCo`,{
        method:'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
        
    })

    revalidateTag("list-kichCo")
    return await res.json();
}