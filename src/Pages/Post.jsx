import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Container } from "../components/Index";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  console.log("User Data:", userData);
  useEffect(() => {
    console.log("userData changed:", userData);
  }, [userData]);

  useEffect(() => {
    if (id !== null && id !== undefined) {
      console.log("Fetching post with ID:", id);
      const fetchPost = async ()=>{
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/blogs/${id}`,{
          credentials: 'include',
        })
        const jsonData = await response.json();
        console.log("POST FETCH STATUS:", response.status);
        console.log("POST FETCH DATA:", jsonData);
        if(response.ok){
          setPost(jsonData.data);
        }else{
          console.error("Failed to fetch post");
          // navigate("/");
        }

      }
      fetchPost();
    } else {
      navigate("/");
    }
  }, [id, navigate]);
  console.log("POST author_id:", post?.author_id);
  console.log("POST author_id._id:", post?.author_id?._id);
  console.log("user data", userData);
  console.log("LOGGED IN USER ID:", userData?._id);

  const isAuthor = Boolean(
  post &&
  userData &&
  (post.author_id?._id === userData._id) 
);

  const deletePost = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if(confirmDelete){
      const deletePostAsync = async ()=>{
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/blogs/${id}`,{
          method: 'DELETE',
          credentials: 'include',
        })
        if(response.ok){
          alert("Post deleted successfully!");
          navigate("/");
        }else{
          alert("Failed to delete the post.");
        }
      }
      deletePostAsync();
    }
  };

  return post ? (
    <div className="py-10 bg-gray-50 min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md">
          {/* {console.log("image Url:", service.getFilePreview(post.featuredimage))} */}
          <div className="relative mb-6">
            <img
              src={post.images?.[0]?.url || ""}
              alt={post.title}
              className="w-full h-96 object-cover rounded-xl shadow-sm"
            />
            {isAuthor && (
              <div className="absolute top-4 right-4 flex gap-2">
                <Link to={`/edit-post/${id}`}>
                  <Button bgColor="bg-green-600" className="px-4 py-2 text-white">
                    Edit
                  </Button>
                </Link>
                <Button
                  bgColor="bg-red-600"
                  className="px-4 py-2 text-white"
                  onClick={deletePost}
                >
                  Delete
                </Button>
              </div>
            )}
          </div>

          <div className="mb-4">
            <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            {parse(post.content)}
          </div>
        </div>
      </Container>
    </div>
  ) : null;
}
