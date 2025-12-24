import { motion } from "framer-motion";

interface ProfileCardProps {
  name: string;
  surname: string;
  imageSrc: string;
  height?: string;
  width?: string;
  borderRadius?: string;
}

const ProfileCard = ({
  name,
  surname,
  imageSrc,
  height = "400px",
  width = "250px",
  borderRadius = "2rem",
}: ProfileCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative overflow-hidden shadow-xl"
      style={{
        height,
        width,
        borderRadius,
        perspective: "1000px",
      }}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageSrc})`,
          borderRadius,
        }}
        whileHover={{ scale: 1.05 }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-[inherit]" />

      {/* Text overlay */}
      <div className="absolute bottom-6 left-6 text-white">
        <h3 className="text-2xl md:text-3xl font-bold">
          {name} <span className="block">{surname}</span>
        </h3>
      </div>

      {/* Optional hover effect */}
      <motion.div
        className="absolute inset-0 rounded-[inherit]"
        whileHover={{ rotateX: 3, rotateY: 3 }}
        style={{ pointerEvents: "none" }}
      />
    </motion.div>
  );
};

export default ProfileCard;
