export const VOLUNTEER_KEYS = {
  lists: () => ['volunteer', 'list'],
  list: (filters: Record<string, unknown>) => [...VOLUNTEER_KEYS.lists(), { filters }],
  detail: (id: string) => ['volunteer', 'detail', id],
} as const;
