import React, { useEffect, useState } from 'react'
import service from '../appwrite/config';
import authService from '../appwrite/auth';
import { useSelector } from 'react-redux';
import { Container, Postcard } from '../components/Index';
import { Query } from 'appwrite';

function MyPost() {
    const [myPosts, setMyPosts] = useState([]);
    const userData = useSelector(state => state.auth.userData);
    useEffect(() => {
        const fetchMyPosts = async ()=>{
            const response = await fetch('/api/v1/blogs/me/posts',{
                credentials: 'include',
            })
            const jsonData = await response.json();
            if(response.ok){
                setMyPosts(jsonData.data);
            }else{
                console.error("Failed to fetch posts");
            }
        }
        fetchMyPosts();
    }, [userData]);
    return (
        <>
            {myPosts.length === 0 ? (
                <div className="flex items-center justify-center h-64">
                    <span className="text-gray-500 text-lg font-semibold">No posts found.</span>
                </div>
            ) :
                (<div className="py-8 w-full">
                    <Container>
                        <div className='flex flex-wrap '>
                            {myPosts.map((post) => (
                                <div key={post._id} className="p-2 w-1/4">
                                    <Postcard {...post} />
                                </div>
                            ))}
                        </div>
                    </Container>

                </div>)}
        </>
    )
}

export default MyPost
