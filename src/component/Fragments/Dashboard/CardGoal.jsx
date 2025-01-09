import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../../Elements/Card";
import { Icon } from "../../Elements/Icon";
import CompositionExample from "../../Elements/GaugeChart";

const CardGoal = () => {
    const [goals, setGoals] = useState({ presentAmount: 0, targetAmount: 0 });
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const chartValue = (goals.presentAmount * 100) / goals.targetAmount;
    const value = (goals.presentAmount * 100) / goals.targetAmount;

    const getData = async () => {
        try {
            const refreshToken = localStorage.getItem("refreshToken");
            if (!refreshToken) throw new Error("No refresh token available.");

            const response = await axios.get(
                "https://jwt-auth-eight-neon.vercel.app/goals",
                {
                    headers: { Authorization: `Bearer ${refreshToken}` },
                }
            );

            setGoals({
                presentAmount: response.data.data[0].present_amount,
                targetAmount: response.data.data[0].target_amount,
            });
        } catch (error) {
            if (error.response) {
                if (error.response.status == 401) {
                    setOpen(true);
                    setMsg({
                        severity: "error",
                        desc: "Session Has Expired. Please Login.",
                    });

                    setIsLoggedIn(false);
                    setName("");

                    localStorage.removeItem("refreshToken");
                    navigate("/login");
                } else {
                    console.log(error.response);
                }
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    if (isLoading) {
        return (
          <Card
            title="Goals"
            desc={
              <div className="flex justify-center items-center h-full">
                <div className="loader animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-primary"></div>
              </div>
            }
          />
        );
      }
    
      if (!goals) {
        return <Card title="Goals" desc={<p className="text-center text-red-500">Failed to load data.</p>} />;
      }

    // Log for debugging
    

    const formattedDate = new Date().toLocaleString("default", {
        month: "short",
        year: "numeric",
    });

    return (
        <Card
            title="Goals"
            desc={
                <div className="p-2">
                    {error && <div className="text-red-500">{error}</div>}
                    <div className="flex justify-between">
                        <div className="flex">
                            <span className="text-2xl font-bold me-4 self-center">
                                ${goals.presentAmount.toLocaleString()}
                            </span>
                            <div className="p-2 bg-gray-05 rounded-md box-border">
                                <Icon.Edit />
                            </div>
                        </div>
                        <div>{formattedDate}</div>
                    </div>
                    <div className="border-b-2 my-4"></div>
                    <div className="flex justify-between">
                        <div>
                            <GoalDetail
                                icon={<Icon.Award />}
                                label="Target Achieved"
                                amount={goals.targetAmount}
                            />
                            <GoalDetail
                                icon={<Icon.Target />}
                                label="This Month Target"
                                amount={goals.presentAmount}
                            />
                        </div>
                        <div className="ms-4 text-center">
                            <CompositionExample desc={chartValue} />
                            <div className="flex justify-between">
                                <span className="text-gray-03">$0</span>
                                <span className="font-bold text-2xl">10K</span>
                                <span className="text-gray-03">$20K</span>
                            </div>
                            <div className="mt-2">Target vs Achievement</div>
                        </div>
                    </div>
                </div>
            }
        />
    );
};

const GoalDetail = ({ icon, label, amount }) => (
    <div className="flex mt-3 mb-10">
        <div>{icon}</div>
        <div className="ms-2">
            <span className="text-gray-02">{label}</span>
            <br />
            <span className="font-bold text-xl">${amount.toLocaleString()}</span>
        </div>
    </div>
);

export default CardGoal;