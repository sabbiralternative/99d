/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WithdrawConfirm from "./WithdrawConfirm";
import BankAccounts from "./BankAccounts";
import SelectAmount from "./SelectAmount";
import { useBankAccount } from "../../hooks/bankAccount";
import AddBank from "./AddBank";
import { setAddBank } from "../../redux/features/global/globalSlice";

const Withdraw = () => {
  const [amount, setAmount] = useState("");
  const [showBankAccount, setShowBankAccount] = useState(false);
  const [confirmWithdraw, setConfirmWithdraw] = useState(false);
  const [bank, setBank] = useState("");
  const dispatch = useDispatch();

  const { addBank } = useSelector((state) => state.global);
  const payload = {
    type: "getBankAccounts",
    status: "1",
  };
  const { data: bankData, refetch: refetchBankData } = useBankAccount(payload);

  useEffect(() => {
    if (showBankAccount && bankData?.length < 1) {
      setShowBankAccount(false);
      dispatch(setAddBank(true));
    }
  }, [bankData, showBankAccount, dispatch]);

  return (
    <div className="col-md-10 featured-box deposit-withdraw">
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
            {addBank && bankData?.length == 0 && (
              <AddBank refetchBankData={refetchBankData} />
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
