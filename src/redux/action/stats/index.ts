export const ACTION_STATS = 'ACTION_STATS';
export const TOTAL_COUNT = 'TOTAL_COUNT';
export const actionStats = (statsData: any) => ({
  type: ACTION_STATS,
  payload: statsData,
});

export const totalActionCount = (totalCount: any) => ({
  type: TOTAL_COUNT,
  payload: totalCount,
});
