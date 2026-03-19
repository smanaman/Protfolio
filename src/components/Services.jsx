import React from 'react';
import './Services.css';
import { Code2, LayoutDashboard, Database, Server, Rocket, Shield } from 'lucide-react';

const Services = () => {

  const servicesData = [

    {
      id: 1,
      title: "Frontend Development",
      description:
        "Modern responsive interfaces using React, JavaScript, HTML5 and CSS3 with high performance and clean UI architecture.",
      icon: <Code2 size={24} />,
      active: false
    },

    {
      id: 3,
      title: "Backend Development",
      description:
        "Scalable backend systems using Node.js, Express APIs and secure authentication with optimized server logic.",
      icon: <Server size={24} />,
      active: false
    },

    {
      id: 5,
      title: "Performance Optimization",
      description:
        "Improving website speed, SEO performance, code efficiency and overall application scalability.",
      icon: <Rocket size={24} />,
      active: false
    },

    {
      id: 6,
      title: "Security & Deployment",
      description:
        "Secure authentication systems, API protection and deployment using cloud platforms and modern CI/CD workflows.",
      icon: <Shield size={24} />,
      active: false
    }

  ];

  return (
    <section id='services' className="services-section">
      <div className="services-container">

        {/* Header */}
        <div className="services-header">

          <div className="expertise-tag">
            <span className="dot"></span>
            My Core Expertise
          </div>

          <h2 className="header-text">
            I build scalable web applications and modern digital platforms using
            powerful full-stack technologies. From intuitive user interfaces to
            secure backend systems, every project is engineered for performance,
            reliability, and long-term growth.
          </h2>

        </div>

        {/* Grid */}
        <div className="services-grid">

          {/* LEFT COLUMN */}
          <div className="services-column list-col">

            {servicesData.map((service) => (

              <div
                key={service.id}
                className={`service-card ${service.active ? 'active' : ''}`}
              >

                <div className="service-icon-box">
                  {service.icon}
                </div>

                <div className="service-info">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

              </div>

            ))}

          </div>

          {/* MIDDLE COLUMN */}
          <div className="services-column middle-col">

            <h1 className="outline-title">
              Core Services <br /> Offered
            </h1>

            <div className="img-wrapper small-img">
              <img
                src="https://pawzia.foxcreation.online/maxel/wp-content/uploads/sites/5/2025/12/multi-ethnic-diverse-business-team-coworkers-colle-KW97Z92.jpg"
                alt="Development Team"
              />
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="services-column right-col">

            <div className="img-wrapper large-img">
              <img
                src="https://pawzia.foxcreation.online/maxel/wp-content/uploads/sites/5/2025/12/nothing-is-impossible-when-it-comes-to-this-trio-5ZVSBR9.jpg"
                alt="Office Workspace"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;