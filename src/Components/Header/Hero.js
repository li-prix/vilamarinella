const Hero = (props) => {
  return (
    <div className="w-full overflow-hidden">
      <img
        src={props.img}
        className="w-full h-dvh object-cover"
        alt={props.alt}
      />
    </div>
  );
};

export default Hero;
