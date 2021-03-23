export namespace Clubhouse {
  // Topic is unused for now
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
    bio: string;
    can_receive_direct_payment: false;
    clubs: Club[];
    direct_payment_fee_fixed: number;
    direct_payment_fee_rate: number;
    displayname: null;
    instagram: string;
    invited_by_user_profile: {
      name: string;
      photo_url: string;
      user_id: number;
      username: string;
    };
    name: string;
    num_followers: number;
    num_following: number;
    photo_url: string;
    time_created: string;
    twitter: null;
    url: string;
    username: string;
  }
}

export type ProfileDocument = {
  id: string;
  created_at: string;
  updated_at: string;
  user_id: number;
  username: string;
  profile: Clubhouse.Profile;
};
