import { ApiError, NetworkError } from "../types/api";

export const fetchWithRetry = async <T>(
  fn: () => Promise<T>,  // callback to retry
  retries: number = 3,    // max amount of attempts
  delay: number = 1000,    // delay before next call
): Promise<T> => {
  try {
    return await fn();
  } catch (error) {
    const normalizedError = error instanceof TypeError
      ? new NetworkError('Network error. Check your connection.')
      : error;

    if (retries <= 0) throw error;

    if (
      normalizedError instanceof ApiError && 
      normalizedError.status >= 400 && 
      normalizedError.status < 500
    ) {
      throw normalizedError; // 400-499
    }
    
    if (retries <= 0) throw normalizedError;
    
    await new Promise(resolve => setTimeout(resolve, delay));
    return fetchWithRetry(fn, retries - 1, delay * 2);
  }
};
