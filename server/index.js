const faces = require('cool-ascii-faces').faces;
const faker = require('faker');

function getRandomString () {
    return (Math.random()).toString(36).substr(2);
}

function getRandomInRange (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const productImages = [
    'http://40.115.152.122/api/products/image/ec4be315afd1059942c39233215cc6a1e.png',
    'http://40.115.152.122/api/products/image/5c4ef452839c14386210a6600518a81bb.png',
    'http://40.115.152.122/api/products/image/173c1fc7fc8272a96147fa410cd84b6b9.jpeg',
    'http://40.115.152.122/api/products/image/b8b6104a09347bbd1224367b2fa910cc4d.jpg',
    'http://40.115.152.122/api/products/image/9b1ef629d10789ee7106b67de5b0f4704d.jpg',
    'http://40.115.152.122/api/products/image/f88cbcb7cd101fc0317ec835bfd4adc62.jpg',
    'http://40.115.152.122/api/products/image/0f3264a1016e6a0bc6b2db92ee51e7c55.jpg'
]


module.exports = () => {
    const data = { products: [] },
        facesLen = faces.length;

    // Create 500 products
    for (let i = 0; i < productImages.length; i++) {
        data.products.push({
            id: getRandomInRange(0, 100000) + '-' + getRandomString(),
            size: getRandomInRange(12, 40),
            price: getRandomInRange(1, 1000),
            face: faces[i % facesLen],
            date: new Date(Date.now() - getRandomInRange(1, 1000 * 3600 * 24 * 15)).toString(),
            image: productImages[i],
            productName: faker.commerce.productName()
        });
    }

    return data;
}
