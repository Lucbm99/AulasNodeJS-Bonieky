type Materials = {
    nome: string,
    preco: number
}

const dados: Materials[] = [
    {nome: 'Caneta', preco: 1},
    {nome: 'Apontador', preco: 2},
    {nome: 'Grampeador', preco: 31},
    {nome: 'Marca texto', preco: 5}
]

export const Materials = {
    getAllMaterials:(): Materials[] => {
        return dados;
    },
    getCheapMaterials:(preco: number): Materials[] => {
        return dados.filter(item => item.preco < preco);
    }
}