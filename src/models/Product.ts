type Product = {
    title: string,
    price: number
};


const data: Product[] = [
    {title: 'Arroz', price: 10},
    {title: 'Feijao', price: 25},
    {title: 'Manga', price: 50},
    {title: 'Sopa', price: 6},
];

export const Product = {
    getAllProducts: (): Product[] => {
        return data; 
    },
    getFromPriceAfter: (price: number): Product[] => {
        return data.filter(item => item.price >= price);
    }
};