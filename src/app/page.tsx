import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import { ChartPieDonutText } from "@/components/AppPieChartTest";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Latest Transactions" />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        <ChartPieDonutText />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <TodoList />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2">
        <AppAreaChart />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        {" "}
        <CardList title="Popular Contents" />
      </div>
    </div>
  );
}
