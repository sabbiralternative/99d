import { useState } from "react";
import AmountBox from "../../components/modules/Deposit/AmountBox";
import BankAccountUploadTransaction from "../../components/modules/Deposit/BankAccountUploadTransaction";
import DepositTransaction from "../../components/modules/Deposit/DepositTransaction";

const Deposit = () => {
  const [tab, setTab] = useState("amountBox");
  const [amount, setAmount] = useState(null);

  return (
    <div className="col-md-10 featured-box">
      <div className="bankingUi">
        <div className="container-fluid">
          <div className="row">
            {tab === "amountBox" ? (
              <AmountBox
                amount={amount}
                setAmount={setAmount}
                setTab={setTab}
              />
            ) : (
              <BankAccountUploadTransaction amount={amount} setTab={setTab} />
            )}

            <DepositTransaction />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
