import { useState } from "react";
import axios from "axios";

function RecoveryForm() {
  const [formData, setFormData] = useState({
    date: "",
    sleep_hours: "",
    soreness_level: 3,
    stress_level: 3,
    energy_level: 3,
    hydration_level: 3,
    notes: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/recovery-logs",
        formData
      );

      console.log(response.data);

      alert("Recovery log saved!");

      setFormData({
        date: "",
        sleep_hours: "",
        soreness_level: 3,
        stress_level: 3,
        energy_level: 3,
        hydration_level: 3,
        notes: "",
      });
    } catch (error) {
      console.error(error);

      alert("Could not save recovery log yet. Backend may not be running.");
    }
  }

  return (
    <section className="card">
      <h2>Log Today’s Recovery</h2>

      <p className="muted">
        Track how your body feels after training, school, and competition.
      </p>

      <form onSubmit={handleSubmit}>
        <label>Date</label>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label>Sleep Hours</label>

        <input
          type="number"
          name="sleep_hours"
          value={formData.sleep_hours}
          onChange={handleChange}
          min="0"
          max="14"
          step="0.5"
          required
        />

        <label>
          Soreness Level: {formData.soreness_level}
        </label>

        <input
          type="range"
          name="soreness_level"
          min="1"
          max="5"
          value={formData.soreness_level}
          onChange={handleChange}
        />

        <label>
          Stress Level: {formData.stress_level}
        </label>

        <input
          type="range"
          name="stress_level"
          min="1"
          max="5"
          value={formData.stress_level}
          onChange={handleChange}
        />

        <label>
          Energy Level: {formData.energy_level}
        </label>

        <input
          type="range"
          name="energy_level"
          min="1"
          max="5"
          value={formData.energy_level}
          onChange={handleChange}
        />

        <label>
          Hydration Level: {formData.hydration_level}
        </label>

        <input
          type="range"
          name="hydration_level"
          min="1"
          max="5"
          value={formData.hydration_level}
          onChange={handleChange}
        />

        <label>Notes</label>

        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Optional: practice, travel, soreness, mood..."
        />

        <button type="submit">
          Save Recovery Log
        </button>
      </form>
    </section>
  );
}

export default RecoveryForm;