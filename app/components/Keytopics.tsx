import Image from 'next/image';
import { Cpu, Box, Brain, DollarSign, Eye,Bot, Home, Building, ShoppingBag, HardDrive, BarChart, TreePine, Users, Cog, Ruler } from 'lucide-react';
import Vrimg from '@/app/images/2x.jpg'

export default function KeyTopicsSection() {
  const topics = [
    { name: "Property Management", icon: <Cog className="size-6" /> },
    { name: "Real Estate Marketplaces", icon: <ShoppingBag className="size-6" /> },
    { name: "Smart Buildings", icon: <Building className="size-6" /> },
    { name: "ConTech", icon: <HardDrive className="size-6" /> },
    { name: "RE Investment", icon: <DollarSign className="size-6" /> },
    { name: "Data Analytics", icon: <BarChart className="size-6" /> },
    { name: "AI Solutions", icon: <Brain className="size-6" /> },
    { name: "Blockchain", icon: <Box className="size-6" /> },
    { name: "BIM", icon: <Ruler className="size-6" /> },
    { name: "IoT Solutions", icon: <Cpu className="size-6" /> },
    { name: "3D Printing", icon: <Bot className="size-6" /> },
    { name: "Facilities Management", icon: <Home className="size-6" /> },
    { name: "VR/AR", icon: <Eye className="size-6" /> },
    { name: "Green Tech", icon: <TreePine className="size-6" /> },
    { name: "Tenant Experience", icon: <Users className="size-6" /> },
  ];

  return (
    <section className="bg-blue-800 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 pb-4 text-center text-3xl font-bold text-white">Core Insights</h2>
        <div className="grid items-center gap-8 md:grid-cols-2">
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
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
              {topics.map((topic) => (
                <div
                  key={topic.name}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="mb-3 flex size-14 items-center justify-center rounded-full bg-white bg-opacity-10 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#0091EB] group-hover:to-[#00D4D5]">
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

