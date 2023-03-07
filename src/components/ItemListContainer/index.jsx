import Card from "../Card";

const ItemListContainer = ({ productos }) => {
    return (
        <>
            {productos.map((producto) => (
                <Card key={producto.id} producto={producto} />
            ))}
        </>
    );
};

export default ItemListContainer;