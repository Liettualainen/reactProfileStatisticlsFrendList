import { ItemShape } from "./Transaction.styled"

export const TransactionItem = ({ transactions: { id, type, amount, currency } }) => {
    return (
        <>
      <ItemShape>{type}</ItemShape>
      <ItemShape>{amount}</ItemShape>
      <ItemShape>{currency}</ItemShape>
        </>
    )
};