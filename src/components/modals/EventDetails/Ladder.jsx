import { useRef } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";

const Ladder = ({ setLadderData, ladderData }) => {
  const ladderRef = useRef();

  useCloseModalClickOutside(ladderRef, () => {
    setLadderData([]);
  });
  return (
    <>
      <div className="overlay-container" aria-live="polite">
        <div
          id="toast-container"
          className="toast-top-center toast-container"
        ></div>
      </div>
      <div className="modal-backdrop fade in show"></div>
      <div
        role="dialog"
        className="modal fade show"
        style={{ display: "block" }}
        aria-modal="true"
      >
        <div
          className="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
        ></div>
        <div role="document" className="modal-dialog">
          <div className="modal-content" ref={ladderRef}>
            <div className="modal-body">
              <button
                type="button"
                data-dismiss="modal"
                aria-label="Close"
                className="close"
                style={{
                  top: "-13px",
                  right: "-8px",
                  position: "relative",
                  fontSize: "15px",
                  opacity: 1,
                }}
              >
                <i className="fa fa-close"></i>
              </button>
              <div className="table-responsive">
                <table
                  id="btDataTable"
                  className="table table-bordered btDataTable mb-0"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th>RUN</th>
                      <th>POSITION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ladderData?.map((item, i) => {
                      return (
                        <tr key={i} id="goto-177" className="ng-star-inserted">
                          <td>
                            {item?.start}-{item?.end}
                          </td>
                          <td
                            className={` ${
                              item?.exposure > 0 ? "text-green" : "text-red"
                            }`}
                          >
                            {item?.exposure}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div
          className="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
        ></div>
      </div>
    </>
  );
};

export default Ladder;
