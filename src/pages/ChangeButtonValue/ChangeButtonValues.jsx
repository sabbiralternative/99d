import toast from "react-hot-toast";
import { useEditButtonValuesMutation } from "../../redux/features/events/events";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const ChangeButtonValues = () => {
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
              <h4 className="mb-0">Change Button Values</h4>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body container-fluid container-fluid-5 button-value"
            >
              <div className="row row5 mb-1">
                <div className="col-3">
                  <div className="button-title">
                    <span>
                      <b>Price Label</b>
                    </span>
                  </div>
                </div>
                <div className="col-3">
                  <div className="button-title">
                    <span>
                      <b>Price Value</b>
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
                    Update
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
