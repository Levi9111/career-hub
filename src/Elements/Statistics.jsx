import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Assignment 1",
    pv: 60,
    amt: 60,
  },
  {
    name: "Assignment 2",
    pv: 60,
    amt: 60,
  },
  {
    name: "Assignment 3",
    pv: 55,
    amt: 55,
  },
  {
    name: "Assignment 4",
    pv: 58,
    amt: 58,
  },
  {
    name: "Assignment 5",
    pv: 38,
    amt: 38,
  },
  {
    name: "Assignment 6",
    pv: 60,
    amt: 60,
  },
  {
    name: "Assignment 7",
    pv: 60,
    amt: 60,
  },
];

export default function Statistics() {
  return (
    <div className="w-full bg-gray-100">
      <h3 className="text-center py-8 text-4xl font-semibold text-gray-600 underline italic">
        Assignment marks Chart
      </h3>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
        className="mx-auto mb-5"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="amt"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
      </AreaChart>
    </div>
  );
}
