import {Item, ItemShape } from "./Transaction.styled"

export const TransactionItem = ({ transactions: { id, type, amount, currency } }) => {
    return (
        <Item>
      <ItemShape>{type}</ItemShape>
      <ItemShape>{amount}</ItemShape>
      <ItemShape>{currency}</ItemShape>
        </Item>
    )
};