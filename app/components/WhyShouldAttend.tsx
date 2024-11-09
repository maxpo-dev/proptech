// components/WhyShouldAttend.js

const WhyShouldAttend = () => {
    const whyAttend = [
      'Reach a targeted audience',
      'Showcase Innovative solutions',
      'Generate leads & sales',
      'Enhance brand visibility',
      'Network with Industry peers',
      'Gain market insights',
      'Position yourself as an industry expert',
      'Build trust & credibility',
    ];
  
    return (
      <div className="p-6 ">
        <h2 className="text-2xl font-semibold mb-4 text-center text-black">Why Should Exhibit</h2>
        <ul className="space-y-4 text-lg text-gray-800">
          {whyAttend.map((item, index) => (
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
  
  export default WhyShouldAttend;
  