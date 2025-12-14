import { Mail, Phone, MapPin } from "lucide-react";

export function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl text-[#2C4A64] mb-8">CONTACT</h1>
      <p className="text-gray-600 mb-12">Hubungi kami untuk pertanyaan, saran, atau kerjasama</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl text-[#2C4A64] mb-6">Informasi Kontak</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="size-6 text-[#7DA5B8] mt-1" />
              <div>
                <h3 className="text-lg text-[#2C4A64] mb-1">Email</h3>
                <p className="text-gray-600">info@soranews.com</p>
                <p className="text-gray-600">redaksi.sorakrealita.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="size-6 text-[#7DA5B8] mt-1" />
              <div>
                <h3 className="text-lg text-[#2C4A64] mb-1">Telepon</h3>
                <p className="text-gray-600">+62 21 1234 5678</p>
                <p className="text-gray-600">+62 812 3456 7890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="size-6 text-[#7DA5B8] mt-1" />
              <div>
                <h3 className="text-lg text-[#2C4A64] mb-1">Alamat</h3>
                <a
                  href="https://maps.app.goo.gl/HSs1n6xbBGCtMTtPA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#7DA5B8] hover:underline transition-colors"
                >
                  Gedung FIDKOM, Ciputat<br />
                  Jl. Ir H. Juanda No.95<br />
                  Kota Tangerang Selatan<br />
                  Banten 15412 Indonesia
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl text-[#2C4A64] mb-6">Kirim Pesan</h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-[#2C4A64] mb-2">
                Nama
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#7DA5B8]"
                placeholder="Nama Anda"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-[#2C4A64] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#7DA5B8]"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm text-[#2C4A64] mb-2">
                Subjek
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#7DA5B8]"
                placeholder="Subjek Pesan"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-[#2C4A64] mb-2">
                Pesan
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#7DA5B8]"
                placeholder="Tulis pesan Anda..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#7DA5B8] hover:bg-[#6A92A3] text-white py-2 rounded-md transition-colors"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}