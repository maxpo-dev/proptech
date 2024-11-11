import { Cpu, Box, Brain, DollarSign, Eye, Database, Cloud,  Bot, Home } from "lucide-react";

export default function KeyTopicsSection() {
  const topics = [
    { name: "IoT", icon: <Cpu className="w-8 h-8 text-blue-500 mb-4" /> },
    { name: "Blockchain", icon: <Box className="w-8 h-8 text-blue-500 mb-4" /> },
    { name: "AI & ML", icon: <Brain className="w-8 h-8 text-blue-500 mb-4" /> },
    { name: "Fractional Ownership", icon: <DollarSign className="w-8 h-8 text-blue-500 mb-4" /> },
    { name: "AR / VR", icon: <Eye className="w-8 h-8 text-blue-500 mb-4" /> },
    { name: "Big Data", icon: <Database className="w-8 h-8 text-blue-500 mb-4" /> },
    { name: "Cloud-Based Tools", icon: <Cloud className="w-8 h-8 text-blue-500 mb-4" /> },
    // { name: "Contech", icon: <HardDrive className="w-8 h-8 text-blue-500 mb-4" /> },
    { name: "Robotics & Automation", icon: <Bot className="w-8 h-8 text-blue-500 mb-4" /> },
    { name: "Brokerage & Agent Software", icon: <Home className="w-8 h-8 text-blue-500 mb-4" /> },
  ];

  return (
    <section className=" bg-blue-800  py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-start pb-4 mb-12 text-white  ">Core Insights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <div
              key={topic.name}
              className="bg-white p-6 rounded-lg shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500 hover:bg-gradient-to-r hover:from-[#0091EB] hover:to-[#00D4D5] hover:text-white flex flex-col items-center text-center"
            >
              {topic.icon}
              <h3 className="text-xl font-semibold mb-2 text-black hover:text-white">{topic.name}</h3>
              <p className="text-gray-600 hover:text-white">
                Explore the latest advancements and applications in {topic.name} for real estate
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
