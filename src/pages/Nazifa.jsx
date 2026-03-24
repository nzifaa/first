import foto from "../assets/foto.jpg"

export default function Nazifa() {
  return (
      <div className="">
        <div className="box-border p-6 border-2 border-gray-300 rounded-lg">
                
        {/* FOTO */}
        <div>
          <img src={foto} className="w-32 rounded-full" />
        </div>

        {/* INFO */}
        <div className="flex flex-col gap-2">
          
          {/* NAMA + DOMISILI */}
          <div>
            <h1 className="text-2xl font-bold">Nazifa</h1>
            <p className="text-black-900">Semarang</p>
          </div>

          {/* KELAS | PRODI */}
          <div className="flex gap-4 text-black-600">
            <p>TI-A</p>
            <p>|</p>
            <p>Information Technology</p>
          </div>
        <div className="w-full h-1 bg-gray-300 mt-4">
          <h1 className="text-lg font-bold mt-4">Tentang Saya</h1>
            <p>Isi 100 kata tentang diri kamu di sini. Jangan cuma formal doang,
            bikin agak hidup biar dosen ga bosen bacanya.</p>
        </div>
      </div>

      </div>
    </div>

  )
}