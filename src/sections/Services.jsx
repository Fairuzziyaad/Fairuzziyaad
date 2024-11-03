const Services = () => {
  return (
    <section className="c-space my-20 scroll-mt-28" id="services">
      <h3 className="head-text text-4xl mb-12">Services</h3>

      <div className="mt-10 bg-black-200 rounded-xl p-8">
        <div className="flex flex-col gap-12">
          {/* Web Design */}
          <div className="flex items-start gap-6">
            <div className="p-4 rounded-lg bg-tertiary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
              </svg>
            </div>
            <div>
              <h4 className="text-white-800 font-semibold text-2xl mb-3">Web Design</h4>
              <p className="text-white-600 text-lg">Creating elegant and minimalist website designs with a focus on user experience and modern aesthetics.</p>
            </div>
          </div>

          {/* Frontend Development */}
          <div className="flex items-start gap-6">
            <div className="p-4 rounded-lg bg-tertiary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </div>
            <div>
              <h4 className="text-white-800 font-semibold text-2xl mb-3">Frontend Development</h4>
              <p className="text-white-600 text-lg">Implementing responsive designs with modern frontend technologies, creating engaging user interfaces and seamless interactions.</p>
            </div>
          </div>

          {/* Backend Development */}
          <div className="flex items-start gap-6">
            <div className="p-4 rounded-lg bg-tertiary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
              </svg>
            </div>
            <div>
              <h4 className="text-white-800 font-semibold text-2xl mb-3">Backend Development</h4>
              <p className="text-white-600 text-lg">I am capable if asked to do this project, but I am not very skilled. Also because I'm still learning this.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
