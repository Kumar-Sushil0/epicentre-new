// Authentication API helper functions
import { api, endpoints } from './api';

interface SendOtpResponse {
  success: boolean;
  message: string;
}

interface VerifyOtpResponse {
  success: boolean;
  message: string;
  token?: string;
}

interface ForgotPasswordResponse {
  success: boolean;
  message: string;
}

interface ResetPasswordResponse {
  success: boolean;
  message: string;
}

/**
 * Send OTP to user's email for verification
 */
export const sendOtp = async (email: string, type: 'signup' | 'forgot-password' = 'signup'): Promise<SendOtpResponse> => {
  try {
    const response = await api.post<SendOtpResponse>(endpoints.auth.sendOtp, {
      email,
      type,
    });
    return response;
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw error;
  }
};

/**
 * Verify OTP code
 */
export const verifyOtp = async (email: string, otp: string): Promise<VerifyOtpResponse> => {
  try {
    const response = await api.post<VerifyOtpResponse>(endpoints.auth.verifyOtp, {
      email,
      otp,
    });
    return response;
  } catch (error) {
    console.error('Error verifying OTP:', error);
    throw error;
  }
};

/**
 * Request password reset (sends OTP)
 */
export const forgotPassword = async (email: string): Promise<ForgotPasswordResponse> => {
  try {
    const response = await api.post<ForgotPasswordResponse>(endpoints.auth.forgotPassword, {
      email,
    });
    return response;
  } catch (error) {
    console.error('Error requesting password reset:', error);
    throw error;
  }
};

/**
 * Reset password with OTP
 */
export const resetPassword = async (
  email: string,
  otp: string,
  newPassword: string
): Promise<ResetPasswordResponse> => {
  try {
    const response = await api.post<ResetPasswordResponse>(endpoints.auth.resetPassword, {
      email,
      otp,
      newPassword,
    });
    return response;
  } catch (error) {
    console.error('Error resetting password:', error);
    throw error;
  }
};
