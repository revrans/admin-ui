import MainLayout from "../component/Layouts/MainLayout";
import Card from "../component/Elements/Card";
const DashboardPage = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Total Balance" />
        <Card title="Goals" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt recusandae voluptatum pariatur voluptatem tempora eos dicta est sapiente nesciunt natus, sint dolore ea cum aut nostrum voluptate? Eos, velit a." />
        <Card title="Upcoming Bill" />
        <div className="md:col-span-1">
          <Card title="Recent Transaction" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt recusandae voluptatum pariatur voluptatem tempora eos dicta est sapiente nesciunt natus, sint dolore ea cum aut nostrum voluptate? Eos, velit a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt recusandae voluptatum pariatur voluptatem tempora eos dicta est sapiente nesciunt natus, sint dolore ea cum aut nostrum voluptate? Eos, velit a." />
        </div>
        <div className="md:col-span-2 flex flex-col flex-1">
          <Card title="Statistics" />
          <Card title="Expenses Breakdown" />
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;