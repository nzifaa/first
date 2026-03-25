import foto from "../assets/foto.jpg"

export default function Nazifa() {
  return (
    <div className="max-w-2xl mx-auto font-sans">

      {/* CARD */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">

        {/* BANNER */}
        <div className="h-24 bg-gradient-to-r from-blue-600 to-blue-400" />

        {/* FOTO + NAMA */}
        <div className="px-6 pb-6 relative">
          <img
            src={foto}
            className="w-24 h-24 rounded-full border-4 border-white object-cover -mt-12"
          />
          <div className="mt-3">
            <h1 className="text-2xl font-semibold">Nazifa</h1>
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
              <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-purple-600 border border-purple-200">
                Yogyakart            
              </span>
            </div>
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* TENTANG SAYA */}
        <div className="px-6 py-5">
          <h2 className="text-base font-semibold mb-2">Tentang saya</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Isi 100 kata tentang diri kamu di sini...
          </p>
        </div>

        <hr className="border-gray-100" />

        {/* INFO DETAIL */}
        <div className="px-6 py-5">
          <h2 className="text-base font-semibold mb-4">Informasi</h2>
          <div className="flex flex-col gap-3">
            {[
              { label: "Prodi", value: "Information Technology" },
              { label: "Kelas", value: "TI-A" },
              { label: "Domisili", value: "Semarang" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="text-xs text-gray-400">{item.label}</span>
                <span className="text-sm font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}