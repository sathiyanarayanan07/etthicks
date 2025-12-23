import { useEffect, useState } from "react";

function TeamSection() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  const Base_Url = import.meta.env.VITE_API_URL

  useEffect(() => {
    // Fetch team data from API
    fetch(`${Base_Url}/api/employees?populate=*`)
      .then((response) => response.json())
      .then((data) => {
        setTeamMembers(data.data);
        console.log("Data :", data.data)
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching team data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className=" bg-black text-white py-20 px-4 sm:px-6 md:px-10 lg:px-16">
      {/* Header */}
      <h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#FFAE00] mb-16 font-worksans"
      >
        Our Team
      </h1>

      {/* Team Grid - h-812 container */}
      <div className="max-w-7xl mx-auto h-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative w-full h-52 rounded-xl overflow-hidden bg-zinc-900 hover:scale-105 transition-transform duration-300"
            >
              {/* Image */}
              <div className="w-full h-full">
                {member.image &&
                  <img
                    src={`${Base_Url}${member.image[0].url}`}
                    alt={member.Name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                }
              </div>

              {/* Overlay with Name and Role */}
              <div className="lg:hidden group-hover:flex flex-col absolute bottom-0 left-0 right-0 bg-linear-to-t from-black via-black/80 to-transparent p-2 lg:p-4">
                <h3
                  className="text-lg md:text-xl lg:text-2xl font-semibold text-orange-400 font-worksans"
                >
                  {member.Name}
                </h3>
                <p
                  className="text-xs md:text-sm lg:text-lg text-gray-300 font-nunito"
                >
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
