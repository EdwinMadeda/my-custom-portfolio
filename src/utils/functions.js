export const trimStr = (str, limit, suffix = '') => (
  <>
    {(str?.length ?? 0) < limit ? str : str.substring(0, limit)}
    {suffix}
  </>
);
