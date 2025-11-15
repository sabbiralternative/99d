import "./withdraw.css";
import { useState } from "react";
import ChooseAmount from "./ChoseAmount";
import BankAccount from "./BankAccount";

const Withdraw = () => {
  const [amount, setAmount] = useState("");
  const [tab, setTab] = useState("choseAmount");

  return (
    <div className="col-md-10 featured-box deposit-withdraw">
      <div className="bankingUi">
        <div className="container-fluid">
          <div className="row">
            <div className=" withdraw-main-wrapper" style={{ width: "100%" }}>
              {tab === "choseAmount" && (
                <ChooseAmount
                  amount={amount}
                  setAmount={setAmount}
                  setTab={setTab}
                />
              )}
              {tab === "bank" && <BankAccount amount={amount} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
