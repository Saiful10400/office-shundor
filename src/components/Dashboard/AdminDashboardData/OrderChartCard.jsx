import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "01", currentWeek: 10, previousWeek: 8 },
  { name: "02", currentWeek: 12, previousWeek: 9 },
  { name: "03", currentWeek: 8, previousWeek: 15 },
  { name: "04", currentWeek: 15, previousWeek: 11 },
  { name: "05", currentWeek: 9, previousWeek: 5 },
  { name: "06", currentWeek: 11, previousWeek: 13 },
  { name: "07", currentWeek: 12, previousWeek: 14 },
];

const OrderChartCard = () => {
  return (
    <div className="w-[350px] h-[450px]   shadow rounded-xl flex flex-col gap-4 p-4">
      <div className="flex justify-between">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Order</h3>
          <h2 className="text-3xl font-semibold">2563</h2>
          <p className="gray-description">
            <span className="text-red-600">2% down</span> from last week
          </p>
        </div>
        <button className="rounded-lg bg-white border text-sm  text-accent h-10 px-4 hover:bg-accent hover:text-white">
          Order Report
        </button>
      </div>
      <p className="gray-description">Order comparison of last 2 weeks</p>
      <LineChart
        width={330}
        height={200}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        isAnimationActive={false}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
        <Line
          type="linear"
          dataKey="currentWeek"
          stroke="#8884d8"
          strokeWidth={3}
          dot={false}
        />
        <Line
          type="linear"
          dataKey="previousWeek"
          stroke="#b5bbc7"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </div>
  );
};

export default OrderChartCard;
