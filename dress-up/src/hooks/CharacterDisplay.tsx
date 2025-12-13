interface Layer {
  src: string;
  alt: string;
  zIndex: number;
}

interface CharacterDisplayProps {
  layers: Layer[];
}

const CharacterDisplay = ({ layers }: CharacterDisplayProps) => {
  return (
    <div className="fixed w-[500px] h-[500px] top-[150px] sm:mr-[100px]   ">
      {layers.map((layer, index) => (
        <img
          key={index}
          src={layer.src}
          alt={layer.alt}
          className="absolute top-0 left-0 w-full h-full object-contain"
          style={{ zIndex: layer.zIndex }}
        />
      ))}
    </div>
  );
};

export default CharacterDisplay;
