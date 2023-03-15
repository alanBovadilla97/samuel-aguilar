function path(root, sublink) {
  return `${root}${sublink}`;
};

const SERVICES_ROOT = '/servicios';

export const PATH_PAGE = {
  page404: '/404'
};

export const PATH_SERVICES = {
  root: SERVICES_ROOT,
  accounting: path(SERVICES_ROOT, '/contabilidad')   }
