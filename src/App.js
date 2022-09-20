import image from "./assets/logo.svg";
import Chart from "./components/Chart";

function App() {
  return (
    <div className="w-full min-h-screen flex justify-center font-DMSans items-center bg-cream">
      <div className="w-[35rem] sm:w-[40rem] outline-2 my-16">
        <div className="w-full bg-softRed rounded-2xl">
          <div className="flex justify-between items-center p-8">
            <div className="text-white">
              <h1 className="text-xl mb-2">My balance</h1>
              <span className="text-4xl font-bold">$921.48</span>
            </div>
            <div>
              <img src={image} alt="logo" />
            </div>
          </div>
        </div>
        <div className="p-8 mt-[2rem] bg-white rounded-2xl ">
          <div className="">
            <h1 className="text-darkBrown text-4xl font-bold py-3">
              {" "}
              Spending - Last 7 days
            </h1>
            <div className="mb-8">
              <Chart />
            </div>
          </div>
          <div className="py-7 border-top">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-mediumBrown text-2xl mb-6">
                  Total this month
                </h1>
                <span className="text-darkBrown text-5xl font-bold">
                  $478.33
                </span>
              </div>
              <div>
                <span className="text-darkBrown text-2xl font-bold text-right block">
                  +2.4%
                </span>
                <h1 className="text-mediumBrown text-2xl font-[400]">
                  from last month
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
