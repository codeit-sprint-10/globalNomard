import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface UserInfoState {
  userInfo: User;
  accessToken: string | null;
  refreshToken: string | null;
  setUserinfo: (user: User, accessToken: string, refreshToken: string) => void;
}

// export interface UserInfoResponse {
//   accessToken: string;
//   refreshToken: string;
//   user: User;
// }

export interface User {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export const useUserinfo = create<UserInfoState>()(
  persist(
    (set) => ({
      userInfo: {} as User,
      accessToken: null as string | null,
      refreshToken: null as string | null,
      setUserinfo: (
        userInfo: User,
        accessToken: string,
        refreshToken: string,
      ) => {
        set({
          userInfo: userInfo,
          accessToken: accessToken,
          refreshToken: refreshToken,
        });
      },
    }),
    {
      name: 'userInfo-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
