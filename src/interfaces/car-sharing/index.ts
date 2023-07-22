import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CarSharingInterface {
  id?: string;
  organization_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {};
}

export interface CarSharingGetQueryInterface extends GetQueryInterface {
  id?: string;
  organization_id?: string;
  user_id?: string;
}
