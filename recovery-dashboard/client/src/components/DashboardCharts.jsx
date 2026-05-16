import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const sampleData = [
  { date: "Mon", sleep: 7, energy: 4, stress: 2 },
  { date: "Tue", sleep: 6, energy: 3, stress: 4 },
  { date: "Wed", sleep: 8, energy: 5, stress: 2 },
  { date: "Thu", sleep: 5.5, energy: 2, stress: 5 },
  { date: "Fri", sleep: 7.5, energy: 4, stress: 3 },
];

function DashboardCharts() {
  return (
    <section className="card">
      <h2>Your Recovery Dashboard</h2>
      <p className="muted">
        Visualize patterns between sleep, energy, and stress over time.
      </p>

      <div className="summary-grid">
        <div className="summary-card">
          <h3>6.8 hrs</h3>
          <p>Average Sleep</p>
        </div>

        <div className="summary-card">
          <h3>5 / 5</h3>
          <p>Highest Stress</p>
        </div>

        <div className="summary-card">
          <h3>2 / 5</h3>
          <p>Lowest Energy</p>
        </div>
      </div>

      <div className="chart-box">
        <h3>Sleep vs Energy</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={sampleData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sleep" stroke="#ffb703" strokeWidth={3} />
            <Line type="monotone" dataKey="energy" stroke="#fb8500" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-box">
        <h3>Stress Level</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={sampleData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="stress" fill="#ff4d00" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default DashboardCharts;