// components/WhoShouldAttend.js

const WhoShouldAttend = () => {
    const whoShouldAttend = [
      'Property Development Firms',
      'Fractional Ownership Platforms',
      'Asset Management Companies',
      'Legal Advisory Firms',
      'Financial Institutions',
      'PropTech Solutions Providers',
      'Investment Advisory Services',
      'Real Estate Analytics Firms',
      'Property Management Software Companies',
      'Exit Strategy Facilitators',
    ];
  
    return (
      <div className=" p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center text-black">Who Should Exhibit</h2>
        <ul className="space-y-4 text-lg text-gray-800">
          {whoShouldAttend.map((item, index) => (
            <li
              key={index}
              className="flex items-start transform transition-transform duration-300 hover:scale-105"
            >
              <span className="text-green-500 mr-4">✔</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default WhoShouldAttend;
  