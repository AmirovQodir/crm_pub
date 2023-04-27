import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Space } from "antd";
import { ROUTE_FORGOT_PASSWORD } from "../../../../common/constants";
import { TextFieldController } from "../../../../components/inputs/text-filed-controller";
import { CheckboxController } from "../../../../components/inputs/checkbox-controller";
import {
  AUTH_FIELD_PASSWORD,
  AUTH_FIELD_REMEMBER,
  AUTH_FIELD_USER_NAME,
} from "../../constants";
import { useLogin } from "../../hooks";

import './styles.scss';


export const LoginForm: FC = () => {
  const { control, isLoading, handleLogin, contextHolder, setValue } = useLogin();
  return (
    <form onSubmit={handleLogin} className="login-form">
      <Space className="w-full" direction={"vertical"} size={"middle"}>
        <Space className="w-full" direction={"vertical"} size={"small"}>
          <TextFieldController
            placeholder="Username"
            control={control}
            name={AUTH_FIELD_USER_NAME}
          />
          <TextFieldController
            placeholder="Password"
            inputCompound={"Password"}
            control={control}
            name={AUTH_FIELD_PASSWORD}
          />
          <div className="remember-actions">
            <CheckboxController
              setValue={setValue}
              control={control}
              name={AUTH_FIELD_REMEMBER}
              label="Remember me"
            />
            <div>
              <span className="forgot-link">
                <Link to={ROUTE_FORGOT_PASSWORD}>Forgot your password?</Link>
              </span>
            </div>
          </div>
        </Space>
        {contextHolder}
        <Button
          disabled={isLoading}
          loading={isLoading}
          type="primary"
          className="button"
          htmlType="submit"
        >
          Sign in
        </Button>
      </Space>
    </form>
  );
};
