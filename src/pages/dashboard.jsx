import MainLayout from "../component/Layouts/MainLayout";
import Card from "../component/Elements/Card";
import bills from "../data/bills";
import transactions from "../data/transaction";
import expensesBreakdowns from "../data/expense";
import { Icon } from "../component/Elements/Icon";

const DashboardPage = () => {

  const billCard = bills.map((bill) => (
    <div key={bill.id} className="lg:flex justify-between pt-3 pb-3">
      <div className="flex">
        <div className="bg-special-bg me-3 px-4 rounded-lg flex place-content-center flex-col">
          <span className="text-xs">{bill.month}</span>
          <span className="text-2xl font-bold">{bill.date}</span>
        </div>
        <div className="">
          <img className="h-6" src={`/images/${bill.logo}`} />
          <span className="font-bold">{bill.name}</span>
          <br />
          <span className="text-xs">Last Charge - {bill.lastCharge}</span>
        </div>
      </div>
      <div className="flex place-content-center flex-col">
        <span className="p-2 border rounded-lg font-bold text-center">
          ${bill.amount}
        </span>
      </div>
    </div>
  ));

  const expenseCard = expensesBreakdowns.map((expensesBreakdown) => (
    <div key={expensesBreakdown.id} className="flex pb-4 justify-between">
      <div className="flex">
        <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
          {expensesBreakdown.icon}
        </div>
        <div className="ms-4">
          <span className="text-gray-02">{expensesBreakdown.category}</span>
          <br />
          <span className="font-bold text-lg">${expensesBreakdown.amount}</span>
          <div className="flex">
            <span className="text-gray-02">
              {expensesBreakdown.percentage}%*
            </span>{" "}
            {expensesBreakdown.arrow}
          </div>
        </div>
      </div>
      <div className="flex place-content-center flex-col me-8">
        <Icon.ArrowRight />
      </div>
    </div>
  ));


  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Total Balance" />
        <Card title="Goals" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt recusandae voluptatum pariatur voluptatem tempora eos dicta est sapiente nesciunt natus, sint dolore ea cum aut nostrum voluptate? Eos, velit a." />
        <Card
          title="Upcoming Bill"
          desc={
            <div className="h-full flex flex-col justify-around">
            {billCard}
            </div>
            }
          />
        <div className="md:col-span-1">
          <Card title="Recent Transaction" />
        </div>
        <div className="md:col-span-2 flex flex-col flex-1">
          <Card title="Statistics" />
          <Card 
            variant="md:col-span-2"
            title="Expenses Breakdown"
            desc={
              <div className="h-full md:grid md:grid-cols-3">
              {expenseCard}
              </div>
            }
          />
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;