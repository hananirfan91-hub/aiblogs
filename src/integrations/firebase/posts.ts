// src/lib/firebase/posts.ts
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "@/integrations/firebase/client";
import type { Post } from "@/integrations/firebase/types";

// Fetch all posts
export async function getPosts(): Promise<Post[]> {
  const snapshot = await getDocs(collection(db, "posts"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Post));
}

// Add a new post
export async function createPost(post: Post) {
  await addDoc(collection(db, "posts"), post);
}
