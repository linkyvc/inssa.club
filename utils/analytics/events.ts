export type AnalyticsEvent = {
  view_profile: {
    clubhouse_user_id: number;
    clubhouse_username: string;
  };
  click_create_profile: {
    clubhouse_user_id: number;
    clubhouse_username: string;
    waitlist_id: number;
  };
  click_profile_norminated: {
    clubhouse_user_id: number;
    clubhouse_username: string;
    norminated_clubhouse_user_id: string;
    norminated_clubhouse_username: string;
  };
  click_profile_social: {
    clubhouse_user_id: number;
    clubhouse_username: string;
    type: 'instagram' | 'twitter';
  };
  click_profile_open_app: {
    clubhouse_user_id: number;
    clubhouse_username: string;
  };
};
