// src/integrations/firebase/types.ts

// Post document
export type Post = {
  id?: string;          // optional because Firestore generates it
  title: string;
  content: string;
  authorId: string;
  createdAt: Date;
};

// User document
export type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: Date;
};

// Optional: map of all collections
export type FirestoreCollections = {
  posts: Post;
  users: User;
};
