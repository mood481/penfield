const { version } = require('../package.json');
export const API_VERSION = "1";
export const ROUTE_PREFIX = `/api/v${API_VERSION}`;
export const PORT = process.env.port || 3000;