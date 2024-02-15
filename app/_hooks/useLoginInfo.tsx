import { create } from 'zustand';

interface LoginInfoState {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  token: string;
  setToken: (token: string) => void;
  userType: 'member';
  setUserType: (UserType: 'member') => void;
}

const useLoginInfo = create<LoginInfoState>((set) => ({
  isLogin: false,
  setIsLogin: (isLogin) => set({ isLogin }),
  token: '',
  setToken: (token) => set({ token }),
  userType: 'member',
  setUserType: (userType) => set({ userType }),
}));

export default useLoginInfo;
