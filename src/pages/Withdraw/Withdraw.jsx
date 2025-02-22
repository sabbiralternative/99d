/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import WithdrawConfirm from "./WithdrawConfirm";
import BankAccounts from "./BankAccounts";
import SelectAmount from "./SelectAmount";
import { useBankAccount } from "../../hooks/bankAccount";
import AddBank from "./AddBank";

const Withdraw = () => {
  const [amount, setAmount] = useState("");
  const [showBankAccount, setShowBankAccount] = useState(false);
  const [confirmWithdraw, setConfirmWithdraw] = useState(false);
  const [bank, setBank] = useState("");

  const { addBank, setAddBank } = useSelector((state) => state.global);
  const payload = {
    type: "getBankAccounts",
    status: "1",
  };
  const { data: bankData, refetch: refetchBankData } = useBankAccount(payload);

  useEffect(() => {
    if (showBankAccount && bankData?.length < 1) {
      setShowBankAccount(false);
      setAddBank(true);
    }
  }, [bankData, setAddBank, showBankAccount]);

  return (
    <div className="col-md-10 featured-box">
      <div className="bankingUi">
        <div className="container-fluid">
          <div className="row">
            {!showBankAccount && !confirmWithdraw && (
              <SelectAmount
                setShowBankAccount={setShowBankAccount}
                setAmount={setAmount}
                amount={amount}
              />
            )}
            {showBankAccount && bankData?.length > 0 && (
              <BankAccounts
                refetchBankData={refetchBankData}
                setAmount={setAmount}
                bankData={bankData}
                setConfirmWithdraw={setConfirmWithdraw}
                setShowBankAccount={setShowBankAccount}
                bank={bank}
                setBank={setBank}
              />
            )}
            {addBank && bankData?.length == 1 && (
              <AddBank
                setAddBank={setAddBank}
                refetchBankData={refetchBankData}
              />
            )}
            {confirmWithdraw && (
              <WithdrawConfirm
                amount={amount}
                bank={bank}
                setAmount={setAmount}
                setShowBankAccount={setShowBankAccount}
                setConfirmWithdraw={setConfirmWithdraw}
                setBank={setBank}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
