export type AnalyticsEvent = {
  view_landing: undefined;
  view_profile: {
    clubhouse_user_id: number;
    clubhouse_username: string;
  };
  click_create_profile: {
    clubhouse_user_id: number;
    clubhouse_username: string;
    email?: string;
  };
  click_profile_norminated: {
    clubhouse_user_id: number;
    clubhouse_username: string;
    norminated_clubhouse_user_id: number;
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
