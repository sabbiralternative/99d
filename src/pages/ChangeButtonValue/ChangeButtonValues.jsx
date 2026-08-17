import toast from "react-hot-toast";
import { useEditButtonValuesMutation } from "../../redux/features/events/events";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useLanguage from "../../hooks/use-language";
import { LanguageKey } from "../../const";

const ChangeButtonValues = () => {
  const { getLanguage } = useLanguage();
  const [editButtonValue] = useEditButtonValuesMutation();
  const navigate = useNavigate();
  const stakes = JSON.parse(localStorage.getItem("buttonValue"));
  const { handleSubmit, register, watch } = useForm({
    defaultValues: {
      buttonGameValues: stakes,
    },
  });

  const buttonGameValues = watch("buttonGameValues");

  const onSubmit = async () => {
    const payload = {
      game: buttonGameValues,
    };

    const res = await editButtonValue(payload).unwrap();
    if (res.success) {
      toast.success(res?.result?.message);
      localStorage.removeItem("buttonValue");
      const gameButtonsValues = buttonGameValues;
      localStorage.setItem("buttonValue", JSON.stringify(gameButtonsValues));
      navigate("/");
    }
  };

  return (
    <div className="col-md-10 featured-box">
      <div>
        <div>
          <div className="card">
            <div className="card-header">
              <h4 className="mb-0">{getLanguage(LanguageKey.EDIT_STAKE)}</h4>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body container-fluid container-fluid-5 button-value"
            >
              <div className="row row5 mb-1">
                <div className="col-3">
                  <div className="button-title">
                    <span>
                      <b>{getLanguage(LanguageKey.STAKE_LABEL)}</b>
                    </span>
                  </div>
                </div>
                <div className="col-3">
                  <div className="button-title">
                    <span>
                      <b>{getLanguage(LanguageKey.STAKE_VALUE)}</b>
                    </span>
                  </div>
                </div>
              </div>
              {stakes?.map((_, idx) => {
                return (
                  <div key={idx} className="row row5 mb-1">
                    <div className="col-3">
                      <div className="form-group mb-0">
                        <input
                          {...register(`buttonGameValues.${idx}.label`)}
                          type="text"
                          className="form-control ng-untouched ng-pristine ng-valid"
                        />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="form-group mb-0">
                        <input
                          {...register(`buttonGameValues.${idx}.value`)}
                          type="number"
                          className="form-control ng-untouched ng-pristine ng-valid"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="row row5 mt-2">
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    {getLanguage(LanguageKey.UPDATE)}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeButtonValues;
