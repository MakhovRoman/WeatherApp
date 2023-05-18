export const useFetching = (callback: Promise<Record<string, unknown>>) => {
  const fetching = async () => {
    try {
      await callback;
    } catch(err) {
      console.log(err);
    }
  }

  return fetching;
}
