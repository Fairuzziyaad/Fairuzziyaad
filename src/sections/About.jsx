import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('fairuzziyaadp@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/gridiyus2.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Fairuz Ziyaad Purnomo</p>
              <p className="grid-subtext">
              Hi!, I am a 11th grade student at Telesandi Telecommunication Vocational School Bekasi, my major is Software Engineering.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/gridicon.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">About Tech</p>
              <p className="grid-subtext">
              Currently I am learning several programming languages ​​and frameworks. what I am currently learning is React JS, Node JS, Tailwind, Bootstrap, PHP and Laravel
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                showAtmosphere={true}
                atmosphereColor="#ffffff"
                atmosphereAltitude={0.1}
                showGraticules={false}
                enableZoom={true}
                zoomSpeed={1}
                minDistance={200}
                maxDistance={400}
                labelsData={[
                  {
                    lat: -6.2088,  // koordinat Bekasi
                    lng: 106.9756,
                    text: "I Live in Bekasi",
                    color: "#ffffff",
                    size: 1.2,
                    altitude: 0
                  }
                ]}
                labelLat={d => d.lat}
                labelLng={d => d.lng}
                labelText={d => d.text}
                labelSize={d => d.size}
                labelColor={d => d.color}
                labelDotRadius={0.3}
                labelAltitude={0.01}
              />
            </div>
            <div>
              <p className="grid-headtext">Where do I live?</p>
              <p className="grid-subtext">Since I was born I have lived in Bekasi until now.</p>
              <a href="#contact" className="w-fit"><Button name="Contact Me" isBeam containerClass="w-full mt-10" /></a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding & Design</p>
              <p className="grid-subtext">
              I love solving problems, building things through code, and designing UI. Maybe programming is my passion. I enjoy exploring new technologies and improving my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <div className="space-y-6">
              <p className="grid-subtext text-center">My Abilities</p>
              
              {/* UI/UX Design */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-white-800">Design UI/UX</p>
                  <p className="text-white-600">6/10</p>
                </div>
                <div className="w-full bg-black-200 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-[#FFE700] to-[#00FF9C] h-2.5 rounded-full animate-progress-60" 
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>

              {/* Frontend */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-white-800">Frontend</p>
                  <p className="text-white-600">8/10</p>
                </div>
                <div className="w-full bg-black-200 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-[#F5004F] to-[#7C00FE] h-2.5 rounded-full animate-progress-80" 
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>

              {/* Backend */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-white-800">Backend</p>
                  <p className="text-white-600">5/10</p>
                </div>
                <div className="w-full bg-black-200 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-[#705C53] to-[#EDDFE0] h-2.5 rounded-full animate-progress-50" 
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>

              {/* Mobile Programming */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-white-800">Mobile Programming</p>
                  <p className="text-white-600">4/10</p>
                </div>
                <div className="w-full bg-black-200 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] h-2.5 rounded-full animate-progress-40" 
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
