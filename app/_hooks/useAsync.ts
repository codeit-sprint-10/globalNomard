import { useCallback } from 'react';

function useAsync(asyncFunction) {
  const execute = useCallback(
    async (...args) => {
      try {
        const response = await asyncFunction(...args);
        return response;
      } catch (err) {
        throw err;
      }
    },
    [asyncFunction],
  );

  return { execute };
}

export default useAsync;
