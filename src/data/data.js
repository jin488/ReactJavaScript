const products = [
    {
        id: "01",
        name: "Samsung 24” G50 Curved Gaming Monitor, 144Hz Full HD VA, FreeSync",
        description: "The Samsung 24-inch G50 Curved Gaming Monitor features a 144Hz refresh rate, Full HD (1080p) resolution, and FreeSync technology, making it ideal for a smooth and fast gaming experience. Its 1800R curved screen provides additional immersion in games.",
        price: " 488",
        category: "components",
        stock: 8,
        image: "/img/monitorsamsung.jpg",
        secondImage: "/img/monitorsamsungback.jpg"
    },

    {
        id: "02",
        name: "Samsung 25” G4 Odyssey Gaming Monitor, 240Hz IPS Full HD, G-Sync, FreeSync",
        description: "The Samsung Odyssey G4 Gaming Monitor, 25”, features a Full HD IPS display with a 240Hz refresh rate. It is compatible with both G-Sync and FreeSync, providing a smoother gaming experience by eliminating screen tearing and lag.",
        price: " 500",
        category: "components",
        stock: 13,
        image: "/img/monitorsamunggamer.jpg",
        secondImage: "/img/monitorsamunggamerback.jpg"
    },

    {
        id: "03",
        name: "ASUS TUF 27” VG27AQA1A Gaming Monitor, VA WQHD 2K, 170Hz, 1ms, FreeSync Premium.",
        description: "The ASUS TUF 27” VG27AQA1A monitor features a WQHD resolution (2560 x 1440), a 170Hz refresh rate, a 1ms response time, and is compatible with FreeSync Premium. It is ideal for gaming due to its low latency and high refresh rate. Be sure to verify the exact specifications before making a purchase.",
        price: " 476",
        category: "components",
        stock: 16,
        image: "/img/monitorasus.jpg",
        secondImage: "/img/monitorasusback.jpg"
    },

    {
        id: "04",
        name: "LG 43” Ultra HD 4K HDR 10 Pro AI ThinQ Smart TV, model 43UR8750PSA.",
        description: "The LG 43” Ultra HD 4K HDR 10 Pro AI ThinQ Smart TV, model 43UR8750PSA, features 4K UHD resolution and LED display technology. It is equipped with the α5 AI Processor 4K Gen6, delivering vivid colors and remarkable details. Its smart functionality allows access to various apps and multimedia content.",
        price: " 518",
        category: "televisors",
        stock: 3,
        image: "/img/televisorlg.jpg",
        secondImage: "/img/televisorlgback.jpg"
    },


    {
        id: "05",
        name: "LG NanoCell 55” Ultra HD 4K AI ThinQ Smart TV, model 55NANO80SQA.",
        description: "The LG NanoCell 55” Ultra HD 4K AI ThinQ Smart TV, model 55NANO80SQA, features NanoCell technology, Filmmaker Mode, virtual 5.1.2 Ch sound with AI Sound Pro, and is powered by the webOS operating system.",
        price: " 825",
        category: "televisors",
        stock: 2,
        image: "/img/lgnanocell.jpg",
        secondImage: "/img/lgnanocellback.jpg"
    },

    {
        id: "06",
        name: "Lenovo IdeaPad 1 15ALC7 Notebook, FHD 15.6”, Ryzen 5 5500U, 8GB RAM, 256GB SSD NVMe, Windows 11, Blue.",
        description: "The Lenovo IdeaPad 1 15ALC7 features a 15.6” FHD display, Ryzen 5 5500U processor, 8GB RAM, and a 256GB NVMe SSD. It's suitable for daily tasks and productivity, making it ideal for everyday use.",
        price: " 824",
        category: "notebooks",
        stock: 6,
        image: "/img/notebooklenovo.jpg",
        secondImage: "/img/notebooklenovofront.jpg"
    },


    {
        id: "07",
        name: "Noblex N14 Notebook, 14” FHD, i3-1115G4, 8GB RAM, 256GB SSD, Windows 11.",
        description: "The Noblex N14 Notebook features an Intel Core i3-1115G4 processor, a 14-inch Full HD (1920x1080) display, 8GB of RAM, and a 256GB SSD. It also includes Windows 11. I recommend checking the availability and specific features before making a purchase.",
        price: " 465",
        category: "notebooks",
        stock: 4,
        image: "/img/notebooknoblex.jpg",
        secondImage: "/img/notebooknoblexrigth.jpg"
    },

    {
        id: "08",
        name: "MSI Sword 16HX Gaming Notebook, 16” 144Hz display, i7-14650HX processor, RTX 4060 GPU, 16GB RAM, 1TB SSD, Windows 11.",
        description: "El Notebook Gamer MSI Sword 16HX cuenta con una pantalla de 16 pulgadas y una tasa de refresco de 144Hz. Funciona con un procesador i7-14650HX, tiene una tarjeta gráfica RTX 4060, 16GB de RAM y un SSD de 1TB, todo ello con Windows 11 preinstalado.",
        price: " 2.380",
        category: "notebooks",
        stock: 3,
        image: "/img/notebookmsi.jpg",
        secondImage: "/img/notebookmsitop.jpg"
    }
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    });
};

export default getProducts