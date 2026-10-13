
export const getAlProdcuts = async () => {
    const res = await fetch("https://oline-shop-backend.onrender.com/api/products",{
        next:{revalidate:60}
    })

    return res.json()
}