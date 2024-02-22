import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

interface UserInfoState {
  userInfo: User;
  accessToken: string | null;
  setUserinfo: (user: User, accessToken: string) => void;
}

export interface User {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export const useUserinfo = create<UserInfoState>()(
  devtools(
    persist(
      (set) => ({
        userInfo: {} as User,
        accessToken: null as string | null,
        setUserinfo: (userInfo: User, accessToken: string) => {
          set({
            userInfo: userInfo,
            accessToken: accessToken,
          });
        },
      }),
      {
        name: 'userInfo-storage',
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);
