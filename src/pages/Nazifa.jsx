import foto from "../assets/foto.jpg"

export default function Nazifa() {
  return (
    <div className="max-w-2xl mx-auto font-sans">

      {/* CARD */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">

        {/* BANNER */}
        <div className="h-24 bg-gradient-to-r from-blue-600 to-blue-400 flex items-center px-6 gap-4">
          <img src={foto}
            className="w-24 h-24 rounded-full border-4 border-white object-cover -mt-2"
          />
          <h1 className="text-2xl font-semibold">Nazifa</h1>
        </div>
        {/* FOTO + NAMA */}
        <div className="px-6 py-6">
            <p className="text-gray-500 text-sm mt-1">
              Mahasiswi Information Technology · Universitas Brawijaya
            </p>
            <div className="flex gap-2 mt-3 flex-wrap">
              <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                TI-A
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                Yogyakarta
              </span>            
            </div>
        </div>
      </div>

      <div className="mt-6">
        {/* TENTANG SAYA */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm px-6 py-5">
          <h2 className="text-base font-semibold mb-2">Tentang saya</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Isi 100 kata tentang diri kamu di sini...
          </p>
        </div>
      </div>
    </div>
  )
}