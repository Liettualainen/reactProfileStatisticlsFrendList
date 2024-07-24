
export const App = () => {
const imageUrl =
  "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
const productPrice = 10.99;
const Name = "Tacos With Lime";

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    <div>
    <img src={imageUrl} alt="Tacos With Lime" width="640" />
    <h2>{Name}</h2>
    <p>Price: ${productPrice}</p>
    <button type="button" disabled=" ">Add to cart</button>
  </div>

    </div>
  )
};
