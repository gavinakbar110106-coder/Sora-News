export function PartnesPage() {
  const partners = [
    { name: "Media Partner 1", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop" },
    { name: "Media Partner 2", logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=200&fit=crop" },
    { name: "Media Partner 3", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop" },
    { name: "Media Partner 4", logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=200&fit=crop" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl text-[#2C4A64] mb-8">PARTNERS</h1>
      <p className="text-gray-600 mb-12">Terima kasih kepada mitra kami yang telah mendukung Sora News</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {partners.map((partner, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
              <img src={partner.logo} alt={partner.name} className="w-full h-full object-cover rounded-lg" />
            </div>
            <p className="text-[#2C4A64] text-center">{partner.name}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl text-[#2C4A64] mb-4">Menjadi Partner Kami</h2>
        <p className="text-gray-600 mb-6">Bergabunglah dengan Sora News sebagai mitra untuk memperluas jangkauan konten Anda.</p>
        <button className="bg-[#7DA5B8] hover:bg-[#6A92A3] text-white px-6 py-2 rounded-md transition-colors">
          Hubungi Kami
        </button>
      </div>
    </div>
  );
}