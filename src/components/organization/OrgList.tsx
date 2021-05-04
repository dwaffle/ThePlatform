import { atom, useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { IOrganization } from '../../../services/crud-server/src/models/organization';
import { IUser } from '../../../services/crud-server/src/models/user';
import api from '../../api';

export const orgListState = atom({
  key: 'orgList',
  default: [] as IOrganization[],
});

export const orgWithUsers = atom({
  key: 'orgWithUsers',
  default: [] as IUser[],
});

export function UseOrganizationList(orgId?: number) {
  const [orgList, setOrgList] = useRecoilState<IOrganization[]>(orgListState);

  const [usersInOrg, setUserList] = useRecoilState<IUser[]>(orgWithUsers);

  useEffect(() => {
    api.organization
      .get()
      .then((response) => {
        setOrgList(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }, []);

  useEffect(() => {
    const request = {
      id: orgId,
    };
    api.orgs
      .post(request)
      .then((response) => {
        setUserList(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }, []);

  return {
    orgList,
    setOrgList,
  };
}
