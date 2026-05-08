const WHATSAPP_NUMBER = "919303214285";
const CLINIC_NAME = "Skin Care Clinic";
const DOCTOR_NAME = "Dr. Niyaz Ahmed";

const mapQuery = "Sahu Kabadi, Punjabi Gurudwara Road, Gurunanak Ward, Qazi Mohalla, Seoni, Madhya Pradesh 480661";
const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

function buildWhatsappUrl() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const concern = document.getElementById("concern").value.trim();

  const formattedDate = date ? new Date(date + "T00:00:00").toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "-";
  const formattedTime = time || "-";

  const message = [
    `Appointment Request for ${DOCTOR_NAME}`,
    `Name: ${name || "-"}`,
    `Phone: ${phone || "-"}`,
    `Date: ${formattedDate}`,
    `Time: ${formattedTime}`,
    `Concern: ${concern || "-"}`,
    `Clinic: ${CLINIC_NAME}, Seoni`
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function setWhatsAppLinks() {
  const defaultText = encodeURIComponent("Hello, I want to book an appointment at Skin Care Clinic, Seoni.");
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${defaultText}`;
  document.getElementById("floatingWhatsapp").href = url;
}

document.getElementById("appointmentForm").addEventListener("submit", (e) => {
  e.preventDefault();
  window.open(buildWhatsappUrl(), "_blank", "noopener,noreferrer");
});

document.getElementById("mapsLink").href = mapsLink;
document.getElementById("floatingWhatsapp").textContent = "WhatsApp";
setWhatsAppLinks();

// Optional subtle entrance animation
window.addEventListener("load", () => {
  document.querySelectorAll(".hero-copy, .hero-card, .info-card, .address-box").forEach((el, i) => {
    el.animate(
      [
        { opacity: 0, transform: "translateY(18px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      { duration: 700 + i * 80, easing: "cubic-bezier(.2,.8,.2,1)", fill: "both" }
    );
  });
});
