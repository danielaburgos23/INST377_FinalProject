import RecoveryForm from "../components/RecoveryForm";
import DashboardCharts from "../components/DashboardCharts";
import EmailValidation from "../components/EmailValidation";

function Home() {
  return (
    <main className="page">
      <section className="hero">
        <h1>Track recovery. Find patterns. Perform better.</h1>
        <p>
          A recovery dashboard built for student-athletes to log sleep, stress,
          soreness, energy, and hydration over time.
        </p>
      </section>

      <section className="grid">
        <div>
          <RecoveryForm />
          <EmailValidation />
        </div>

        <DashboardCharts />
      </section>
    </main>
  );
}

export default Home;