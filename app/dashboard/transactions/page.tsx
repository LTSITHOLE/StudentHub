import DashboardLayout from '../../components/DashboardLayout';

const Transactions = () => {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold">Payment Transactions</h2>
      <p className="mt-4">Students can view their payment history here.</p>
    </DashboardLayout>
  );
};

export default Transactions;
