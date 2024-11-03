import CardB from "../component/Elements/CardB";
import MainLayout from "../component/Layouts/MainLayout";

const BalancePage = () => {
  return (
    <MainLayout type="balance">
      <h1 className="text-gray-500 text-2xl mb-4">Balances</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <CardB cardTitle="Credit Card" cardType="Master Card" logoSrc="/images/mc.png" accountNumber="1234 5678 9012 8***" totalAmount="$25,000" />
        <CardB cardTitle="Checking" cardType="All Bank Ltd" logoSrc="/images/visa.png" accountNumber="693 456 69 9****" totalAmount="$25,000" />
        <CardB cardTitle="Savings" cardType="Brsc Bank Ltd" accountNumber="133 456 886 8***" totalAmount="$25,000" /> {/* logoSrc not passed */}
      </div>
    </MainLayout>
  );
};

export default BalancePage;
