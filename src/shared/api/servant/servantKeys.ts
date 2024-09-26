export const SERVANT_KEYS = {
  lists: () => ['servant', 'list'],
  list: (filters: Record<string, unknown>) => [...SERVANT_KEYS.lists(), { filters }],
  detail: (id: string) => ['servant', 'detail', id],
} as const;
