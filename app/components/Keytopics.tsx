import Image from 'next/image';
import { Cpu, Box, Brain, DollarSign, Eye, Database, Cloud, Bot, Home, Building, ShoppingBag, HardDrive, BarChart, TreePine, Users, Cog, Ruler } from 'lucide-react';
import Vrimg from '@/app/images/2x.jpg'

export default function KeyTopicsSection() {
  const topics = [
    { name: "Property Management", icon: <Cog className="w-6 h-6" /> },
    { name: "Real Estate Marketplaces", icon: <ShoppingBag className="w-6 h-6" /> },
    { name: "Smart Buildings", icon: <Building className="w-6 h-6" /> },
    { name: "ConTech", icon: <HardDrive className="w-6 h-6" /> },
    { name: "RE Investment", icon: <DollarSign className="w-6 h-6" /> },
    { name: "Data Analytics", icon: <BarChart className="w-6 h-6" /> },
    { name: "AI Solutions", icon: <Brain className="w-6 h-6" /> },
    { name: "Blockchain", icon: <Box className="w-6 h-6" /> },
    { name: "BIM", icon: <Ruler className="w-6 h-6" /> },
    { name: "IoT Solutions", icon: <Cpu className="w-6 h-6" /> },
    { name: "3D Printing", icon: <Bot className="w-6 h-6" /> },
    { name: "Facilities Management", icon: <Home className="w-6 h-6" /> },
    { name: "VR/AR", icon: <Eye className="w-6 h-6" /> },
    { name: "Green Tech", icon: <TreePine className="w-6 h-6" /> },
    { name: "Tenant Experience", icon: <Users className="w-6 h-6" /> },
  ];

  return (
    <section className="bg-blue-800 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center pb-4 mb-12 text-white">Core Insights</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px] md:h-[500px]">
            <Image
              src={Vrimg}
              alt="Core Insights Illustration"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {topics.map((topic) => (
                <div
                  key={topic.name}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-white bg-opacity-10 flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#0091EB] group-hover:to-[#00D4D5]">
                    <div className="text-white transition-all duration-300 group-hover:scale-110">
                      {topic.icon}
                    </div>
                  </div>
                  <h3 className="text-xs font-semibold text-white transition-all duration-300 group-hover:text-[#00D4D5]">
                    {topic.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

