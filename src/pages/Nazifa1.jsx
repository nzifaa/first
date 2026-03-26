import foto from "../assets/foto.jpg"

export default function Nazifa() {
  return (
    <div className="w-full font-sans flex flex-col gap-4 pt-4 px-4 md:px-8 lg:px-16">

      {/* CARD 1 */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-visible">

        {/* BANNER */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-t-xl relative
                        h-20 md:h-28 lg:h-36">
        <h1 className="absolute text-white font-semibold text-3xl top-1/2 transform -translate-y-1/2
                        left-24 md:left-32 lg:left-40">
            Nazifa Izzati
        </h1>
        </div>

        {/* FOTO overlap */}
        <div className="relative h-10 md:h-14 lg:h-20">
          <img
            src={foto}
            className="absolute rounded-full object-cover border-4 border-white
                       w-16 h-16 -top-10
                       md:w-24 md:h-24 md:-top-12
                       lg:w-32 lg:h-32 lg:-top-16"
            style={{ left: "16px" }}
          />
          <div className="absolute top-1/2 transform -translate-y-1/2 left-24 md:left-32 lg:left-40">
            <p className="text-left text-sm text-gray-500">Yogyakarta</p>
            <p className="text-sm text-gray-500">TI-A · Information Technology</p>
          </div>
        </div>

        {/* Interests */}
        <hr className="border-gray-100 md:mt-0 lg:mt-0" />
        <div className="px-4 py-2">
          <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
            Programming
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 ml-2">
            Web Developer
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 ml-2">
            UI/UX Design
          </span>
        </div>

      </div>

      {/* CARD 2 */}
      <div className="bg-white border border-gray-200 rounded-xl px-6 py-5">
        <h2 className="text-base text-left font-semibold mb-2">About Me</h2>
        <p className="text-sm text-left text-gray-500 leading-relaxed
                      pl-3 md:pl-4 lg:pl-5">
          Hi! I'm Nazifa Izzati, a passionate web developer with a love for creating beautiful and functional websites. I have experience in HTML, CSS, and JavaScript, and I'm always eager to learn new technologies and improve my skills. In my free time, I enjoy exploring new design trends and working on personal projects to enhance my portfolio.
        </p>
      </div>

    </div>
  )
}