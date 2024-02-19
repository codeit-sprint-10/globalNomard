import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface UserInfoState {
  userInfo: User;
  token: string | null;
  setUserinfo: (user: User, token: string) => void;
}

export interface UserInfoResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface User {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export const useUserinfo = create<UserInfoState>(
  persist(
    (set) => ({
      userInfo: {} as User,
      token: null as string | null,
      setUserinfo: (user: User, token: string) => {
        set({ userInfo: user, token: token });
      },
    }),
    {
      name: 'userInfo-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
