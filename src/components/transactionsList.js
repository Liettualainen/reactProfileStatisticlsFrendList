import { TransactionItem } from './transaction'

const profileStyle = {
  height: 650,
  width: 650,
  marginTop: 60,
  display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
  color: '#010101',
  border: 'solid',
  borderWidth: 10,
  borderRadius: 25,
  borderColor: 'green',
  backgroundColor: 'rgb(240, 241, 242)',
}

export const TransactionList = ({ transactions }) => {
  return (
    <table className="transaction-history" style={profileStyle}>
        <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
    <tbody>
        {transactions.map(transactions => (
             <tr key={transactions.id}>
             <TransactionItem transactions={transactions} />
           </tr>
      ))}
  </tbody>
</table>
  );
};