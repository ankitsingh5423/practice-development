import Image from "./Image";

const Gallery = () => {
  const images = [
    "https://www.course-api.com/images/tours/tour-1.jpeg",
    "https://www.course-api.com/images/tours/tour-2.jpeg",
  ];
  return (
    <>
      <h1>Gallery</h1>
      {images.map((ele,index) => {
        return <Image src={ele} key={index} />;
      })}
    </>
  );
};
export default Gallery;
