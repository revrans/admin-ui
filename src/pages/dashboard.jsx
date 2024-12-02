import Card from "../component/Elements/Card";
import MainLayout from "../component/Layouts/MainLayout";
import CardBill from "../component/Fragments/Dashboard/CardBill";
import CardExpenseBreakdown from "../component/Fragments/Dashboard/CardExpenseBreakdown";
import CardTransaction from "../component/Fragments/Dashboard/CardTransaction";
import CardBalance from "../component/Fragments/Dashboard/CardBalance";

const DashboardPage = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <CardBalance/>
        <Card title="Goals" />
        <CardBill />
        <CardTransaction />
        <Card variant="md:col-span-2 flex flex-col flex-1" title="Statistics" />
        <CardExpenseBreakdown />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;