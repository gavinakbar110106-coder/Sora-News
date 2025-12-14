// Article data with unique content for each category

export const articleData: Record<string, any> = {
  // Hero Section Articles
  "2": {
    category: "Politics",
    title: "Senate Passes Major Infrastructure Bill",
    author: "Sarah Johnson",
    time: "4 hours ago",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&h=600&fit=crop",
    content: `
      <p>In a landmark decision, the Senate has passed a comprehensive infrastructure bill that promises to transform the nation's transportation and utility systems. The bipartisan legislation received overwhelming support from both sides of the aisle.</p>

      <h2>Key Provisions</h2>
      <p>The $1.2 trillion package includes:</p>
      <ul>
        <li>$550 billion in new federal investment over five years</li>
        <li>Major upgrades to roads, bridges, and public transit</li>
        <li>Expansion of high-speed internet access to rural areas</li>
        <li>Modernization of the electric grid</li>
      </ul>

      <h2>Economic Impact</h2>
      <p>Economists predict the infrastructure bill will create millions of jobs and boost economic growth for the next decade. Construction workers, engineers, and technology specialists are expected to be in high demand.</p>

      <p>The legislation also addresses climate change by investing in electric vehicle charging stations and promoting clean energy infrastructure. This represents a significant shift toward sustainable development.</p>

      <h2>Political Implications</h2>
      <p>The bill's passage demonstrates rare bipartisan cooperation in an increasingly polarized political environment. Both parties claim victory, with Democrats praising the investment in public services and Republicans highlighting the economic growth potential.</p>
    `,
  },
  "3": {
    category: "Technology",
    title: "AI Breakthrough Revolutionizes Healthcare",
    author: "Dr. Michael Chen",
    time: "6 hours ago",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop",
    content: `
      <p>Researchers have achieved a groundbreaking advancement in artificial intelligence that could transform medical diagnosis and treatment. The new AI system can detect diseases earlier and more accurately than traditional methods.</p>

      <h2>Revolutionary Technology</h2>
      <p>The AI platform uses advanced machine learning algorithms to analyze medical imaging, patient records, and genetic data simultaneously. This comprehensive approach enables it to identify patterns that human doctors might miss.</p>

      <p>Early testing shows the system can detect certain cancers up to two years earlier than conventional screening methods, potentially saving thousands of lives annually.</p>

      <h2>Clinical Applications</h2>
      <ul>
        <li>Early cancer detection with 95% accuracy</li>
        <li>Personalized treatment recommendations</li>
        <li>Prediction of disease progression</li>
        <li>Drug interaction analysis</li>
      </ul>

      <h2>Ethical Considerations</h2>
      <p>While the technology shows immense promise, experts emphasize the importance of maintaining human oversight in medical decision-making. The AI is designed to assist doctors, not replace them.</p>

      <p>Privacy concerns are also being addressed through robust data encryption and strict access controls. Patient consent and data security remain top priorities.</p>
    `,
  },
  "4": {
    category: "Business",
    title: "Markets Rally on Positive Economic Data",
    author: "Robert Williams",
    time: "8 hours ago",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop",
    content: `
      <p>Stock markets reached new highs today following the release of encouraging economic indicators. The data suggests sustained growth and declining inflation, boosting investor confidence.</p>

      <h2>Market Performance</h2>
      <p>Major indices posted significant gains:</p>
      <ul>
        <li>S&P 500 up 2.5%</li>
        <li>Dow Jones Industrial Average up 400 points</li>
        <li>NASDAQ Composite up 3.1%</li>
        <li>Technology sector leading the rally</li>
      </ul>

      <h2>Economic Indicators</h2>
      <p>The positive sentiment was driven by several factors including lower-than-expected inflation rates, strong employment numbers, and robust consumer spending. Analysts interpret these signals as evidence of a "soft landing" for the economy.</p>

      <p>The Federal Reserve's recent policy decisions appear to be having the desired effect, with inflation cooling without triggering a recession. This delicate balance has been a primary goal of monetary policy makers.</p>

      <h2>Investor Outlook</h2>
      <p>Financial experts remain cautiously optimistic about the market's trajectory. While short-term gains are encouraging, many advise maintaining diversified portfolios and long-term investment strategies.</p>
    `,
  },

  // Trending Section Articles
  "trending-1": {
    category: "Economy",
    title: "Economic Recovery Shows Strong Momentum",
    author: "Emily Parker",
    time: "3 hours ago",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop",
    content: `
      <p>The economy continues to show remarkable resilience with GDP growth exceeding expectations and unemployment hitting historic lows. Industry leaders express optimism about sustained expansion.</p>

      <h2>Growth Indicators</h2>
      <p>Recent data reveals impressive economic performance across multiple sectors. Manufacturing output has increased, consumer confidence is rising, and business investment is expanding.</p>

      <h2>Employment Sector</h2>
      <p>Job creation has been particularly strong in technology, healthcare, and renewable energy sectors. Wage growth is also accelerating, providing workers with increased purchasing power.</p>
    `,
  },
  "trending-2": {
    category: "Space",
    title: "Space Mission Returns Valuable Data",
    author: "Dr. James Cooper",
    time: "5 hours ago",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200&h=600&fit=crop",
    content: `
      <p>A historic space mission has successfully returned to Earth with unprecedented data about distant celestial bodies. Scientists are analyzing the information which could reshape our understanding of the universe.</p>

      <h2>Mission Highlights</h2>
      <p>The spacecraft traveled over 3 billion miles, collecting samples and capturing high-resolution images of previously unexplored regions of space.</p>

      <h2>Scientific Implications</h2>
      <p>The data gathered could provide insights into planetary formation, the possibility of extraterrestrial life, and the origins of our solar system.</p>
    `,
  },
  "trending-3": {
    category: "Education",
    title: "Education Reform Plan Announced",
    author: "Linda Martinez",
    time: "7 hours ago",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop",
    content: `
      <p>A comprehensive education reform plan has been unveiled, promising to modernize curriculum, increase teacher salaries, and improve access to technology in schools nationwide.</p>

      <h2>Key Reforms</h2>
      <ul>
        <li>Increased funding for public schools</li>
        <li>Teacher salary increases of 15%</li>
        <li>New STEM programs</li>
        <li>Technology infrastructure upgrades</li>
      </ul>

      <h2>Implementation Timeline</h2>
      <p>The reforms will be rolled out over the next three years, with priority given to underserved communities.</p>
    `,
  },
  "trending-4": {
    category: "Energy",
    title: "Renewable Energy Investment Surges",
    author: "David Thompson",
    time: "9 hours ago",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=600&fit=crop",
    content: `
      <p>Investment in renewable energy has reached record levels as companies and governments accelerate their transition away from fossil fuels. Solar and wind power capacity is expanding rapidly.</p>

      <h2>Investment Trends</h2>
      <p>Global renewable energy investment has surpassed $500 billion this year, with solar power attracting the largest share of funding.</p>

      <h2>Environmental Impact</h2>
      <p>The shift to renewable energy is expected to significantly reduce carbon emissions and help meet international climate goals.</p>
    `,
  },
  "trending-5": {
    category: "Technology",
    title: "Major Tech Company Unveils Innovation",
    author: "Alexandra Kim",
    time: "11 hours ago",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop",
    content: `
      <p>A leading technology company has introduced a revolutionary product that promises to change how we interact with digital devices. The innovation combines artificial intelligence with intuitive design.</p>

      <h2>Product Features</h2>
      <p>The new device offers unprecedented processing power, extended battery life, and seamless integration across multiple platforms.</p>

      <h2>Market Response</h2>
      <p>Industry analysts predict strong demand, with pre-orders already exceeding expectations. Competitors are likely to respond with their own innovations.</p>
    `,
  },

  // GEMA SORA Articles
  "gema-sora-1": {
    category: "GEMA SORA",
    title: "Breaking News: Perkembangan Politik Terkini",
    author: "Ahmad Wijaya",
    time: "2 hours ago",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&h=600&fit=crop",
    content: `
      <p>Perkembangan politik nasional menunjukkan dinamika yang menarik dengan berbagai kebijakan baru yang diumumkan pemerintah. Langkah-langkah strategis ini diharapkan dapat meningkatkan stabilitas politik dan pertumbuhan ekonomi.</p>

      <h2>Kebijakan Utama</h2>
      <p>Pemerintah mengumumkan serangkaian kebijakan yang meliputi:</p>
      <ul>
        <li>Reformasi birokrasi untuk meningkatkan efisiensi</li>
        <li>Program pemberdayaan ekonomi daerah</li>
        <li>Penguatan sistem demokrasi</li>
        <li>Peningkatan transparansi pemerintahan</li>
      </ul>

      <h2>Respons Publik</h2>
      <p>Masyarakat memberikan tanggapan beragam terhadap kebijakan ini. Beberapa kalangan menyambut positif, sementara yang lain masih mempertanyakan efektivitas implementasinya.</p>

      <p>Para pengamat politik menekankan pentingnya partisipasi aktif masyarakat dalam proses demokrasi untuk memastikan kebijakan yang diambil benar-benar mencerminkan aspirasi rakyat.</p>
    `,
  },
  "gema-sora-2": {
    category: "GEMA SORA",
    title: "Ekonomi Global Menunjukkan Tren Positif",
    author: "Siti Nurhaliza",
    time: "4 hours ago",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop",
    content: `
      <p>Perekonomian global menunjukkan tanda-tanda pemulihan yang menggembirakan setelah periode tantangan. Indikator ekonomi menunjukkan pertumbuhan yang konsisten di berbagai sektor.</p>

      <h2>Pertumbuhan Ekonomi</h2>
      <p>Data terbaru menunjukkan peningkatan signifikan dalam:</p>
      <ul>
        <li>Perdagangan internasional</li>
        <li>Investasi asing langsung</li>
        <li>Produktivitas manufaktur</li>
        <li>Konsumsi domestik</li>
      </ul>

      <h2>Dampak Regional</h2>
      <p>Negara-negara di Asia Tenggara mengalami pertumbuhan ekonomi yang solid, didorong oleh ekspor yang kuat dan permintaan domestik yang meningkat.</p>

      <h2>Proyeksi Masa Depan</h2>
      <p>Ekonom memproyeksikan tren positif ini akan berlanjut, meskipun ada beberapa tantangan yang perlu diwaspadai seperti inflasi dan ketidakpastian geopolitik.</p>
    `,
  },
  "gema-sora-3": {
    category: "GEMA SORA",
    title: "Perubahan Kebijakan Pemerintah",
    author: "Budi Santoso",
    time: "6 hours ago",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=600&fit=crop",
    content: `
      <p>Pemerintah mengumumkan serangkaian perubahan kebijakan yang berdampak luas terhadap berbagai sektor. Langkah ini diambil untuk merespons dinamika sosial ekonomi yang terus berkembang.</p>

      <h2>Detail Kebijakan</h2>
      <p>Perubahan kebijakan mencakup beberapa area penting:</p>
      <ul>
        <li>Regulasi sektor keuangan</li>
        <li>Kebijakan investasi</li>
        <li>Reformasi perpajakan</li>
        <li>Program kesejahteraan sosial</li>
      </ul>

      <h2>Implementasi</h2>
      <p>Kebijakan baru akan diimplementasikan secara bertahap untuk memastikan transisi yang mulus dan meminimalkan gangguan terhadap aktivitas ekonomi.</p>

      <p>Pemerintah juga berkomitmen untuk melakukan sosialisasi menyeluruh agar masyarakat memahami implikasi dari perubahan kebijakan ini.</p>
    `,
  },

  // SORA VIBE Articles
  "sora-vibe-1": {
    category: "SORA VIBE",
    title: "Modern dan Lebih Lengkap: Begini Konsep Baru Gramedia Jalma",
    author: "Najma Mutalali",
    time: "1 hour ago",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=600&fit=crop",
    content: `
      <p>Jakarta — setelah melalui proses renovasi dan hilang dari pandangan publik, Gramedia Jalma kini hadir dengan wajah baru yang jauh lebih hangat, modern, dan ramah pengunjung. Toko buku di kawasan Blok M ini tidak lagi hanya menjadi tempat membeli buku, tetapi berkembang menjadi ruang ketiga— tempat untuk beristirahat sejenak, bekerja, dan terhubung dengan sesama pecinta literasi.
.</p>

      <ul>
        <li>Sebagai langkah awal, nama “Jalma” sendiri membawa filosofi yang ingin disampaikan toko ini. Terinspirasi dari bahasa Sunda dan Jawa, jalma berarti manusia. Dari sana, Gramedia membangun ide bahwa toko buku harus menjadi ruang yang menerima siapa saja, apa pun latar belakang dan minatnya.</li>
        
        <li>Sejalan dengan hal tersebut, ruang dalam Gramedia Jalma dirancang menyerupai toko-toko buku modern di Taiwan dan Jepang— terbuka dan nyaman. Saat memasuki area toko, pengunjung langsung disambut rak-rak kayu yang tertata rapi, ditemani pencahayaan lembut yang menghangatkan suasana. </li>
        
        <li>Selain itu, beberapa sudut menyediakan sofa empuk untuk membaca santai, menciptakan pengalaman yang lebih personal. Koleksinya juga lengkap: mulai dari buku terbaru, fiksi populer, non fiksi, hingga terbitan anak muda.</li>
        <li>“salah satu yang bikin aku tertarik untuk mencoba masuk kesini adalah karena looknya yang catchy. selain itu, fasilitasnya juga oke banget karena tempat ini menawarkan pengalaman yang berbeda gitu buat pengunjungnya,” ungkap Safia, seorang mahasiswa Usakti sekaligus pengunjung Gramedia Jalma.</li>
        <li>Tak sampai disitu, Gramedia Jalma juga menyediakan ruang baca dan ruang kerja Work From Anywhere yang bisa digunakan siapa saja. Pengunjung dapat membuka laptop, mengerjakan tugas, atau melakukan pertemuan kecil didalam satu ruang yang sama.</li>
        <li>Fasilitas ini semakin lengkap dengan hadirnya sebuah kafe di dalam toko— Cafe Alo— menjadi tempat ideal untuk bekerja sambil menikmati minuman hangat. Cafe ini pun turut digemari oleh banyak pengunjung karena lokasinya yang sangat strategis.</li>
        <li>Beralih ke area komunitas, Gramedia Jalma juga menyediakan ruang khusus untuk kegiatan kreatif. Tempat ini dapat dipakai untuk klub buku, mini seminar, hingga pameran kecil. Kehadiran ruang seperti ini membuat Jalma terasa lebih hidup, karena bukan hanya buku yang menjadi pusatnya, melainkan juga interaksi sosial.</li>
        <li>Selain koleksi bacaan, pengunjung juga dapat menemukan berbagai barang unik seperti stationery, aksesori lucu, hingga mainan kreatif. Area ini menjadi favorit anak muda yang ingin mencari hadiah atau mempercantik meja kerja mereka.</li>
        <li>Dengan segala fasilitas dan suasana barunya, Gramedia Jalma perlahan membangun identitas sebagai ruang yang inklusif, hangat, dan mengutamakan pengalaman pengunjung. Tidak berlebihan jika banyak yang menyebutnya sebagai salah satu toko buku dengan konsep paling segar di Jakarta saat ini.</li>
        <li>Ke depan, Gramedia menargetkan Jalma menjadi tempat yang semakin dekat dengan komunitas. Melalui kegiatan literasi, ruang berkumpul, dan program kreatif lainnya, mereka berharap dapat menciptakan ekosistem yang membuat siapa pun merasa diterima. Ruang ini, seperti namanya, kembali pada tujuannya: menjadi tempat untuk manusia—tempat untuk bersama.</li>
      </ul>
   `,
  },
  "sora-vibe-2": {
    category: "SORA VIBE",
    title: "Musik Indie Lokal yang Wajib Didengar",
    author: "Rio Prasetyo",
    time: "3 hours ago",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200&h=600&fit=crop",
    content: `
      <p>Scene musik indie lokal terus berkembang dengan munculnya talenta-talenta baru yang membawa warna fresh ke industri musik Indonesia. Berikut adalah musisi indie yang sedang naik daun.</p>

      <h2>Musisi Pilihan</h2>
      <p>Beberapa nama yang patut diperhatikan:</p>
      <ul>
        <li>Band indie dengan sound yang unik</li>
        <li>Solo artist dengan lirik mendalam</li>
        <li>Kolaborasi lintas genre</li>
        <li>Musisi yang viral di platform digital</li>
      </ul>

      <h2>Platform Digital</h2>
      <p>Media sosial dan platform streaming memainkan peran penting dalam popularitas musisi indie, memberikan akses langsung ke penggemar tanpa harus melalui label besar.</p>

      <h2>Festival dan Konser</h2>
      <p>Berbagai festival musik indie digelar di berbagai kota, memberikan panggung bagi musisi untuk menunjukkan karya mereka.</p>
    `,
  },
  "sora-vibe-3": {
    category: "SORA VIBE",
    title: "Destinasi Wisata Hits untuk Gen Z",
    author: "Maya Indah",
    time: "5 hours ago",
    image:"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&h=600&fit=crop",
    content: `
      <p>Gen Z mencari destinasi wisata yang tidak hanya indah tetapi juga instagramable dan ramah kantong. Berikut adalah rekomendasi tempat wisata yang sedang trending.</p>

      <h2>Destinasi Populer</h2>
      <ul>
        <li>Pantai-pantai tersembunyi dengan pemandangan eksotis</li>
        <li>Kafe aesthetic dengan interior unik</li>
        <li>Spot foto instagramable di perkotaan</li>
        <li>Tempat wisata alam yang menenangkan</li>
      </ul>

      <h2>Tips Traveling</h2>
      <p>Untuk Gen Z yang ingin traveling dengan budget terbatas, ada banyak cara untuk menikmati liburan tanpa menguras dompet, mulai dari mencari promo tiket hingga memilih penginapan yang affordable.</p>

      <h2>Wisata Berkelanjutan</h2>
      <p>Gen Z juga semakin peduli dengan dampak wisata terhadap lingkungan, memilih destinasi dan aktivitas yang mendukung pariwisata berkelanjutan.</p>
    `,
  },

  // SORA KAMPUS Articles
  "sora-kampus-1": {
    category: "SORA KAMPUS",
    title: "Tips Sukses Menghadapi Ujian Akhir Semester",
    author: "Prof. Andi Prasetyo",
    time: "2 hours ago",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop",
    content: `
      <p>Ujian Akhir Semester (UAS) seringkali menjadi momok bagi mahasiswa. Namun dengan persiapan yang tepat, UAS bisa dihadapi dengan lebih percaya diri. Berikut adalah strategi belajar efektif untuk memaksimalkan hasil UAS.</p>

      <h2>Strategi Belajar Efektif</h2>
      <ul>
        <li>Buat jadwal belajar yang teratur</li>
        <li>Fokus pada materi yang sering keluar</li>
        <li>Belajar kelompok untuk saling berbagi pemahaman</li>
        <li>Latihan soal-soal tahun sebelumnya</li>
        <li>Jaga kesehatan dan tidur yang cukup</li>
      </ul>

      <h2>Manajemen Waktu</h2>
      <p>Mengatur waktu dengan baik adalah kunci sukses. Alokasikan waktu untuk setiap mata kuliah berdasarkan tingkat kesulitan dan bobot SKS.</p>

      <h2>Teknik Menghafal</h2>
      <p>Gunakan teknik mind mapping, mnemonic, atau flashcard untuk membantu mengingat materi yang banyak. Metode pomodoro juga efektif untuk menjaga konsentrasi.</p>

      <h2>Mengatasi Stres</h2>
      <p>Jangan lupa untuk mengambil waktu istirahat. Olahraga ringan, meditasi, atau aktivitas hobi dapat membantu mengurangi stres selama persiapan UAS.</p>
    `,
  },
  "sora-kampus-2": {
    category: "SORA KAMPUS",
    title: "Organisasi Kampus dan Manfaatnya untuk Karir",
    author: "Dr. Siti Rahayu",
    time: "4 hours ago",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=600&fit=crop",
    content: `
      <p>Aktif di organisasi kampus bukan sekadar mengisi waktu luang, tetapi merupakan investasi penting untuk pengembangan diri dan karir masa depan. Berikut adalah manfaat yang bisa didapat.</p>

      <h2>Pengembangan Soft Skills</h2>
      <ul>
        <li>Leadership dan manajemen tim</li>
        <li>Komunikasi dan public speaking</li>
        <li>Problem solving dan critical thinking</li>
        <li>Time management</li>
        <li>Networking dan relasi</li>
      </ul>

      <h2>Pengalaman Praktis</h2>
      <p>Organisasi kampus memberikan kesempatan untuk mengaplikasikan teori yang dipelajari di kelas ke dalam situasi nyata, seperti mengorganisir event, mengelola budget, dan bekerja dalam tim.</p>

      <h2>Membangun Portofolio</h2>
      <p>Pengalaman berorganisasi menjadi nilai tambah dalam CV dan portfolio, menunjukkan kepada calon employer bahwa kamu memiliki kemampuan lebih dari sekadar nilai akademis.</p>

      <h2>Tips Memilih Organisasi</h2>
      <p>Pilih organisasi yang sesuai dengan minat dan tujuan karir kamu. Jangan terlalu banyak bergabung, fokus pada 1-2 organisasi agar bisa memberikan kontribusi maksimal.</p>
    `,
  },
  "sora-kampus-3": {
    category: "SORA KAMPUS",
    title: "Beasiswa Kuliah yang Masih Dibuka",
    author: "Linda Kusuma",
    time: "6 hours ago",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=600&fit=crop",
    content: `
      <p>Informasi lengkap tentang berbagai program beasiswa yang masih membuka pendaftaran untuk mahasiswa Indonesia, baik untuk studi dalam negeri maupun luar negeri.</p>

      <h2>Beasiswa Dalam Negeri</h2>
      <ul>
        <li>Beasiswa Bidikmisi untuk mahasiswa kurang mampu</li>
        <li>Beasiswa prestasi dari universitas</li>
        <li>Beasiswa dari perusahaan BUMN</li>
        <li>Beasiswa dari yayasan dan organisasi</li>
      </ul>

      <h2>Beasiswa Luar Negeri</h2>
      <p>Program beasiswa populer untuk studi di luar negeri:</p>
      <ul>
        <li>Fulbright Scholarship (Amerika Serikat)</li>
        <li>Chevening Scholarship (Inggris)</li>
        <li>DAAD Scholarship (Jerman)</li>
        <li>Monbukagakusho (Jepang)</li>
      </ul>

      <h2>Tips Mendaftar Beasiswa</h2>
      <p>Persiapkan dokumen dengan baik, tulis motivation letter yang menarik, dan perkuat kemampuan bahasa Inggris. Jangan lupa untuk apply ke beberapa program sekaligus untuk meningkatkan peluang.</p>

      <h2>Deadline dan Persyaratan</h2>
      <p>Selalu cek deadline pendaftaran dan persyaratan khusus untuk setiap program beasiswa. Mulai persiapkan dokumen jauh-jauh hari untuk menghindari ketergesa-gesaan.</p>
    `,
  },

  // SORA RASA Articles
  "sora-rasa-1": {
    category: "SORA RASA",
    title: "Resep Makanan Viral yang Mudah Dibuat",
    author: "Chef Rina",
    time: "1 hour ago",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=600&fit=crop",
    content: `
      <p>Makanan viral di TikTok dan Instagram seringkali terlihat rumit, padahal banyak yang sebenarnya mudah dibuat di rumah. Berikut adalah kumpulan resep makanan viral yang simpel dan enak.</p>

      <h2>Resep Populer</h2>
      <ul>
        <li>Dalgona Coffee - minuman kekinian yang aesthetic</li>
        <li>Korean Corn Dog - cemilan gurih dengan keju mozzarella</li>
        <li>Baked Feta Pasta - pasta dengan feta panggang</li>
        <li>Cloud Bread - roti lembut seperti awan</li>
      </ul>

      <h2>Tips Membuat</h2>
      <p>Kunci sukses membuat makanan viral adalah mengikuti takaran dengan tepat dan menggunakan bahan berkualitas. Jangan takut untuk bereksperimen dengan variasi rasa.</p>

      <h2>Bahan yang Dibutuhkan</h2>
      <p>Sebagian besar bahan bisa ditemukan di supermarket terdekat. Untuk bahan spesial seperti keju mozzarella atau feta, bisa dibeli di toko bahan kue atau online.</p>

      <h2>Presentasi</h2>
      <p>Jangan lupa untuk mempresentasikan makanan dengan menarik. Gunakan piring yang bagus, tambahkan garnish, dan foto dengan pencahayaan yang baik untuk hasil yang instagramable.</p>
    `,
  },
  "sora-rasa-2": {
    category: "SORA RASA",
    title: "Kuliner Nusantara yang Wajib Dicoba",
    author: "Budi Rahardjo",
    time: "3 hours ago",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&h=600&fit=crop",
    content: `
      <p>Indonesia memiliki kekayaan kuliner yang luar biasa dari Sabang sampai Merauke. Setiap daerah memiliki hidangan khas dengan cita rasa yang unik dan istimewa.</p>

      <h2>Kuliner Favorit</h2>
      <ul>
        <li>Rendang - masakan Padang yang mendunia</li>
        <li>Gudeg - makanan manis khas Yogyakarta</li>
        <li>Pempek - ikan olahan khas Palembang</li>
        <li>Sate Lilit - sate khas Bali</li>
        <li>Coto Makassar - sup daging khas Sulawesi</li>
      </ul>

      <h2>Sejarah Kuliner</h2>
      <p>Setiap hidangan memiliki cerita dan sejarah yang menarik, mencerminkan budaya dan tradisi masyarakat setempat. Misalnya rendang yang dulunya dibuat untuk perjalanan jauh karena tahan lama.</p>

      <h2>Tempat Makan Recommended</h2>
      <p>Untuk merasakan kuliner nusantara yang authentic, kunjungi warung-warung tradisional atau rumah makan yang sudah berpuluh tahun berdiri. Mereka biasanya mempertahankan resep turun temurun.</p>

      <h2>Eksistensi di Era Modern</h2>
      <p>Kuliner nusantara kini semakin dikenal di kancah internasional. Banyak chef yang mengangkat hidangan tradisional dengan presentasi modern tanpa menghilangkan cita rasa aslinya.</p>
    `,
  },
  "sora-rasa-3": {
    category: "SORA RASA",
    title: "Kafe Aesthetic di Jakarta",
    author: "Maya Sari",
    time: "5 hours ago",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=600&fit=crop",
    content: `
      <p>Jakarta memiliki banyak kafe dengan interior aesthetic yang instagramable dan menu yang enak. Berikut adalah rekomendasi kafe yang wajib dikunjungi untuk nongkrong atau bekerja.</p>

      <h2>Kafe Pilihan</h2>
      <ul>
        <li>Kafe minimalis dengan desain industrial</li>
        <li>Kafe dengan konsep garden yang asri</li>
        <li>Kafe cozy dengan interior vintage</li>
        <li>Kafe modern dengan rooftop view</li>
      </ul>

      <h2>Menu Favorit</h2>
      <p>Selain interior yang menarik, kafe-kafe ini juga menyajikan menu yang lezat mulai dari specialty coffee, dessert unik, hingga main course yang mengenyangkan.</p>

      <h2>Harga dan Lokasi</h2>
      <p>Kisaran harga bervariasi mulai dari yang affordable hingga premium. Kebanyakan berlokasi di area strategis seperti Kemang, Senopati, atau PIK yang mudah diakses.</p>

      <h2>Fasilitas</h2>
      <p>Hampir semua kafe menyediakan WiFi gratis dan colokan listrik, cocok untuk working space atau meeting dengan klien. Beberapa juga memiliki area outdoor untuk yang suka suasana outdoor.</p>
    `,
  },

  // Berita Utama Articles
  "news-5": {
    category: "World",
    title: "International Trade Talks Show Promising Results",
    author: "Maya Sari",
    time: "5 hours ago",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=400&fit=crop",
    content: `
      <p>Jakarta meiliki banyak kafe dengan interior aesthetic yang instagramable dan menu yang enak. Berikut adalah rekomendasi kafe yang wajib dikunjungi untuk nongkrong atau bekerja.</p>

      <h2>Kafe Pilhan</h2>
      <ul>
        <li>Kafe malis dengan desain industrial</li>
        <li>Kafe konsep garden yang asri</li>
        <li>Kafe cozy interior vintage</li>
        <li>Kafe modern  rooftop view</li>
      </ul>

      <h2>Menu Favorit</h2>
      <p>Selain interior yang menarik, kafe-kafe ini juga menyajikan menu yang lezat mulai dari specialty coffee, dessert unik, hingga main course yang mengenyangkan.</p>

      <h2>Harga dan Lokasi</h2>
      <p>Kisaran harga bervariasi mulai dari yang affordable hingga premium. Kebanyakan berlokasi di area strategis seperti Kemang, Senopati, atau PIK yang mudah diakses.</p>

      <h2>Fasilitas</h2>
      <p>Hampir semua kafe menyediakan WiFi gratis dan colokan listrik, cocok untuk working space atau meeting dengan klien. Beberapa juga memiliki area outdoor untuk yang suka suasana outdoor.</p>
    `,
  },
  "news-6": {
    category: "Science",
    title: "New Discovery in Deep Ocean Exploration",
    excerpt: "Marine biologists uncover previously unknown species in the Mariana Trench.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
    time: "5 hours ago",
    content: `
      <p>Jakarta meiliki banyak kafe dengan interior aesthetic yang instagramable dan menu yang enak. Berikut adalah rekomendasi kafe yang wajib dikunjungi untuk nongkrong atau bekerja.</p>

      <h2>Kafe Pilhan</h2>
      <ul>
        <li>Kafe malis dengan desain industrial</li>
        <li>Kafe konsep garden yang asri</li>
        <li>Kafe cozy interior vintage</li>
        <li>Kafe modern  rooftop view</li>
      </ul>

      <h2>Menu Favorit</h2>
      <p>Selain interior yang menarik, kafe-kafe ini juga menyajikan menu yang lezat mulai dari specialty coffee, dessert unik, hingga main course yang mengenyangkan.</p>

      <h2>Harga dan Lokasi</h2>
      <p>Kisaran harga bervariasi mulai dari yang affordable hingga premium. Kebanyakan berlokasi di area strategis seperti Kemang, Senopati, atau PIK yang mudah diakses.</p>

      <h2>Fasilitas</h2>
      <p>Hampir semua kafe menyediakan WiFi gratis dan colokan listrik, cocok untuk working space atau meeting dengan klien. Beberapa juga memiliki area outdoor untuk yang suka suasana outdoor.</p>
    `,
  },
  "news-7": {
    category: "Sports",
    title: "Championship Finals Set New Viewership Records",
    excerpt: "Historic match draws millions of viewers worldwide in thrilling conclusion.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
    time: "7 hours ago",
    content: `
      <p>Jakarta meiliki banyak kafe dengan interior aesthetic yang instagramable dan menu yang enak. Berikut adalah rekomendasi kafe yang wajib dikunjungi untuk nongkrong atau bekerja.</p>

      <h2>Kafe Pilhan</h2>
      <ul>
        <li>Kafe malis dengan desain industrial</li>
        <li>Kafe konsep garden yang asri</li>
        <li>Kafe cozy interior vintage</li>
        <li>Kafe modern  rooftop view</li>
      </ul>

      <h2>Menu Favorit</h2>
      <p>Selain interior yang menarik, kafe-kafe ini juga menyajikan menu yang lezat mulai dari specialty coffee, dessert unik, hingga main course yang mengenyangkan.</p>

      <h2>Harga dan Lokasi</h2>
      <p>Kisaran harga bervariasi mulai dari yang affordable hingga premium. Kebanyakan berlokasi di area strategis seperti Kemang, Senopati, atau PIK yang mudah diakses.</p>

      <h2>Fasilitas</h2>
      <p>Hampir semua kafe menyediakan WiFi gratis dan colokan listrik, cocok untuk working space atau meeting dengan klien. Beberapa juga memiliki area outdoor untuk yang suka suasana outdoor.</p>
    `,
  },
  "news-8": {
    category: "Technology",
    title: "Quantum Computing Reaches New Milestone",
    excerpt: "Researchers achieve breakthrough in quantum error correction, paving the way for practical applications.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
    time: "9 hours ago",
    content: `
      <p>Jakarta meiliki banyak kafe dengan interior aesthetic yang instagramable dan menu yang enak. Berikut adalah rekomendasi kafe yang wajib dikunjungi untuk nongkrong atau bekerja.</p>

      <h2>Kafe Pilhan</h2>
      <ul>
        <li>Kafe malis dengan desain industrial</li>
        <li>Kafe konsep garden yang asri</li>
        <li>Kafe cozy interior vintage</li>
        <li>Kafe modern  rooftop view</li>
      </ul>

      <h2>Menu Favorit</h2>
      <p>Selain interior yang menarik, kafe-kafe ini juga menyajikan menu yang lezat mulai dari specialty coffee, dessert unik, hingga main course yang mengenyangkan.</p>

      <h2>Harga dan Lokasi</h2>
      <p>Kisaran harga bervariasi mulai dari yang affordable hingga premium. Kebanyakan berlokasi di area strategis seperti Kemang, Senopati, atau PIK yang mudah diakses.</p>

      <h2>Fasilitas</h2>
      <p>Hampir semua kafe menyediakan WiFi gratis dan colokan listrik, cocok untuk working space atau meeting dengan klien. Beberapa juga memiliki area outdoor untuk yang suka suasana outdoor.</p>
    `,
  },
  "news-9": {
   category: "Health",
    title: "Medical Study Reveals Benefits of Plant-Based Diet",
    excerpt: "Long-term research shows significant health improvements among participants.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
    time: "12 hours ago",
    content: `
      <p>Jakarta meiliki banyak kafe dengan interior aesthetic yang instagramable dan menu yang enak. Berikut adalah rekomendasi kafe yang wajib dikunjungi untuk nongkrong atau bekerja.</p>

      <h2>Kafe Pilhan</h2>
      <ul>
        <li>Kafe malis dengan desain industrial</li>
        <li>Kafe konsep garden yang asri</li>
        <li>Kafe cozy interior vintage</li>
        <li>Kafe modern  rooftop view</li>
      </ul>

      <h2>Menu Favorit</h2>
      <p>Selain interior yang menarik, kafe-kafe ini juga menyajikan menu yang lezat mulai dari specialty coffee, dessert unik, hingga main course yang mengenyangkan.</p>

      <h2>Harga dan Lokasi</h2>
      <p>Kisaran harga bervariasi mulai dari yang affordable hingga premium. Kebanyakan berlokasi di area strategis seperti Kemang, Senopati, atau PIK yang mudah diakses.</p>

      <h2>Fasilitas</h2>
      <p>Hampir semua kafe menyediakan WiFi gratis dan colokan listrik, cocok untuk working space atau meeting dengan klien. Beberapa juga memiliki area outdoor untuk yang suka suasana outdoor.</p>
    `,
  },
  "news-10": {
    category: "Culture",
    title: "Art Exhibition Breaks Attendance Records",
    excerpt: "Museum visitors flock to see rare collection of contemporary masterpieces.",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop",
    time: "14 hours ago",
    content: `
      <p>Jakarta meiliki banyak kafe dengan interior aesthetic yang instagramable dan menu yang enak. Berikut adalah rekomendasi kafe yang wajib dikunjungi untuk nongkrong atau bekerja.</p>

      <h2>Kafe Pilhan</h2>
      <ul>
        <li>Kafe malis dengan desain industrial</li>
        <li>Kafe konsep garden yang asri</li>
        <li>Kafe cozy interior vintage</li>
        <li>Kafe modern  rooftop view</li>
      </ul>

      <h2>Menu Favorit</h2>
      <p>Selain interior yang menarik, kafe-kafe ini juga menyajikan menu yang lezat mulai dari specialty coffee, dessert unik, hingga main course yang mengenyangkan.</p>

      <h2>Harga dan Lokasi</h2>
      <p>Kisaran harga bervariasi mulai dari yang affordable hingga premium. Kebanyakan berlokasi di area strategis seperti Kemang, Senopati, atau PIK yang mudah diakses.</p>

      <h2>Fasilitas</h2>
      <p>Hampir semua kafe menyediakan WiFi gratis dan colokan listrik, cocok untuk working space atau meeting dengan klien. Beberapa juga memiliki area outdoor untuk yang suka suasana outdoor.</p>
    `,
  },

  // Category Section Articles
  "11" : {
    category: "GEMA SORA",
    title: "Breaking News: Perkembangan Politik Terkini",
    author: "Ahmad Wijaya",
    time: "2 hours ago",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&h=600&fit=crop",
    content: `
      <p>Perkembangan politik nasional menunjukkan dinamika yang menarik dengan berbagai kebijakan baru yang diumumkan pemerintah. Langkah-langkah strategis ini diharapkan dapat meningkatkan stabilitas politik dan pertumbuhan ekonomi.</p>

      <h2>Kebijakan Utama</h2>
      <p>Pemerintah mengumumkan serangkaian kebijakan yang meliputi:</p>
      <ul>
        <li>Reformasi birokrasi untuk meningkatkan efisiensi</li>
        <li>Program pemberdayaan ekonomi daerah</li>
        <li>Penguatan sistem demokrasi</li>
        <li>Peningkatan transparansi pemerintahan</li>
      </ul>

      <h2>Respons Publik</h2>
      <p>Masyarakat memberikan tanggapan beragam terhadap kebijakan ini. Beberapa kalangan menyambut positif, sementara yang lain masih mempertanyakan efektivitas implementasinya.</p>

      <p>Para pengamat politik menekankan pentingnya partisipasi aktif masyarakat dalam proses demokrasi untuk memastikan kebijakan yang diambil benar-benar mencerminkan aspirasi rakyat.</p>
    `,
  },
  "12" : {
    category: "GEMA SORA",
    title: "Ekonomi Global Menunjukkan Tren Positif",
    author: "Siti Nurhaliza",
    time: "4 hours ago",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop",
    content: `
      <p>Perekonomian global menunjukkan tanda-tanda pemulihan yang menggembirakan setelah periode tantangan. Indikator ekonomi menunjukkan pertumbuhan yang konsisten di berbagai sektor.</p>

      <h2>Pertumbuhan Ekonomi</h2>
      <p>Data terbaru menunjukkan peningkatan signifikan dalam:</p>
      <ul>
        <li>Perdagangan internasional</li>
        <li>Investasi asing langsung</li>
        <li>Produktivitas manufaktur</li>
        <li>Konsumsi domestik</li>
      </ul>

      <h2>Dampak Regional</h2>
      <p>Negara-negara di Asia Tenggara mengalami pertumbuhan ekonomi yang solid, didorong oleh ekspor yang kuat dan permintaan domestik yang meningkat.</p>

      <h2>Proyeksi Masa Depan</h2>
      <p>Ekonom memproyeksikan tren positif ini akan berlanjut, meskipun ada beberapa tantangan yang perlu diwaspadai seperti inflasi dan ketidakpastian geopolitik.</p>
    `,
  },
  "13" : {
    category: "GEMA SORA",
    title: "Perubahan Kebijakan Pemerintah",
    author: "Budi Santoso",
    time: "6 hours ago",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=600&fit=crop",
    content: `
      <p>Pemerintah mengumumkan serangkaian perubahan kebijakan yang berdampak luas terhadap berbagai sektor. Langkah ini diambil untuk merespons dinamika sosial ekonomi yang terus berkembang.</p>

      <h2>Detail Kebijakan</h2>
      <p>Perubahan kebijakan mencakup beberapa area penting:</p>
      <ul>
        <li>Regulasi sektor keuangan</li>
        <li>Kebijakan investasi</li>
        <li>Reformasi perpajakan</li>
        <li>Program kesejahteraan sosial</li>
      </ul>

      <h2>Implementasi</h2>
      <p>Kebijakan baru akan diimplementasikan secara bertahap untuk memastikan transisi yang mulus dan meminimalkan gangguan terhadap aktivitas ekonomi.</p>

      <p>Pemerintah juga berkomitmen untuk melakukan sosialisasi menyeluruh agar masyarakat memahami implikasi dari perubahan kebijakan ini.</p>
    `,
  },
  "14" :{
    category: "SORA KAMPUS",
    title: "Tips Sukses Menghadapi Ujian Akhir Semester",
    author: "Prof. Andi Prasetyo",
    time: "2 hours ago",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop",
    content: `
      <p>Ujian Akhir Semester (UAS) seringkali menjadi momok bagi mahasiswa. Namun dengan persiapan yang tepat, UAS bisa dihadapi dengan lebih percaya diri. Berikut adalah strategi belajar efektif untuk memaksimalkan hasil UAS.</p>

      <h2>Strategi Belajar Efektif</h2>
      <ul>
        <li>Buat jadwal belajar yang teratur</li>
        <li>Fokus pada materi yang sering keluar</li>
        <li>Belajar kelompok untuk saling berbagi pemahaman</li>
        <li>Latihan soal-soal tahun sebelumnya</li>
        <li>Jaga kesehatan dan tidur yang cukup</li>
      </ul>

      <h2>Manajemen Waktu</h2>
      <p>Mengatur waktu dengan baik adalah kunci sukses. Alokasikan waktu untuk setiap mata kuliah berdasarkan tingkat kesulitan dan bobot SKS.</p>

      <h2>Teknik Menghafal</h2>
      <p>Gunakan teknik mind mapping, mnemonic, atau flashcard untuk membantu mengingat materi yang banyak. Metode pomodoro juga efektif untuk menjaga konsentrasi.</p>

      <h2>Mengatasi Stres</h2>
      <p>Jangan lupa untuk mengambil waktu istirahat. Olahraga ringan, meditasi, atau aktivitas hobi dapat membantu mengurangi stres selama persiapan UAS.</p>
    `,
  },
  "15" :{
    category: "SORA KAMPUS",
    title: "Organisasi Kampus dan Manfaatnya untuk Karir",
    author: "Dr. Siti Rahayu",
    time: "4 hours ago",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=600&fit=crop",
    content: `
      <p>Aktif di organisasi kampus bukan sekadar mengisi waktu luang, tetapi merupakan investasi penting untuk pengembangan diri dan karir masa depan. Berikut adalah manfaat yang bisa didapat.</p>

      <h2>Pengembangan Soft Skills</h2>
      <ul>
        <li>Leadership dan manajemen tim</li>
        <li>Komunikasi dan public speaking</li>
        <li>Problem solving dan critical thinking</li>
        <li>Time management</li>
        <li>Networking dan relasi</li>
      </ul>

      <h2>Pengalaman Praktis</h2>
      <p>Organisasi kampus memberikan kesempatan untuk mengaplikasikan teori yang dipelajari di kelas ke dalam situasi nyata, seperti mengorganisir event, mengelola budget, dan bekerja dalam tim.</p>

      <h2>Membangun Portofolio</h2>
      <p>Pengalaman berorganisasi menjadi nilai tambah dalam CV dan portfolio, menunjukkan kepada calon employer bahwa kamu memiliki kemampuan lebih dari sekadar nilai akademis.</p>

      <h2>Tips Memilih Organisasi</h2>
      <p>Pilih organisasi yang sesuai dengan minat dan tujuan karir kamu. Jangan terlalu banyak bergabung, fokus pada 1-2 organisasi agar bisa memberikan kontribusi maksimal.</p>
    `,
  },
  "16" : {
    category: "SORA KAMPUS",
    title: "Beasiswa Kuliah yang Masih Dibuka",
    author: "Linda Kusuma",
    time: "6 hours ago",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=600&fit=crop",
    content: `
      <p>Informasi lengkap tentang berbagai program beasiswa yang masih membuka pendaftaran untuk mahasiswa Indonesia, baik untuk studi dalam negeri maupun luar negeri.</p>

      <h2>Beasiswa Dalam Negeri</h2>
      <ul>
        <li>Beasiswa Bidikmisi untuk mahasiswa kurang mampu</li>
        <li>Beasiswa prestasi dari universitas</li>
        <li>Beasiswa dari perusahaan BUMN</li>
        <li>Beasiswa dari yayasan dan organisasi</li>
      </ul>

      <h2>Beasiswa Luar Negeri</h2>
      <p>Program beasiswa populer untuk studi di luar negeri:</p>
      <ul>
        <li>Fulbright Scholarship (Amerika Serikat)</li>
        <li>Chevening Scholarship (Inggris)</li>
        <li>DAAD Scholarship (Jerman)</li>
        <li>Monbukagakusho (Jepang)</li>
      </ul>

      <h2>Tips Mendaftar Beasiswa</h2>
      <p>Persiapkan dokumen dengan baik, tulis motivation letter yang menarik, dan perkuat kemampuan bahasa Inggris. Jangan lupa untuk apply ke beberapa program sekaligus untuk meningkatkan peluang.</p>

      <h2>Deadline dan Persyaratan</h2>
      <p>Selalu cek deadline pendaftaran dan persyaratan khusus untuk setiap program beasiswa. Mulai persiapkan dokumen jauh-jauh hari untuk menghindari ketergesa-gesaan.</p>
    `,
  },
  "17" : {
    category: "SORA VIBE",
    title: "Modern dan Lebih Lengkap: Begini Konsep Baru Gramedia Jalma",
    author: "Najma Mutalali",
    time: "1 hour ago",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=600&fit=crop",
    content: `
      <p>Jakarta — setelah melalui proses renovasi dan hilang dari pandangan publik, Gramedia Jalma kini hadir dengan wajah baru yang jauh lebih hangat, modern, dan ramah pengunjung. Toko buku di kawasan Blok M ini tidak lagi hanya menjadi tempat membeli buku, tetapi berkembang menjadi ruang ketiga— tempat untuk beristirahat sejenak, bekerja, dan terhubung dengan sesama pecinta literasi.
.</p>

      <ul>
        <li>Sebagai langkah awal, nama “Jalma” sendiri membawa filosofi yang ingin disampaikan toko ini. Terinspirasi dari bahasa Sunda dan Jawa, jalma berarti manusia. Dari sana, Gramedia membangun ide bahwa toko buku harus menjadi ruang yang menerima siapa saja, apa pun latar belakang dan minatnya.</li>
        
        <li>Sejalan dengan hal tersebut, ruang dalam Gramedia Jalma dirancang menyerupai toko-toko buku modern di Taiwan dan Jepang— terbuka dan nyaman. Saat memasuki area toko, pengunjung langsung disambut rak-rak kayu yang tertata rapi, ditemani pencahayaan lembut yang menghangatkan suasana. </li>
        
        <li>Selain itu, beberapa sudut menyediakan sofa empuk untuk membaca santai, menciptakan pengalaman yang lebih personal. Koleksinya juga lengkap: mulai dari buku terbaru, fiksi populer, non fiksi, hingga terbitan anak muda.</li>
        <li>“salah satu yang bikin aku tertarik untuk mencoba masuk kesini adalah karena looknya yang catchy. selain itu, fasilitasnya juga oke banget karena tempat ini menawarkan pengalaman yang berbeda gitu buat pengunjungnya,” ungkap Safia, seorang mahasiswa Usakti sekaligus pengunjung Gramedia Jalma.</li>
        <li>Tak sampai disitu, Gramedia Jalma juga menyediakan ruang baca dan ruang kerja Work From Anywhere yang bisa digunakan siapa saja. Pengunjung dapat membuka laptop, mengerjakan tugas, atau melakukan pertemuan kecil didalam satu ruang yang sama.</li>
        <li>Fasilitas ini semakin lengkap dengan hadirnya sebuah kafe di dalam toko— Cafe Alo— menjadi tempat ideal untuk bekerja sambil menikmati minuman hangat. Cafe ini pun turut digemari oleh banyak pengunjung karena lokasinya yang sangat strategis.</li>
        <li>Beralih ke area komunitas, Gramedia Jalma juga menyediakan ruang khusus untuk kegiatan kreatif. Tempat ini dapat dipakai untuk klub buku, mini seminar, hingga pameran kecil. Kehadiran ruang seperti ini membuat Jalma terasa lebih hidup, karena bukan hanya buku yang menjadi pusatnya, melainkan juga interaksi sosial.</li>
        <li>Selain koleksi bacaan, pengunjung juga dapat menemukan berbagai barang unik seperti stationery, aksesori lucu, hingga mainan kreatif. Area ini menjadi favorit anak muda yang ingin mencari hadiah atau mempercantik meja kerja mereka.</li>
        <li>Dengan segala fasilitas dan suasana barunya, Gramedia Jalma perlahan membangun identitas sebagai ruang yang inklusif, hangat, dan mengutamakan pengalaman pengunjung. Tidak berlebihan jika banyak yang menyebutnya sebagai salah satu toko buku dengan konsep paling segar di Jakarta saat ini.</li>
        <li>Ke depan, Gramedia menargetkan Jalma menjadi tempat yang semakin dekat dengan komunitas. Melalui kegiatan literasi, ruang berkumpul, dan program kreatif lainnya, mereka berharap dapat menciptakan ekosistem yang membuat siapa pun merasa diterima. Ruang ini, seperti namanya, kembali pada tujuannya: menjadi tempat untuk manusia—tempat untuk bersama.</li>
      </ul>
   `,
  },
  "18" : {
    category: "SORA VIBE",
    title: "Musik Indie Lokal yang Wajib Didengar",
    author: "Rio Prasetyo",
    time: "3 hours ago",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200&h=600&fit=crop",
    content: `
      <p>Scene musik indie lokal terus berkembang dengan munculnya talenta-talenta baru yang membawa warna fresh ke industri musik Indonesia. Berikut adalah musisi indie yang sedang naik daun.</p>

      <h2>Musisi Pilihan</h2>
      <p>Beberapa nama yang patut diperhatikan:</p>
      <ul>
        <li>Band indie dengan sound yang unik</li>
        <li>Solo artist dengan lirik mendalam</li>
        <li>Kolaborasi lintas genre</li>
        <li>Musisi yang viral di platform digital</li>
      </ul>

      <h2>Platform Digital</h2>
      <p>Media sosial dan platform streaming memainkan peran penting dalam popularitas musisi indie, memberikan akses langsung ke penggemar tanpa harus melalui label besar.</p>

      <h2>Festival dan Konser</h2>
      <p>Berbagai festival musik indie digelar di berbagai kota, memberikan panggung bagi musisi untuk menunjukkan karya mereka.</p>
    `,
  },
  "19" : {
    category: "SORA VIBE",
    title: "Destinasi Wisata Hits untuk Gen Z",
    author: "Maya Indah",
    time: "5 hours ago",
    image:"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&h=600&fit=crop",
    content: `
      <p>Gen Z mencari destinasi wisata yang tidak hanya indah tetapi juga instagramable dan ramah kantong. Berikut adalah rekomendasi tempat wisata yang sedang trending.</p>

      <h2>Destinasi Populer</h2>
      <ul>
        <li>Pantai-pantai tersembunyi dengan pemandangan eksotis</li>
        <li>Kafe aesthetic dengan interior unik</li>
        <li>Spot foto instagramable di perkotaan</li>
        <li>Tempat wisata alam yang menenangkan</li>
      </ul>

      <h2>Tips Traveling</h2>
      <p>Untuk Gen Z yang ingin traveling dengan budget terbatas, ada banyak cara untuk menikmati liburan tanpa menguras dompet, mulai dari mencari promo tiket hingga memilih penginapan yang affordable.</p>

      <h2>Wisata Berkelanjutan</h2>
      <p>Gen Z juga semakin peduli dengan dampak wisata terhadap lingkungan, memilih destinasi dan aktivitas yang mendukung pariwisata berkelanjutan.</p>
    `,
  }
};