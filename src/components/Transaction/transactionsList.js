import { TransactionItem } from './transaction'
import { ProfileStyle, HaderColumn, HaderItems,HaderItem, MainItems, MainItem} from "./Transaction.styled"


export const TransactionList = ({ transactions }) => {
  return (
    <ProfileStyle>
      <h2>TRANSACTIONS HISTORY</h2>
      <table>     
      <HaderColumn>
    <HaderItems>
      <HaderItem>Type</HaderItem>
      <HaderItem>Amount</HaderItem>
      <HaderItem>Currency</HaderItem>
    </HaderItems>
  </HaderColumn>
    <MainItems>
        {transactions.map(transactions => 
             <MainItem key={transactions.id}>
             <TransactionItem transactions={transactions} />
           </MainItem>
      )}
  </MainItems>
      </table>
   
</ProfileStyle>
  );
};