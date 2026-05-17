import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

function DashboardCharts() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetchLogs();
  }, []);

  async function fetchLogs() {
    try {
      const response = await axios.get(
        "http://localhost:3000/recovery-logs"
      );

      setLogs(response.data);
    } catch (error) {
      console.error("Error fetching recovery logs:", error);
    }
  }

  const chartData = logs.map((log) => ({
    date: log.date,
    sleep: Number(log.sleep_hours),
    stress: Number(log.stress_level),
    energy: Number(log.energy_level),
  }));

  return (
    <section className="card">
      <h2>Your Recovery Dashboard</h2>
      <p className="muted">
        Visualize patterns between sleep, energy, and stress over time.
      </p>

      <div style={{ width: "100%", height: 350, marginTop: "2rem" }}>
        <h3>Sleep vs Energy</h3>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="date" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="sleep"
              stroke="#facc15"
              strokeWidth={3}
            />

            <Line
              type="monotone"
              dataKey="energy"
              stroke="#f97316"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div style={{ width: "100%", height: 350, marginTop: "3rem" }}>
        <h3>Stress Levels</h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="date" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="stress" fill="#f97316" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default DashboardCharts;