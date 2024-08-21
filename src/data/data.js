const products = [
    {
        id: "01",
        name: "Monitor Curvo Gamer Samsung 24” G50 144Hz Full HD VA FreeSync",
        description: "",
        price: " 460.591",
        category: "components",
        stock: 8,
        image: "/img/monitorsamsung.jpg"
    },

    {
        id: "02",
        name: "Monitor Gamer Samsung 25” G4 Odyssey 240Hz IPS Full HD GSync FreeSync",
        description: "",
        price: " 470.000",
        category: "components",
        stock: 13,
        image: "/img/monitorsamunggamer.jpg"
    },

    {
        id: "03",
        name: "Monitor Gamer ASUS TUF 27” VG27AQA1A VA WQHD 2K 170Hz 1ms FreeSync Premium",
        description: "",
        price: " 450.000",
        category: "components",
        stock: 16,
        image: "/img/monitorasus.jpg"
    },

    {
        id: "04",
        name: "Smart TV LG 43” Ultra HD 4K HDR 10 Pro AI ThinQ 43UR8750PSA",
        description: "",
        price: " 489.000",
        category: "televisors",
        stock: 3,
        image: "/img/televisorlg.jpg"
    },


    {
        id: "05",
        name: "Smart TV LG NanoCell 55” Ultra HD 4K AI ThinQ 55NANO80SQA",
        description: "",
        price: " 779.000",
        category: "televisors",
        stock: 2,
        image: "/img/samsunglg55ultra.jpg"
    },

    {
        id: "06",
        name: "Notebook Lenovo IdeaPad 1 15ALC7 FHD 15.6” Ryzen 5 5500U 8GB 256GB SSD NVMe W11 Blue",
        description: "",
        price: " 779.000",
        category: "notebooks",
        stock: 6,
        image: "/img/notebooklenovo.jpg"
    },


    {
        id: "07",
        name: "Notebook Noblex N14 14” FHD i3-1115G4 8GB 256GB SSD Win11",
        description: "",
        price: " 439.000",
        category: "notebooks",
        stock: 4,
        image: "/img/notebooknoblex.jpg"
    },


    {
        id: "08",
        name: "Notebook Gamer MSI Sword 16HX 16” 144Hz i7-14650HX RTX4060 16GB RAM 1TB SSD Win11",
        description: "",
        price: " 2.250.000",
        category: "notebooks",
        stock: 3,
        image: "/img/notebookmsi.jpg"
    }
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000);
    });
};

export default getProducts