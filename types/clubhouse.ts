export namespace Clubhouse {
  export interface Topic {
    id: number;
    title: string;
    abbreviated_title: string;
  }

  export interface Club {
    club_id: number;
    name: string;
    description: string;
    photo_url: string | null;
    num_members: number;
    num_followers: number;
    enable_private: boolean;
    is_follow_allowed: boolean;
    is_membership_private: boolean;
    is_community: boolean;
    rules: {
      desc: string;
      title: string;
    }[];
    num_online: number;
  }

  export interface Profile {
    user_id: number;
    name: string;
    displayname: string | null;
    photo_url: string | null;
    username: string;
    bio: string;
    twitter: string | null;
    instagram: string | null;
    num_followers: number;
    num_following: number;
    time_created: string;
    follows_me?: boolean;
    is_blocked_by_network?: boolean;
    mutual_follows_count?: number;
    mutual_follows?: any[];
    notification_type?: any;
    invited_by_user_profile: {
      user_id: number;
      name: string;
      photo_url: string | null;
      username: string | null;
    } | null;
    clubs: Club[];
    has_verified_email?: boolean;
    can_edit_username?: boolean;
    can_edit_name?: boolean;
    can_edit_displayname?: boolean;
    topics: Topic[];
  }
}
