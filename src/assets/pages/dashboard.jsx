import Card from "../components/Elements/Card/Index";
import MainLayout from "../components/Layouts/MainLayout";

const DashboardPage = () => {
  return (
    <MainLayout type="dashboard">
      <main className="px-6 py-4">
  {/* top content start*/}
  <div className="mb-8 sm:flex sm:gap-6">
    <div className="sm:w-1/3">
      <Card/>
    </div>
    <div className="sm:w-1/3">
      <Card/>
    </div>
    <div className="sm:w-1/3">
      <Card/>
    </div>
  </div>
  {/* top content end*/}
  {/* bottom content start*/}
  <div className="sm:flex sm:gap-6">
    <div className="m:w-1/3">
    <Card/>
    </div>
    <div className="m:w-2/3">
      <div className="mb-8 ">
      <Card/>
      </div>
      <div className="">
        <Card/>
      </div>
    </div>
  </div>
  {/* bottom content end*/}
</main>

    </MainLayout>
  );
};

export default DashboardPage;