import najmaPhoto from "figma:asset/3957c46a3818c9e35617d2102b221a9c4c688656.png";
import alMaratPhoto from "figma:asset/4838b8d0a8d16c2f8a32218e4f391355efec4acf.png";
import raudhotulPhoto from "figma:asset/f666b8798b36f3f1d2b07c81480001a52977b216.png";
import zakiaPhoto from "figma:asset/38b34d27c50a24ec799aa48be7d0ed184df42e9d.png";
import shofiPhoto from "figma:asset/c69f63c451c9dfacd6e949db181859850bf1408f.png";
import gapinPhoto from "figma:asset/ab8c32221be5a917cca2968530c5284ab0687b9a.png";

export function RedaksiPage() {
  const team = [
    { 
      name: "Zakia Tsaqif", 
      role: "Pemimpin Redaksi", 
      image:  zakiaPhoto,
      instagram: "https://www.instagram.com/zakiatsaqif12/"
    },
    { 
      name: "Al Marattussoliha", 
      role: "Redaksi", 
      image: alMaratPhoto,
      instagram: "https://www.instagram.com/almaraatsr/"
    },
    { 
      name: "Raudhotul", 
      role: "Redaksi", 
      image: raudhotulPhoto,
      instagram: "https://www.instagram.com/albintaryrau_/"
    },
    { 
      name: "Najma Mutalali", 
      role: "Design Grafis", 
      image: najmaPhoto,
      instagram: "https://www.instagram.com/nmtaa_12/"
    },
    { 
      name: "Shofiyatur", 
      role: "Design Grafis", 
      image: shofiPhoto,
      instagram: "https://www.instagram.com/shofiytrh/"
    },
    { 
      name: "Moch. Gavin Akbar P.Y", 
      role: "Publisher", 
      image: gapinPhoto,
      instagram: "https://instagram.com/gavinakbar"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl text-[#2C4A64] mb-8">REDAKSI</h1>
      <p className="text-gray-600 mb-12">Tim redaksi Sora News yang berdedikasi menghadirkan berita berkualitas</p>
      
      <div className="grid grid-cols-3 gap-6 mb-4">
        {team.slice(0, 3).map((member, index) => (
          <div key={index} className="text-center">
            <div className="w-full aspect-[3/4] mx-auto mb-4 rounded-lg overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl text-[#2C4A64] mb-1">{member.name}</h3>
            <p className="text-gray-600 mb-2">{member.role}</p>
            <a 
              href={member.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#7DA5B8] hover:underline text-sm"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 mb-16">
        {team.slice(3).map((member, index) => (
          <div key={index} className="text-center">
            <div className="w-full aspect-[3/4] mx-auto mb-4 rounded-lg overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl text-[#2C4A64] mb-1">{member.name}</h3>
            <p className="text-gray-600 mb-2">{member.role}</p>
            <a 
              href={member.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#7DA5B8] hover:underline text-sm"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl text-[#2C4A64] mb-4">Tentang Kami</h2>
        <p className="text-gray-600 mb-4">
          Sora News adalah platform berita digital yang berkomitmen untuk menyajikan informasi yang akurat, 
          berimbang, dan berkualitas. Kami percaya bahwa jurnalisme yang baik adalah kunci untuk masyarakat 
          yang terinformasi dengan baik.
        </p>
        <p className="text-gray-600">
          Tim redaksi kami terdiri dari jurnalis berpengalaman dan content creator muda yang bersemangat 
          untuk menghadirkan perspektif segar dalam dunia media.
        </p>
      </div>
    </div>
  );
}