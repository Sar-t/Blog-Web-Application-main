//To display all post
import React,{useState, useEffect} from 'react'
import service from '../appwrite/config'
import { Container } from '../components/Index'
import Postcard from '../components/Postcard';
function AllPost() {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        const fetchPosts = async ()=>{
            const response = await fetch('/api/v1/blogs/',{
                credentials: 'include',
            })
            const jsonData = await response.json();
            if(response.ok){
                setPosts(jsonData.data);
            }else{
                console.error("Failed to fetch posts");
            }
        }
        fetchPosts();
    },[]);
    
  return (
    <div className="py-8 w-full">
        <Container>
            <div className='flex flex-wrap '>
                    {posts.map((post)=>(
                        <div key = {post._id} className = "p-2 w-1/4">
                            <Postcard {...post} />
                        </div>
                    ))}
            </div>
        </Container>
        
    </div>
  )
}

export default AllPost