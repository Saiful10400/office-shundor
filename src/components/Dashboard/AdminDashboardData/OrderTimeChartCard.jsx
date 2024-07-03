import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector, Tooltip } from "recharts";

const data = [
  { name: "Morning", value: 400, time: "1AM - 12PM" },
  { name: "Afternoon", value: 300, time: "1PM - 5PM" },
  { name: "Night", value: 200, time: "5PM - 12AM" },
];

const OrderTimeChartCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  const renderActiveShape = (props) => {
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
    } = props;
    const RADIAN = Math.PI / 180;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >
          {`${payload.value} `}
        </text>
      </g>
    );
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { value, name, time } = payload[0].payload;
      return (
        <div
          style={{
            backgroundColor: "#37375c",
            border: "1px solid #dcdcdc",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          <p
            style={{ fontWeight: "bold", color: "#ffff", marginBottom: "5px" }}
          >{`${value} orders`}</p>
          <p
            style={{
              fontWeight: "normal",
              color: "#ffff",
              marginBottom: "5px",
            }}
          >{`${name} (${time})`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-[350px] h-[450px]  shadow rounded-xl flex flex-col gap-4 p-4 overflow-visible">
      <div className="flex justify-between">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Order Time</h3>
        </div>
        <button className="rounded-lg bg-white border text-sm text-accent h-10 px-4 hover:bg-accent hover:text-white">
          Order Report
        </button>
      </div>
      <p className="gray-description">
        Order time comparison between morning, afternoon, and night.
      </p>

      <PieChart width={350} height={300}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={150} // Adjustleftright
          cy={150} // AdjustTopBottom
          innerRadius={60}
          outerRadius={80}
          fill="#5a6acf"
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </div>
  );
};

export default OrderTimeChartCard;
