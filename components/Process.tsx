export default function Process() {
  const steps = [
    { title: "Farmer Partnership", description: "We purchase groundnuts directly from local farmers in South Sudan, providing them with reliable markets." },
    { title: "Quality Selection", description: "Groundnuts are carefully selected and inspected to ensure only the best quality." },
    { title: "Cleaning & Sorting", description: "Raw groundnuts are thoroughly cleaned and sorted to remove impurities." },
    { title: "Oil Extraction", description: "We use efficient extraction methods to produce pure groundnut cooking oil." },
    { title: "Quality Testing", description: "Every batch is tested to ensure purity, safety, and consistent quality." },
    { title: "Packaging & Distribution", description: "Oil is packaged in hygienic containers and distributed to households, businesses, and vendors." },
  ];

  return (
    <section id="process" className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-primary mb-4 text-center">Our Process</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          From farm to table - our careful production process ensures quality at every step:
        </p>

        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-x-2 hover:scale-105 group cursor-pointer border-l-4 border-transparent hover:border-secondary">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
