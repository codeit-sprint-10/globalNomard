import { create } from 'zustand';

interface SignupState {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  isInput: boolean;
  setIsInput: (inInput: boolean) => void;
  isPassword: boolean;
  setIsPassword: (isPassword: boolean) => void;
}

const useSignup = create<SignupState>((set) => ({
  email: '',
  setEmail: (email) => set({ email }),
  password: '',
  setPassword: (password) => set({ password }),
  isInput: false,
  setIsInput: (isInput) => set({ isInput }),
  isPassword: false,
  setIsPassword: (isPassword) => set({ isPassword }),
}));

export default useSignup;
