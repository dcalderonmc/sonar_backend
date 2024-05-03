export interface User {
  name: string;
  email?: string;
  password?: string;
  age?: number;
  preferences?: string[];
  transactions?: { amount: number; date: string }[];
  isAdult?: boolean;
  hasValidEmail?: boolean;
}
