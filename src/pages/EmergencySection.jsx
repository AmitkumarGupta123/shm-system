import emergencyStaff from "../data/emergencyStaff";

function EmergencySection() {
  return (
    <div className="container">
      <h1 className="title">Emergency Staff / Doctors</h1>
      <div className="emergency-grid">
        {emergencyStaff.map((staff, index) => (
          <div key={index} className="emergency-card">
            <h3>{staff.name}</h3>
            <p><b>Role:</b> {staff.role}</p>
            <p><b>Department:</b> {staff.department}</p>
            <p><b>Floor:</b> {staff.floor}</p>
            <p><b>Contact:</b> {staff.contact}</p>
            <p><b>Availability:</b> {staff.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmergencySection;