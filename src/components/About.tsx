// components/About.js
import {
  FaBullhorn,
} from "react-icons/fa";
import { FaDiagramProject, FaMagnifyingGlass } from "react-icons/fa6";

export default function About() {
  return (
    <section id="about" className="py-16 bg-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Who We Are
          </h2>
          <p className="text-lg text-deep-brown mb-8 text-center">
            Kasuana is a registered trade network in Nigeria. We empower local
            and student-led businesses with digital visibility, beginning from
            tertiary institutions like Abubakar Tafawa Balewa University in
            Bauchi. Our tools are culturally inclusive and easy to use—designed
            for real African markets.
          </p>

          <h3 className="text-2xl font-semibold text-center text-deep-brown mt-12 mb-8">
            What We Do
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary flex-shrink-0 flex items-center justify-center mr-4">
                <FaBullhorn className="text-white" />
              </div>
              <p className="text-deep-brown">
                Empower student and grassroots vendors through visibility
              </p>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary flex-shrink-0 flex items-center justify-center mr-4">
                <FaMagnifyingGlass className="text-white" />
              </div>
              <p className="text-deep-brown">
                Help buyers discover products/services within their communities
              </p>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary flex-shrink-0 flex items-center justify-center mr-4">
                <FaDiagramProject className="text-white" />
              </div>
              <p className="text-deep-brown">
                Structure informal trade digitally for trust and scalability
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Our Vision
              </h3>
              <p className="text-deep-brown">
                Become Africa's largest grassroots trade ecosystem, connecting
                millions of small businesses to new markets.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Our Mission
              </h3>
              <p className="text-deep-brown">
                Simplify, structure, and scale local trade across Africa,
                starting with Nigeria's educational institutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
