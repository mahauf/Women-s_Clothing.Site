var express = require('express')
var cors = require('cors')
var app = express()
const obj =[
    {	
        id :	1,
        title :	"AVAASA",
        price :	109,
        description	: "Women Silk Blue Golden Saree",
        category :	"saree",
        image :	"https://m.media-amazon.com/images/I/91Esh8L3H8L._SL1500_.jpg"
    },
    {
        id :	2,
        title :	"HM",
        price :	109.95,
        description	: "Women cotten Anarkali Kurta",
        category :	"kurta",
        image :	"https://m.media-amazon.com/images/I/71AEZtDM7IL._SL1440_.jpg"
    },
    {
        id :	3,
        title :	"Indo Era",
        price :	109.95,
        description	: "Women A-line Grape wine Dress",
        category :	"western",
        image :	"https://m.media-amazon.com/images/I/71Hf9fAHcYL._SL1500_.jpg"
    },
    {
        id :	4,
        title :	"LIBAS",
        price :	109.95,
        description	: "Women Ethnic Red Dress",
        category :	"ethnic",
        image :	"https://m.media-amazon.com/images/I/7132GDg8UAL._SL1500_.jpg"
    },
    {
        id :	5,
        title :	"Janasya",
        price :	109.95,
        description	: "Women Fit and Flare Dress",
        category :	"western",
        image :	"https://m.media-amazon.com/images/I/81mFBU3PjCS._SL1500_.jpg"
    },
    {
        id :	6,
        title :	"Cosmo",
        price :	109,
        description	: "Women's Western Organza Dress",
        category :	"western",
        image :	"https://m.media-amazon.com/images/I/41tED1pJY4L.jpg"
    },
    {
        id :	7,
        title :	"Slate",
        price :	109,
        description	: "Rayon Blend Printed Straight Kurta",
        category :	"kurta",
        image :	"https://m.media-amazon.com/images/I/61kIVnGChCL._SL1440_.jpg"
    },
    {
        id :	8,
        title :	"Zinnia",
        price :	109,
        description	: "Georgette Embroidered Suit",
        category :	"ethnic",
        image :	"https://m.media-amazon.com/images/I/61un2zcp2kL._SL1440_.jpg"
    },
    {
        id :	9,
        title :	"Loura",
        price :	109,
        description	: "Cotton Linen Saree with Blouse",
        category :	"saree",
        image :	"https://m.media-amazon.com/images/I/81udgF3vFSL._SL1500_.jpg"
    },
    {
        id :	10,
        title :	"Firebrick",
        price :	109,
        description	: "Cotton Blend Printed Straight Kurta",
        category :	"kurta",
        image :	"https://m.media-amazon.com/images/I/71lkKHXJyOL._SL1500_.jpg"
    },
    {
        id :	11,
        title :	"Cosmo",
        price :	109,
        description	: "Maxi Printed Argon Dress",
        category :	"western",
        image :	"https://m.media-amazon.com/images/I/614blE+djTL._SL1306_.jpg"
    },
    {
        id :	12,
        title :	"Evita",
        price :	109,
        description	: "Crush Georgette Aline kurta",
        category :	"kurta",
        image :	"https://m.media-amazon.com/images/I/71ZjUhcbLzL._SL1500_.jpg"
    },
    {
        id :	13,
        title :	"TOR",
        price :	109,
        description	: "Santoon suits for women",
        category :	"ethnic",
        image :	"https://m.media-amazon.com/images/I/51Q7vem3cBL._SL1280_.jpg"
    },
    {
        id :	14,
        title :	"Blaze",
        price :	109,
        description	: "Floral Organza Pink Saree",
        category :	"saree",
        image :	"https://m.media-amazon.com/images/I/614mKZvL8BL._SL1440_.jpg"
    },
    {
        id :	15,
        title :	"Ivy",
        price :	109,
        description	: "Spring Sorbet Plazzo Kurthi",
        category :	"kurta",
        image :	"https://m.media-amazon.com/images/I/71I5P7uGiIL._SL1500_.jpg"
    },
    {
        id :	16,
        title :	"Cosmo",
        price :	109,
        description	: "Polycotton Western Top",
        category :	"western",
        image :	"https://m.media-amazon.com/images/I/61VEX8SzphL._SL1440_.jpg"
    },
    {
        id :	17,
        title :	"Slate",
        price :	109,
        description	: "Kanchi silk seer line Kurthi",
        category :	"kurta",
        image :	"https://m.media-amazon.com/images/I/61g2lA0fG7L._SL1440_.jpg"
    },
    {
        id :	18,
        title :	"Zinnia",
        price :	109,
        description	: "RATAN Rayon Printed Anarkali",
        category :	"ethnic",
        image :	"https://m.media-amazon.com/images/I/71kr0fJbL-L._SL1500_.jpg"
    },
    {
        id :	19,
        title :	"Loura",
        price :	109,
        description	: "Pastel Green Kota Silk Saree",
        category :	"saree",
        image :	"https://m.media-amazon.com/images/I/61w3V4kiDHL._SL1440_.jpg"
    },
    {
        id :	20,
        title :	"Firebrick",
        price :	109,
        description	: "Dupion & floral designer kurti",
        category :	"kurta",
        image :	"https://m.media-amazon.com/images/I/61xNH3CHawL._SL1500_.jpg"
    },
    {
        id :	21,
        title :	"Cosmo",
        price :	109,
        description	: "Women Mario Rib Crop Top",
        category :	"western",
        image :	"https://m.media-amazon.com/images/I/51ClCRzb5kL._SL1440_.jpg"
    },
    {
        id :	22,
        title :	"Evita",
        price :	109,
        description	: "Jute Soft Cotton kurta set",
        category :	"kurta",
        image :	"https://m.media-amazon.com/images/I/81sfqaF0x7L._SL1500_.jpg"
    },
    {
        id :	23,
        title :	"TOR",
        price :	109,
        description	: "Lucknowi Chikankari Ethnic Wear",
        category :	"ethnic",
        image :	"https://m.media-amazon.com/images/I/61qcRCtDnnL._SL1280_.jpg"
    },
    {
        id :	24,
        title :	"Blaze",
        price :	109,
        description	: "Tussar Silk Bright Sun Saree",
        category :	"saree",
        image :	"https://m.media-amazon.com/images/I/71wtMhZZ6qL._SL1500_.jpg"
    },
    {
        id :	25,
        title :	"Livia",
        price :	109,
        description	: "Soft Silk-Cotton Puffed Kurta ",
        category :	"kurta",
        image :	"https://m.media-amazon.com/images/I/81EStH+8PAL._SL1500_.jpg"
    },
    {
        id :	26,
        title :	"Tart",
        price :	109,
        description	: "Handloom Cotton Crop Shirt",
        category :	"western",
        image :	"https://m.media-amazon.com/images/I/71hdgTN-+dL._SL1500_.jpg"
    },
    {
        id :	27,
        title :	"Gul",
        price :	109,
        description	: "Cotton with Ajrakh Kurti",
        category :	"kurta",
        image :	"https://m.media-amazon.com/images/I/81QKUV4VviL._SL1500_.jpg"
    },
    {
        id :	28,
        title :	"Zinnia",
        price :	109,
        description	: "Rudraprayag Women Maxi Gown",
        category :	"ethnic",
        image :	"https://m.media-amazon.com/images/I/61NHebKZa0L._SL1280_.jpg"
    },
    {
        id :	29,
        title :	"Loura",
        price :	109,
        description	: "Kanchipuram Pure Silk Saree",
        category :	"saree",
        image :	"https://m.media-amazon.com/images/I/61aQi5w2v6L._SL1500_.jpg"
    },
    {
        id :	30,
        title :	"Firebrick",
        price :	109,
        description	: "Linen Cotton Navy-Blue Kurti",
        category :	"kurta",
        image :	"https://m.media-amazon.com/images/I/71IxguwPEfL._SL1500_.jpg"
    }
]

    app.use(cors())
    app.get('/product', (req,res)=>{
        res.json(obj)
    }).listen(4000, () => console.log('listeing on port 4000'))