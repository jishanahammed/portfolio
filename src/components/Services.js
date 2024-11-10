import React from "react";


const services = [
    {
      id: 1,
      title: "ASP.NET Web Development",
      description:
        "Develop high-performance web applications using ASP.NET Core, focused on scalability and robust architecture.",
      icon: "💻",
    },
    {
      id: 2,
      title: "React & Next.js Development",
      description:
        "Build dynamic and SEO-friendly web applications with React and Next.js for an enhanced user experience.",
      icon: "⚛️",
    },
    {
        id: 3,
        title: "Enterprise Application Development",
        description:
          "Develop enterprise-grade applications tailored to your business needs using the latest ASP.NET technologies.",
          icon: "🏢",
      },
    {
      id: 4,
      title: "Tailwind CSS & UI Design",
      description:
        "Craft responsive, modern UIs with Tailwind CSS, ensuring a seamless design across all devices.",
      icon: "🎨",
    },
    {
      id: 5,
      title: "JavaScript & jQuery Solutions",
      description:
        "Implement interactive functionalities with JavaScript and jQuery for rich, client-side experiences.",
      icon: "🖱️",
    },
    {
      id: 6,
      title: "MSSQL Database Management",
      description:
        "Design, optimize, and manage scalable databases using MSSQL for efficient data handling.",
      icon: "🗄️",
    },
    {
      id: 7,
      title: "API Development & Integration",
      description:
        "Create RESTful APIs with ASP.NET and integrate third-party services for seamless connectivity.",
      icon: "🔗",
    },
 
    {
      id: 8,
      title: "Maintenance & Support",
      description:
        "Offer ongoing support and maintenance to keep your web applications running smoothly.",
      icon: "🔧",
    },
  ];

const Services = () => {
    return (
        <section className="services py-16 bg-gray-50 dark:bg-gray-900 dark:text-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-50">
                Full-Stack Software Development Services
              </h2>
              <p className="text-gray-600 mt-4 dark:text-gray-50">
                Expertise in ASP.NET, React.js, Next.js, JavaScript, jQuery, and MSSQL
              </p>
            </div>
    
            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="service-card p-6 bg-white dark:bg-gray-900 dark:text-gray-50 dark:border  shadow-lg rounded-2xl h-80 transform hover:translate-y-2 transition duration-300"
                >
                  <div className="ser-icon text-4xl mb-4 text-blue-600">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-gray-50 ">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400  mt-2">{service.description}</p>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center text-blue-700 font-medium hover:underline"
                  >
                    Learn More
                    <svg
                      className="ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      width={18}
                      height={18}
                    >
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        d="M5 12h14m-6-6 6 6-6 6"
                      />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
};

export default Services;
