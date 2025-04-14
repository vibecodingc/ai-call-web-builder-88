
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";

const data = [
  { name: 'Mon', calls: 120 },
  { name: 'Tue', calls: 140 },
  { name: 'Wed', calls: 190 },
  { name: 'Thu', calls: 150 },
  { name: 'Fri', calls: 180 },
  { name: 'Sat', calls: 80 },
  { name: 'Sun', calls: 70 },
];

export function CallStatsChart() {
  return (
    <div className="h-[300px] w-full">
      <ChartContainer
        config={{
          calls: {
            theme: {
              light: "#3B82F6",
              dark: "#3B82F6",
            },
            label: "Calls",
          },
        }}
      >
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#94A3B8" />
          <YAxis stroke="#94A3B8" />
          <ChartTooltip />
          <Bar
            dataKey="calls"
            radius={[4, 4, 0, 0]}
            className="fill-[--color-calls]"
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
