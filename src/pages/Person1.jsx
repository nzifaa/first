import foto from 'https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_640.png'
export default function Person1() {
  return (
    <div className="p-6">
      <img src={foto} className="w-32 rounded-full" />
      <h1 className="text-2xl font-bold">Person1</h1>
      <p>Kelas: ...</p>
      <p>Prodi: ...</p>
      <p>Domisili: ...</p>
      <p className="mt-4">
        (isi 100 kata tentang diri lo, jangan males di sini)
      </p>
    </div>
  )
}