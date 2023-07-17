function path(root, sublink) {
  return `${root}${sublink}`;
};

const SERVICES_ROOT = '/servicios';

export const PATH_PAGE = {
  home: '/',
  page404: '/404'
};

export const PATH_SERVICES = {
  root: SERVICES_ROOT,
  index: path(SERVICES_ROOT, '/indice'),
  accounting: path(SERVICES_ROOT, '/contabilidad')
};
