import Image from 'next/image'; // Import the Image component

const Timeline = () => {
  return (
    <div className="bg-[#f8ede7] antialiased  text-gray-800">
      {/* react one start */}
      {/* tailwind */}
      <div className="py-5 max-w-[1600px] relative container mx-auto px-6 flex flex-col space-y-8">
        {/* section one */}
        <div className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
        <div className="relative z-10">
          <Image
            src="/planet-09.png"
            alt=""
            width={96}
            height={96}
            className="h-24 w-24 object-cover rounded-full shodow-md border-4 border-white xl:left-[47%] lg:left-[45%] md:left-[44%] top-10 sm:absolute"
          />
          <div className="relative pt-2 md:pr-20 py-3 sm:px-6 px-8 sm:w-1/2 w-full left-0">
            <div
              className="absolute inset-0 sm:left-[200px] md:left-[75%] lg:left-[82%] xl:left-[87.5%] 2xl:left-[690px] md:top-10 left-10 h-4 w-4 transform rotate-45 bg-white"
              aria-hidden="true"
            ></div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <span className="font-bold text-[#c93179] text-sm tracking-wide">
                <h2 className="text-2xl">September</h2> <small>2010</small>
              </span>
              <h1 className="text-2xl font-bold pt-1">An amazing Journey</h1>
              <p className="pt-1">
                Started as a Boutique HR Consulting firm with a purely women
                workforce.
              </p>
            </div>
          </div>
        </div>
        {/* section ends */}
        {/* section two */}
        <div className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
        <div className="relative z-10">
          <Image
            src="/planet-09.png"
            alt=""
            width={96}
            height={96}
            className="h-24 w-24 object-cover rounded-full shodow-md border-4 border-white xl:left-[47%] lg:left-[45%] md:left-[44%] top-10 sm:absolute"
          />
          <div className="relative pt-2 md:pr-20 py-4 sm:px-4 px-8 sm:w-1/2 w-full left-0">
            <div
              className="absolute inset-0  md:left-[122%] lg:left-[113%] 2xl:left-[109.4%] md:top-10 left-10 h-4 w-4 transform rotate-45 bg-white"
              aria-hidden="true"
            ></div>
            <div className="relative bg-white p-6 rounded-lg shadow-md 2xl:left-[124%] xl:left-[130%] lg:left-[139%] md:left-[163%] sm:left-[160%]">
              <span className="font-bold text-[#c93179] text-sm tracking-wide">
                <h2 className="text-2xl">February</h2> <small>2011</small>
              </span>
              <h1 className="text-2xl font-bold pt-1">Trained Company</h1>
              <p className="pt-1">
                Trained the first company in Prevention of Sexual Harassment.
              </p>
            </div>
          </div>
        </div>
        {/* section ends */}
        {/* section three */}
        <div className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
        <div className="relative z-10">
          <Image
            src="/planet-09.png"
            alt=""
            width={96}
            height={96}
            className="h-24 w-24 object-cover rounded-full shodow-md border-4 border-white xl:left-[47%] lg:left-[45%] md:left-[44%] top-10 sm:absolute"
          />
          <div className="relative pt-2 md:pr-20 py-3 sm:px-6 px-8 sm:w-1/2 w-full left-0">
            <div
              className="absolute inset-0 sm:left-[200px] md:left-[75%] lg:left-[82%] xl:left-[87.5%] 2xl:left-[690px] md:top-10 left-10 h-4 w-4 transform rotate-45 bg-white"
              aria-hidden="true"
            ></div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <span className="font-bold text-[#c93179] text-sm tracking-wide">
                <h2 className="text-2xl">April</h2> <small>2012</small>
              </span>
              <h1 className="text-2xl font-bold pt-1">Supported 20,000 women</h1>
              <p className="pt-1">
                Supported 20,000 women in public space on workplace-related
                matters.
              </p>
            </div>
          </div>
        </div>
        {/* section ends */}
        {/* section four */}
        <div className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
        <div className="relative z-10">
          <Image
            src="/planet-09.png"
            alt="SHe-Box"
            width={96}
            height={96}
            className="h-24 w-24 object-cover rounded-full shodow-md border-4 border-white xl:left-[47%] lg:left-[45%] md:left-[44%] top-10 sm:absolute"
          />
          <div className="relative pt-2 md:pr-20 py-4 sm:px-4 px-8 sm:w-1/2 w-full left-0">
            <div
              className="absolute inset-0  md:left-[122%] lg:left-[113%] 2xl:left-[109.4%] md:top-10 left-10 h-4 w-4 transform rotate-45 bg-white"
              aria-hidden="true"
            ></div>
            <div className="relative bg-white p-6 rounded-lg shadow-md 2xl:left-[124%] xl:left-[130%] lg.left-[139%] md:left-[163%] sm:left-[160%]">
              <span className="font-bold text-[#c93179] text-sm tracking-wide">
                <h2 className="text-2xl">April</h2> <small>2017</small>
              </span>
              <h1 className="text-2xl font-bold pt-1">Launch Report of Voice of Women</h1>
              <p className="pt-1">
                Launched the report of Voice of Women Survey - 2017, covering 3000
                women in India and 232 women from 39 countries.
              </p>
            </div>
          </div>
        </div>
        {/* section ends */}
        {/* section five */}
        <div className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
        <div className="relative z-10">
          <Image
            src="/she.jpg"
            alt="SHe-Box"
            width={96}
            height={96}
            className="h-24 w-24 object-cover rounded-full shodow-md border-4 border-white xl:left-[47%] lg:left-[45%] md:left-[44%] top-10 sm:absolute"
          />
          <div className="relative pt-2 md:pr-20 py-3 sm:px-6 px-8 sm:w-1/2 w-full left-0">
            <div
              className="absolute inset-0 sm:left-[200px] md:left-[75%] lg:left-[82%] xl:left-[87.5%] 2xl:left-[690px] md:top-10 left-10 h-4 w-4 transform rotate-45 bg-white"
              aria-hidden="true"
            ></div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <span className="font-bold text-[#c93179] text-sm tracking-wide">
                <h2 className="text-2xl">November</h2> <small>2017</small>
              </span>
              <h1 className="text-2xl font-bold pt-1">She-Box</h1>
              <p className="pt-1">
                Recommended inclusion of the private sector in She-Box for the Prevention of Sexual Harassment portal, Govt of India.
              </p>
            </div>
          </div>
        </div>
        {/* section ends */}
        {/* section six */}
        <div className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
        <div className="relative z-10">
          <Image
            src="/change.jpg"
            alt=""
            width={96}
            height={96}
            className="h-24 w-24 object-cover rounded-full shodow-md border-4 border-white xl:left-[47%] lg:left-[45%] md:left-[44%] top-10 sm:absolute"
          />
          <div className="relative pt-2 md:pr-20 py-4 sm:px-4 px-8 sm:w-1/2 w-full left-0">
            <div
              className="absolute inset-0 md:left-[122%] lg:left-[113%] 2xl:left-[109.4%] md:top-10 left-10 h-4 w-4 transform rotate-45 bg-white"
              aria-hidden="true"
            ></div>
            <div className="relative bg-white p-6 rounded-lg shadow-md 2xl:left-[124%] xl:left-[130%] lg:left-[139%] md:left-[163%] sm:left-[160%]">
              <span className="font-bold text-[#c93179] text-sm tracking-wide">
                <h2 className="text-2xl">November</h2> <small>2017</small>
              </span>
              <h1 className="text-2xl font-bold pt-1">Change.org</h1>
              <p className="pt-1">Amarpreet acknowledged as a Changemaker by change.org.</p>
            </div>
          </div>
        </div>
        {/* section ends */}
        {/* section seven */}
        <div className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
        <div className="relative z-10">
          <Image
            src="/hr.jpg"
            alt="HRhelpdesk Trust"
            width={96}
            height={96}
            className="h-24 w-24 object-cover rounded-full shodow-md border-4 border-white xl:left-[47%] lg:left-[45%] md:left-[44%] top-10 sm:absolute"
          />
          <div className="relative pt-2 md:pr-20 py-3 sm:px-6 px-8 sm:w-1/2 w-full left-0">
            <div
              className="absolute inset-0 sm:left-[200px] md:left-[75%] lg:left-[82%] xl:left-[87.5%] 2xl:left-[690px] md:top-10 left-10 h-4 w-4 transform rotate-45 bg-white"
              aria-hidden="true"
            ></div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <span className="font-bold text-[#c93179] text-sm tracking-wide">
                <h2 className="text-2xl">March</h2> <small>2018</small>
              </span>
              <h1 className="text-2xl font-bold pt-1">HRhelpdesk Trust established</h1>
              <p className="pt-1">HRhelpdesk Trust established to focus on Dignified Work Rights for Women.</p>
            </div>
          </div>
        </div>
        {/* section ends */}
        {/* section eight */}
        <div className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
        <div className="relative z-10">
          <Image
            src="/wandc.jpg"
            alt="Ministry of Women & Child Development"
            width={96}
            height={96}
            className="h-24 w-24 object-cover rounded-full shodow-md border-4 border-white xl:left-[47%] lg:left-[45%] md:left-[44%] top-10 sm:absolute"
          />
          <div className="relative pt-2 md:pr-20 py-4 sm:px-4 px-8 sm:w-1/2 w-full left-0">
            <div
              className="absolute inset-0 md:left-[122%] lg:left-[113%] 2xl:left-[109.4%] md:top-10 left-10 h-4 w-4 transform rotate-45 bg-white"
              aria-hidden="true"
            ></div>
            <div className="relative bg-white p-6 rounded-lg shadow-md 2xl:left-[124%] xl:left-[130%] lg:left-[139%] md:left-[163%] sm:left-[160%]">
              <span className="font-bold text-[#c93179] text-sm tracking-wide">
                <h2 className="text-2xl">July</h2> <small>2018</small>
              </span>
              <h1 className="text-2xl font-bold pt-1">Empaneled by Ministry of Women & Child Development</h1>
              <p className="pt-1">Empaneled by the Ministry of Women & Child Development to provide prevention of Sexual Harassment training.</p>
            </div>
          </div>
        </div>
        {/* section ends */}
        {/* section nine */}
        <div className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
        <div className="relative z-10">
          <Image
            src="/mahilabol.jpg"
            alt="Mahilabol"
            width={96}
            height={96}
            className="h-24 w-24 object-cover rounded-full shodow-md border-4 border-white xl:left-[47%] lg:left-[45%] md:left-[44%] top-10 sm:absolute"
          />
          <div className="relative pt-2 md:pr-20 py-3 sm:px-6 px-8 sm:w-1/2 w-full left-0">
            <div
              className="absolute inset-0 sm:left-[200px] md:left-[75%] lg:left-[82%] xl.left-[87.5%] 2xl:left-[690px] md:top-10 left-10 h-4 w-4 transform rotate-45 bg-white"
              aria-hidden="true"
            ></div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <span className="font-bold text-[#c93179] text-sm tracking-wide">
                <h2 className="text-2xl">February</h2> <small>2018</small>
              </span>
              <h1 className="text-2xl font-bold pt-1">Mahilabol launched</h1>
              <p className="pt-1">Mahilabol launched in association with UN Women and the Ministry of Women & Child Development, GOI.</p>
            </div>
          </div>
        </div>
        {/* section ends */}
        {/* section ten */}
        <div className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
        <div className="relative z-10">
          <Image
            src="/bill.jpg"
            alt="Bill & Melinda Gates Foundation"
            width={96}
            height={96}
            className="h-24 w-24 object-cover rounded-full shodow-md border-4 border-white xl:left-[47%] lg:left-[45%] md:left-[44%] top-10 sm:absolute"
          />
          <div className="relative pt-2 md:pr-20 py-4 sm:px-4 px-8 sm:w-1/2 w-full left-0">
            <div
              className="absolute inset-0 md:left-[122%] lg:left-[113%] 2xl:left-[109.4%] md:top-10 left-10 h-4 w-4 transform rotate-45 bg-white"
              aria-hidden="true"
            ></div>
            <div className="relative bg-white p-6 rounded-lg shadow-md 2xl:left-[124%] xl:left-[130%] lg:left-[139%] md:left-[163%] sm:left-[160%]">
              <span className="font-bold text-[#c93179] text-sm tracking-wide">
                <h2 className="text-2xl">September</h2> <small>2018</small>
              </span>
              <h1 className="text-2xl font-bold pt-1">Bill & Melinda Gates Foundation</h1>
              <p className="pt-1">Recognized by Bill & Melinda Gates Foundation.</p>
            </div>
          </div>
        </div>
        {/* section ends */}
        {/* section eleven */}
        <div className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md.right-0 md.left-0"></div>
        <div className="relative z-10">
          <Image
            src="/ansuna.jpg"
            alt="Ansuna"
            width={96}
            height={96}
            className="h-24 w-24 object-cover rounded-full shodow-md border-4 border-white xl:left-[47%] lg.left-[45%] md.left-[44%] top-10 sm.absolute"
          />
          <div className="relative pt-2 md:pr-20 py-3 sm:px-6 px-8 sm:w-1/2 w-full left-0">
            <div
              className="absolute inset-0 sm.left-[200px] md.left-[75%] lg.left-[82%] xl.left-[87.5%] 2xl.left-[690px] md.top-10 left-10 h-4 w-4 transform rotate-45 bg-white"
              aria-hidden="true"
            ></div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <span className="font-bold text-[#c93179] text-sm tracking-wide">
                <h2 className="text-2xl">June</h2> <small>2022</small>
              </span>
              <h1 className="text-2xl font-bold pt-1">Ansuna</h1>
              <p className="pt-1">Published the book &ldquo;Ansuna&ldquo;.</p>
            </div>
          </div>
        </div>
        {/* section ends */}
      </div>
      {/* tailwind ends */}
    </div>
  );
};

export default Timeline;
