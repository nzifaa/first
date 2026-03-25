import foto from "../assets/foto.jpg"

export default function Nazifa() {
  return (
    <div className="w-full font-sans flex flex-col gap-4">

      {/* CARD 1 */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-visible">

        {/* BARIS: foto kiri | nama & kelas kanan */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-t-xl relative h-16"> 
            <p className="absolute left-32  text-white font-semibold text-base top-1/2 transform -translate-y-1/2">
            Nazifa
            </p>
            </div>

            {/* FOTO overlap */}
            <div className="relative h-9">
            <img
                src={foto}
                className="absolute rounded-full object-cover border-4 border-white"
                style={{ left: "16px", top: "-44px", width: "80px", height: "80px" }}
            />
            <div className="absolute left-32 top-1/2 transform -translate-y-1/2
            " style={{ marginLeft: "0px" }}>
              <p className="text-sm text-gray-500">TI-A · Information Technology</p>
            </div>
        </div>
        {/* DOMISILI */}
        <hr className="border-gray-100" />
            <div className="px-4 py-3 ">
            <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                Yogyakarta
            </span>
        </div>

      </div>

      {/* CARD 2 - TENTANG SAYA */}
      <div className="bg-white border border-gray-200 rounded-xl px-6 py-5">
        <h2 className="text-base font-semibold mb-2">Tentang saya</h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          Isi 100 kata tentang diri kamu di sini...
        </p>
      </div>

    </div>
  )
}