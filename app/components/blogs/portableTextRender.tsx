import { PortableText } from "@portabletext/react";
import Image from "next/image";

const components = {
  types: {
    image: ({ value }: any) => (
      <Image src={value.asset.url} alt={value.alt || ""} className="my-4" />
    ),
  },
  marks: {
    strong: ({ children }: any) => <strong>{children}</strong>,
    em: ({ children }: any) => <em>{children}</em>,
    link: ({ children, value }: any) => (
      <a href={value.href} className="text-blue-600 underline">
        {children}
      </a>
    ),
  },
  block: {
    h2: ({ children }: any) => <h2 className="mb-2 mt-8 text-2xl font-bold">{children}</h2>,
    h3: ({ children }: any) => <h3 className="mb-2 mt-6 text-xl font-semibold">{children}</h3>,
    normal: ({ children }: any) => <p className="mb-4 text-gray-800">{children}</p>,
  },
};

export default function PortableTextRenderer({ value }: { value: any }) {
  return <PortableText value={value} components={components} />;
}
