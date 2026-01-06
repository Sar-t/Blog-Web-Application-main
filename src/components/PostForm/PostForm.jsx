import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "../Index";
import service from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues} =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "public",
        author: post?.author || "unknown",
      },
    });
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  
  const submitHandler = async (data) => {
    setLoading(true);
    const formData = new FormData();
    if(!post || post.title !== data.title){
      formData.append("title", data.title);
    }
    if(!post || post.content !== data.content){
      formData.append("content", data.content);
    }
    if(!post || post.status !== data.status){
      formData.append("status", data.status);
    }
    

    // attach image ONLY if user selected it
    if (data.images && data.images[0]) {
      formData.append("images", data.images[0]);
    }
    if (post) {
      // console.log("Updating post:", data);
        // console.log("File uploaded:", file);
      const response = await fetch(`/api/v1/blogs/${post._id}`,{
        method: 'PATCH',
        body: formData,
        credentials: 'include'
      })

      const jsonData = await response.json();
      if(response.ok){
        setLoading(false);
        alert('Post updated!')
        navigate(`/post/${jsonData.data._id}`)
      }
    } else {
      const response = await fetch('/api/v1/blogs/',{
        method: 'POST',
        body: formData,
        credentials: 'include'
      })
      const jsonData = await response.json();
      if(response.ok){
        setLoading(false);
        alert("Post created!");
        navigate(`/post/${jsonData._id}`);
      }else{
        setLoading(false);
        alert("error while creating post!");
      }
    }
  };

  // const slugTransform = useCallback((value) => {
  //   if (value && typeof value === "string")
  //     return value
  //       .trim()
  //       .toLowerCase()
  //       .replace(/[^a-zA-Z\d\s]+/g, "-")
  //       .replace(/\s/g, "-")
  //       .substring(0,36);

  //   return "";
  // }, []);

  // useEffect(() => {
  //   const subscription = watch((value, { name }) => {
  //     if (name === "title") {
  //       setValue("slug", slugTransform(value.title), { shouldValidate: true });
  //     }
  //   });

  //   return () => subscription.unsubscribe();
  // }, [watch, slugTransform, setValue]);

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {/* Left Section (Title, Slug, Content) */}
      <div className="md:col-span-2 space-y-5">
        <Input
          label="Title"
          placeholder="Enter post title"
          {...register("title", { required: true })}
        />
        <RTE
          label="Content"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>

      {/* Right Section (Image, Status, Button) */}
      <div className="space-y-5">
        <Input
          label="Featured Image"
          type="file"
          accept="image/png, image/jpg, image/jpeg, image/gif image/webp"
          {...register("images", 
            { 
              required: !post,
            }
          )}
        />
        {post && post.images?.length > 0 && (
          <div className="w-full h-auto rounded-lg overflow-hidden">
            <img
              src={post.images[0].url}
              alt={post.title}
              className="w-full object-cover rounded-lg shadow-sm"
            />
          </div>
        )}
        <Select
          options={["public", "private"]}
          label="Status"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update Post" : "Create Post"}
        </Button>
      </div>
    </form>
  );
}
