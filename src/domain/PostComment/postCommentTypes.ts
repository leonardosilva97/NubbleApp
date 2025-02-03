export interface PostComment {
  message: string;
  id: number;
  createdAt: string;
  author: {
    id: number;
    profileURL: string;
    name: string;
    userName: string;
  };
}

export interface PostCommentAPI {
  id: number; // number
  message: string; // string
  user_id: number; // number
  post_id: number; // number
  created_at: string; // string (ISO date format)
  updated_at: string; // string (ISO date format)
  // post: {
  //   id: number; // number
  //   text: string; // string
  //   user_id: number; // number
  //   image_url: string; // string (URL)
  //   is_fixed: boolean; // boolean
  //   is_activated: boolean; // boolean
  //   created_at: string; // string (ISO date format)
  //   updated_at: string; // string (ISO date format)
  //   status: string; // string (could be an enum like 'published' | 'draft' | 'archived')
  //   meta: Record<string, unknown>; // object (empty object placeholder)
  // };
  user: {
    id: number; // number
    first_name: string; // string
    last_name: string; // string
    username: string; // string
    email: string; // string (email format)
    profile_url: string; // string (URL)
    is_online: boolean; // boolean
    full_name: string; // string
  };
  meta: Record<string, unknown>; // object (empty object placeholder)
}
