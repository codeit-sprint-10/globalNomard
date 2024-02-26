import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type Token = string | null;

interface UserInfoState {
  userInfo: User;
  setUserinfo: (user: User) => void;
}

interface TokenState {
  accessToken: Token;
  setAccessToken: (accessToken: string) => void;
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
  devtools((set) => ({
    userInfo: {} as User,
    setUserinfo: (userInfo: User) => {
      set({
        userInfo: userInfo,
      });
    },
  })),
);

export const useToken = create<TokenState>()(
  devtools((set) => ({
    accessToken: null as Token,
    setAccessToken: (accessToken: string) => {
      set({
        accessToken: accessToken,
      });
    },
  })),
);
