import { useChangePasswordMutation } from "../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useLanguage from "../../hooks/use-language";
import { LanguageKey } from "../../const";

const ChangePassword = () => {
  const { getLanguage } = useLanguage();
  const [handleChangePassword] = useChangePasswordMutation();

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async ({ password, newPassword, newPasswordConfirm }) => {
    const payload = {
      oldPassword: password,
      password: newPassword,
      passVerify: newPasswordConfirm,
      nonce: crypto.randomUUID(),
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
              <h4 className="mb-0">
                {getLanguage(LanguageKey.CHANGE_PASSWORD)}
              </h4>
            </div>
            <div className="card-body container-fluid container-fluid-5">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="ng-untouched ng-pristine ng-invalid"
              >
                <div className="row row5 mt-2">
                  <div className="col-4">
                    <div className="form-group">
                      <label>{getLanguage(LanguageKey.OLD_PASSWORD)}</label>
                      <input
                        {...register("password", { required: true })}
                        type="password"
                        className="form-control ng-untouched ng-pristine ng-invalid"
                      />
                    </div>
                    <div className="form-group">
                      <label>{getLanguage(LanguageKey.NEW_PASSWORD)}</label>
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
                      <label>{getLanguage(LanguageKey.CONFIRM_PASSWORD)}</label>
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
                      {getLanguage(LanguageKey.CHANGE_PASSWORD)}
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
