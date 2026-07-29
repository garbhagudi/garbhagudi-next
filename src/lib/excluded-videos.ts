export const EXCLUDED_VIDEO_IDS = new Set<string>([
  'qiFuRrRDJBs',
  'N1VPC1ngCG4',
  'SLej_GKzzzw',
  'gT1l3BYUfKU',
]);

export const filterExcludedVideos = <
  T extends {
    items?: { snippet?: { resourceId?: { videoId?: string } } }[];
  },
>(
  response: T
): T => {
  const items = (response?.items ?? []).filter(
    (item) => !EXCLUDED_VIDEO_IDS.has(item?.snippet?.resourceId?.videoId ?? '')
  );

  return { ...response, items } as T;
};
