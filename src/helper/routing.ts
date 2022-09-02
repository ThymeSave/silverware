export interface RoutingData {
  fullWidth ?: boolean
}

export const createRoutingData = (routingData : RoutingData = {}) => {
  return {
    data: {
      fullWidth: 'fullWidth' in routingData ? routingData.fullWidth : false,
    },
  };
};
