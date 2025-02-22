import { useChangePasswordMutation } from "../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ChangePassword = () => {
  const [handleChangePassword] = useChangePasswordMutation();

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async ({ password, newPassword, newPasswordConfirm }) => {
    const payload = {
      oldPassword: password,
      password: newPassword,
      passVerify: newPasswordConfirm,
    };

    const res = await handleChangePassword(payload).unwrap();
    if (res.success) {
      toast.success(res?.result?.message);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      toast.error(res?.error?.errorMessage);
    }
  };
  return (
    <div className="col-md-10 featured-box">
      <div>
        <div>
          <div className="card">
            <div className="card-header">
              <h4 className="mb-0">Change Password</h4>
            </div>
            <div className="card-body container-fluid container-fluid-5">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="ng-untouched ng-pristine ng-invalid"
              >
                <div className="row row5 mt-2">
                  <div className="col-4">
                    <div className="form-group">
                      <label>Current Password</label>
                      <input
                        {...register("password", { required: true })}
                        type="password"
                        className="form-control ng-untouched ng-pristine ng-invalid"
                      />
                    </div>
                    <div className="form-group">
                      <label>New Password</label>
                      <input
                        {...register("newPassword", {
                          required: true,
                          minLength: 5,
                        })}
                        type="password"
                        className="form-control ng-untouched ng-pristine ng-invalid"
                      />
                    </div>
                    <div className="form-group">
                      <label>Confirm New Password</label>
                      <input
                        {...register("newPasswordConfirm", {
                          required: true,
                          minLength: 5,
                        })}
                        type="password"
                        className="form-control ng-untouched ng-pristine ng-invalid"
                      />
                    </div>
                  </div>
                </div>
                <div className="row row5 mt-2">
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Change Password
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
