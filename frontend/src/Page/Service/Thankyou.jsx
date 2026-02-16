import { useLocation, useNavigate } from "react-router-dom";
import { useSEO } from "../../seo/useSEO";

export default function ThankYou() {
  useSEO({
      title: "Best Online Marketing Services | Resometa",
      description:
        "Resometa is a digital marketing and web development agency specializing in Social Media and Performance Marketing solutions. Providing growth in less than 2 months."
    });

  const navigate = useNavigate();
  const location = useLocation();

  // Get service from navigation state
  const service = location.state?.service || "Our Service";

  

  return (
    <div className="ResometaThankYou_wrapper">
      <div className="ResometaThankYou_card animateFade">

        <h1 className="ResometaThankYou_heading">
          🎉 Thank You for Choosing Resometa
        </h1>

        <p className="ResometaThankYou_message">
          Your request for <strong>{service}</strong> has been successfully received.
          <br />
          Our team will reach out to you shortly to discuss your requirements in detail.
        </p>

        <div className="ResometaThankYou_highlight">
          We appreciate your trust in Resometa 🚀
        </div>

        <h3 className="ResometaThankYou_subheading">
          Explore More From Us
        </h3>

        <div className="ResometaThankYou_servicesGrid">
          <button onClick={() => navigate("/services/video-editing")}>
            🎬 Video Editing
          </button>

          {/* <button onClick={() => navigate("/services/web-design")}>
            🌐 Web Design
          </button>

          <button onClick={() => navigate("/services/digital-marketing")}>
            📈 Digital Marketing
          </button>

          <button onClick={() => navigate("/services/branding")}>
            🎨 Branding
          </button>

          <button onClick={() => navigate("/services/seo")}>
            🔍 SEO Services
          </button> */}

          <button onClick={() => navigate("/contact")}>
            📞 Contact Us
          </button>
        </div>

        <button
          className="ResometaThankYou_homeBtn"
          onClick={() => navigate("/")}
        >
          ⬅ Back to Home
        </button>

      </div>
    </div>
  );
}
