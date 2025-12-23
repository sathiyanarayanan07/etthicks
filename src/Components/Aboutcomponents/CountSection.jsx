import { useEffect, useState } from "react";
import axios from "axios";
import now from "/src/assets/about/now.png";

function CountSection() {
  const [counts, setCounts] = useState({ projects: 0, clients: 0, contents: 0 });
  const [targetCounts, setTargetCounts] = useState({ projects: 0, clients: 0, contents: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const Base_Url = import.meta.env.VITE_API_URL

  // Fetch data from Strapi API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${Base_Url}/api/count`);

        // Extract data from Strapi response
        const apiData = response.data.data;

        setTargetCounts({
          projects: apiData.projects || 0,
          clients: apiData.clients || 0,
          contents: apiData.Content_Produced || 0,
        });

        setLoading(false);
      } catch (err) {
        console.error("Error fetching count data:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Animate counter once data is loaded
  useEffect(() => {
    if (loading) return; // Don't start animation until data is loaded

    const speed = 30;

    const interval = setInterval(() => {
      setCounts((prev) => {
        let done = true;
        const updated = { ...prev };

        for (const key in targetCounts) {
          if (prev[key] < targetCounts[key]) {
            updated[key] = Math.min(prev[key] + 1, targetCounts[key]);
            done = false;
          }
        }

        if (done) clearInterval(interval);
        return updated;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [targetCounts, loading]);

  if (loading) {
    return (
      <div
        className="w-full bg-cover bg-center py-12 sm:py-16 md:py-24 px-4 sm:px-6"
        style={{
          backgroundImage: `url(${now})`,
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white text-xl sm:text-2xl">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="w-full bg-cover bg-center py-12 sm:py-16 md:py-24 px-4 sm:px-6"
        style={{
          backgroundImage: `url(${now})`,
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-red-500 text-xl sm:text-2xl">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full bg-cover bg-center py-12 md:py-24 px-4 md:px-26"
      style={{
        backgroundImage: `url(${now})`,
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-around items-center text-center gap-8 sm:gap-12">
        {/* Projects */}
        <div>
          <h1 className="text-[#FFAE00] text-4xl lg:text-[80px] font-worksans">
            {counts.projects}<span className="font-medium text-white lg:text-6xl">+</span>
          </h1>
          <p className="text-white text-lg md:text-xl lg:text-[32px] mt-2 font-nunito">PROJECTS</p>
        </div>

        {/* Clients */}
        <div>
          <h1 className="text-[#FFAE00] text-4xl lg:text-[80px] font-worksans">
            {counts.clients}<span className="font-medium text-white lg:text-6xl">+</span>
          </h1>
          <p className="text-white text-lg md:text-xl lg:text-[32px] mt-2 font-nunito">CLIENTS</p>
        </div>

        {/* Content Produced */}
        <div>
          <h1 className="text-[#FFAE00] text-4xl lg:text-[80px] font-worksans">
            {counts.contents}<span className="font-medium text-white lg:text-6xl">+</span>
          </h1>
          <p className="text-white text-lg md:text-xl lg:text-[32px] mt-2 font-nunito">
            CONTENT PRODUCED
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountSection;
