<<<<<<< HEAD
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { GridScan } from './GridScan';

=======
import { motion } from "framer-motion";
>>>>>>> a740731f348fff2d9f0966e9fc3415f061ffe595

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
<<<<<<< HEAD
  const mouseX = useMotionValue(125);
  const mouseY = useMotionValue(200);

  const trailX = useSpring(mouseX, { stiffness: 90, damping: 20 });
  const trailY = useSpring(mouseY, { stiffness: 90, damping: 20 });

  const rotateX = useTransform(trailY, [-200, 200], [10, -10]);
  const rotateY = useTransform(trailX, [-200, 200], [-10, 10]);

  const posX = useTransform(trailX, [0, 250], ["0%", "100%"]);
  const posY = useTransform(trailY, [0, 400], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(125);
    mouseY.set(200);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative overflow-hidden shadow-2xl"
=======
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative overflow-hidden shadow-xl"
>>>>>>> a740731f348fff2d9f0966e9fc3415f061ffe595
      style={{
        height,
        width,
        borderRadius,
<<<<<<< HEAD
        perspective: "1400px",
      }}
    >
      {/* 🔲 GRIDSCAN BACKGROUND */}
      <div className="absolute inset-0 z-[0] pointer-events-none">
        <GridScan
          sensitivity={0.35}
          lineThickness={1}
          linesColor="#2a2338"
          gridScale={0.12}
          scanColor="#7c7cff"
          scanOpacity={0.35}
          enablePost
          bloomIntensity={0.45}
          chromaticAberration={0.0015}
          noiseIntensity={0.008}
        />
      </div>

      {/* 🔥 LASER CORE */}
      <motion.div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(
              120px circle at ${posX} ${posY},
              rgba(99,102,241,1),
              rgba(99,102,241,0.6),
              transparent 70%
            )
          `,
          mixBlendMode: "screen",
        }}
      />

      {/* ✨ LASER GLOW */}
      <motion.div
        className="absolute inset-[-25%] z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(
              300px circle at ${posX} ${posY},
              rgba(14,165,233,0.45),
              rgba(99,102,241,0.25),
              transparent 75%
            )
          `,
          filter: "blur(45px)",
          mixBlendMode: "lighten",
        }}
      />

      {/* 🖼 IMAGE */}
      <motion.div
        className="absolute inset-0 z-[2] bg-cover bg-center pointer-events-none"
=======
        perspective: "1000px",
      }}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
>>>>>>> a740731f348fff2d9f0966e9fc3415f061ffe595
        style={{
          backgroundImage: `url(${imageSrc})`,
          borderRadius,
        }}
<<<<<<< HEAD
        whileHover={{ scale: 1.18 }}
        transition={{ duration: 0.5 }}
      />

      {/* 🌑 CONTRAST OVERLAY */}
      <div className="absolute inset-0 z-[3] bg-gradient-to-t from-black/85 via-black/40 to-transparent rounded-[inherit] pointer-events-none" />

      {/* 📝 TEXT */}
      <div className="absolute bottom-6 left-6 z-[4] text-white pointer-events-none">
        <h3 className="text-2xl md:text-3xl font-bold leading-tight">
          {name}
          <span className="block text-indigo-400">{surname}</span>
        </h3>
      </div>

      {/* 🌀 PARALLAX TILT */}
      <motion.div
        className="absolute inset-0 z-[5] rounded-[inherit] pointer-events-none"
        style={{ rotateX, rotateY }}
      />

      {/* 🎯 MOUSE HITBOX */}
      <div
        className="absolute inset-0 z-[10]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
=======
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
>>>>>>> a740731f348fff2d9f0966e9fc3415f061ffe595
      />
    </motion.div>
  );
};

export default ProfileCard;
