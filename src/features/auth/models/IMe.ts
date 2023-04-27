import { RoleTypeEnums } from "../../../common/constants";

export interface IMe {
  username?: string;
  last_name?: string;
  first_name: string;
  is_active?: boolean;
  role: RoleTypeEnums
}
