import MainLayout from "../component/Layouts/MainLayout";
import Card from "../component/Elements/Card";


const ExpensesPage = () => {
    return (
        <MainLayout type="expenses">
        <div className="">
        <h1 className="text-1g text-gray-02 mb-4">Expenses Comparison</h1>
        <Card title="" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt recusandae voluptatum pariatur voluptatem tempora eos dicta est sapiente nesciunt natus, sint dolore ea cum aut nostrum voluptate? Eos, velit a." />
        </div>
        <h1 className="text-1g text-gray-02 mb-4">Expenses Breakdown</h1>
        <div className="md:grid md:grid-cols-3 md:gap-x-6 ">
        <Card title="" desc=""/>
        <Card title="" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt recusandae voluptatum pariatur voluptatem tempora eos dicta est sapiente nesciunt natus, sint dolore ea cum aut nostrum voluptate? Eos, velit a." />
        <Card title="" desc=""/>
        <Card title="" desc=""/>
        <Card title="" desc=""/>
        <Card title="" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt recusandae voluptatum pariatur voluptatem tempora eos dicta est sapiente nesciunt natus, sint dolore ea cum aut nostrum voluptate? Eos, velit a." />
        </div>
        </MainLayout>
      );
    };
export default ExpensesPage