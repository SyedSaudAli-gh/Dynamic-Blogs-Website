"use client";
import React, { useState, useEffect } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

interface Comment {
  id: string;
  text: string;
}

interface CommentSectionProps {
  postId: string;
}

 function Comments({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(() => {
    try {
      const saved = localStorage.getItem(`comments-${postId}`);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Failed to load comments:", error);
      return [];
    }
  });
  const [newComment, setNewComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Ensure comments load properly
  useEffect(() => {
    try {
      const savedComments = localStorage.getItem(`comments-${postId}`);
      if (savedComments) {
        setComments(JSON.parse(savedComments));
      }
    } catch (error) {
      console.error("Error loading comments:", error);
    } finally {
      setIsLoading(false);
    }
  }, [postId]);

  // Save comments to localStorage whenever comments state changes
  useEffect(() => {
    localStorage.setItem(`comments-${postId}`, JSON.stringify(comments));
  }, [comments, postId]);

  // Add a new comment
  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        text: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
    }
  };

  // Edit a comment
  const handleEditComment = (commentId: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setEditingCommentId(commentId);
    }
  };

  // Save the edited comment
  const handleSaveEditComment = () => {
    if (newComment.trim() && editingCommentId) {
      const updatedComments = comments.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, text: newComment }
          : comment
      );
      setComments(updatedComments);
      setNewComment("");
      setEditingCommentId(null);
    }
  };
  // Delete a comment
  const handleDeleteComment = (commentId: string) => {
    const updatedComments = comments.filter(
      (comment) => comment.id !== commentId
    );
    setComments(updatedComments);
    localStorage.setItem(`comments-${postId}`, JSON.stringify(updatedComments)); // Save immediately
  };

  // Cancel edit
  const handleCancelEdit = () => {
    setNewComment("");
    setEditingCommentId(null);
  };

  if (isLoading) {
    return <div>Loading comments...</div>;
  }

  return (
    <div className="w-full p-4 bg-card rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-primary">Comments ( {comments ? comments.length : 0} )</h2>
      <hr className="my-5 border-border" />

      <input
        type="text"
        className="w-full p-2 px-5 border border-border rounded-lg"
        placeholder="Write a comment..."
        value={newComment}
        onChange={(event) => setNewComment(event.target.value)}
      />

      <div className="flex justify-center py-4">
        {editingCommentId ? (
          <>
            <button className=" text-sm p-2" onClick={handleCancelEdit}>
              Cancel
            </button>
            <button className="text-lg p-2" onClick={handleSaveEditComment}>
              <abbr title="Save">
                <FaSave />
              </abbr>
            </button>
          </>
        ) : (
          <button
            className="border-2 p-2 rounded-lg ml-2 flex justify-end"
            onClick={handleAddComment}
          >
            Publish
          </button>
        )}
      </div>

      <ul className="mt-6">
        {comments.map((comment) => (
          <li key={comment.id} className="flex justify-between p-2 border-b">
            <span>{comment.text}</span>
            <div className="flex gap-5">
              <button
                className="text-lg "
                onClick={() => handleEditComment(comment.id)}
              >
                <abbr title="Edit">
                  <FaEdit />
                </abbr>
              </button>
              <button
                className="text-xl"
                onClick={() => handleDeleteComment(comment.id)}
              >
                <abbr title="Delete">
                  <MdDelete />
                  
                </abbr>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
