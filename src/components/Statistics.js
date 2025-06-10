import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Area, AreaChart } from 'recharts';

const data = [
    { name: '25ms', uv: 1 },
    { name: '50ms', uv: 1 },
    { name: '100ms', uv: 3.5 },
    { name: '125ms', uv: 7.5 },
    { name: '150ms', uv: 39.5 },
    { name: '175ms', uv: 108.5 },
    { name: '200ms', uv: 131.5 },
    { name: '225ms', uv: 120.5 },
    { name: '250ms', uv: 83 },
    { name: '275ms', uv: 48 },
    { name: '300ms', uv: 25.5 },
    { name: '325ms', uv: 15 },
    { name: '375ms', uv: 7 },
    { name: '450ms', uv: 3.5 },

];

const StatsAndInfo = () => (
    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start justify-center mt-4 px-4">

        {/* Statistics Card with plot */}
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition-shadow w-full max-w-lg">
            <h2 className="text-xl font-bold text-blue-900 mt-3">Statistics</h2>
            <div className="mt-4">
                <LineChart width={300} height={150} data={data}>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#3b82f6" fill="#1e40af" />
                    <Line type="monotone" dataKey="uv" stroke="#3b82f6" />
                </LineChart>
            </div>
        </div>

        {/* About Test Card */}
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition-shadow w-full max-w-lg">
            <h2 className="text-xl font-bold mb-2 text-blue-900">About the Test</h2>
            <p className="text-base mb-2 text-blue-900">
                This simple tool measures your reaction time.
                The blink of an eye is around <strong>100 ms</strong>, and peak human reaction time is around <strong>200 ms</strong> with the average (median) reaction time of about <strong>270 ms</strong>.
                <br /><br />
                However, this is too slow compared to the <strong>ultra-low latency infrastructure</strong> available at <strong>Deutsche Bank</strong>.
            </p>
        </div>
    </div>
);

export default StatsAndInfo;