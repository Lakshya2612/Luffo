export default function Aboutuscard() {
  const data = [
    {
      title: "Affordable Solutions for Industry",
      description:
        "Our commitment to offering products at competitive prices stems from the understanding that industries need cost-effective solutions to remain competitive in the market. We strive to streamline our processes and optimize efficiency to bring you top-notch products without the hefty price tag. By doing so, we aim to empower businesses of all sizes to grow and succeed without the burden of exorbitant costs.",
    },
    {
      title: "Quality Assurance",
      description:
        "Luffo places a high premium on quality assurance. Our products undergo rigorous testing and adhere to stringent quality control measures to guarantee their reliability and durability. By maintaining the highest standards, we ensure that our customers receive products that not only meet their expectations but also exceed them.",
    },
    {
      title: "Community Engagement",
      description:
        "Luffo believes in giving back to the community. As part of our vision, we actively engage in community projects and initiatives that promote education, health, and overall well-being. By supporting local communities, we aim to create a positive impact beyond the boundaries of our business.",
    },
    {
      title: "Protecting Workers from Accidents",
      description:
        "At the core of Luffo's vision is the unwavering commitment to ensuring the safety of every worker. We recognize that a safe working environment is crucial for the success and sustainability of any business. Therefore, our product line is designed not only to meet industry standards but to exceed them, providing an extra layer of protection for workers in various fields.",
    },
    {
      title: "Innovation for Safety",
      description:
        "In addition to affordability and quality, Luffo is dedicated to continuous innovation to enhance workplace safety. We invest in research and development to bring forth cutting-edge solutions that address emerging challenges in different industries. Our goal is to contribute to the creation of safer work environments globally.",
    },
    {
      title: "Environmental Responsibility",
      description:
        "Luffo is committed to environmental sustainability. We strive to minimize our ecological footprint by adopting eco-friendly practices in our manufacturing processes and product designs. Our vision includes a future where businesses can thrive in harmony with nature, without compromising the well-being of our planet.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-96 h-92"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            {item.title}
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
