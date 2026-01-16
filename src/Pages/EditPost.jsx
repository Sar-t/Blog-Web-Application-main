import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components/Index'
import { useNavigate, useParams } from 'react-router-dom';

// This component is used to edit a post. It fetches the post data based on the slug from the URL parameters.
function EditPost() {
    const [post,setPost] = useState(null);  //[] empty array is a truthy value, so we use null to indicate no post is loaded yet.
    const { id } = useParams()
    const navigate = useNavigate()
    console.log("Slug from params: ", id);
    useEffect(()=>{
        console.log("useEffect triggered, slug:", id);
        if(id){
            const fetchPost = async ()=>{
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/blogs/${id}`)
                const jsonData = await response.json();
                console.log("FETCH STATUS:", response.status);
                console.log("FETCH DATA:", jsonData);
                if(response.ok){
                    setPost(jsonData.data);
                    console.log("Post data set:", jsonData.data);
                }else{
                    console.error("Failed to fetch post for editing");
                    navigate("/");
                }
            }
            fetchPost();
            
        }else{
            navigate('/');
        }

    },[id,navigate])
  return post ?
    (<div className='py-8'>
        {console.log("reached edit post")}
        <Container>
            {console.log("Edit Post: ", post)}
            <PostForm post = {post} />
        </Container>
    </div>):null;
}

export default EditPost