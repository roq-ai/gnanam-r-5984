const mapping: Record<string, string> = {
  'car-sharings': 'car_sharing',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
