// import { useAppContext } from './AppContext';

import { useSelector } from 'react-redux';
import { RootState } from './store/store';

/* type Props = {
  permissions: undefined | string[];
}; */

export function Content() {
  // useAppContext();
  // const { permissions } = useAppContext();
  const permissions = useSelector((state: RootState) => state.user.permissions);

  if (permissions === undefined) {
    return null;
  }

  return permissions.includes('admin') ? (
    <p className="mt-4 text-l text-center">Some important stuff that only an admin can do</p>
  ) : (
    <p className="mt-4 text-l text-center">Insufficient permissions</p>
  );
}
