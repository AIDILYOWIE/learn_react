import { useEffect, useRef } from "react";
import "../css/product.css";

export const LensLogic = ({ src, width, height, zoom = 2 }) => {
  const imgRef = useRef(null);
  const lensRef = useRef(null);

  
  useEffect(() => {
    const img = imgRef.current;
    const lens = lensRef.current;
    const cx = zoom, cy = zoom;

    // Atur background lens sekali di mount
    lens.style.backgroundImage = `url(${src})`;
    lens.style.backgroundSize  = `${width * cx}px ${height * cy}px`;

    function moveLens(e) {
    
      const rect = img.getBoundingClientRect();
      let x = e.clientX - rect.left - lens.offsetWidth  / 2;
      let y = e.clientY - rect.top  - lens.offsetHeight / 2;

      x = Math.max(0, Math.min(x, width  - lens.offsetWidth));
      y = Math.max(0, Math.min(y, height - lens.offsetHeight));

      lens.style.left =  `${x}px`;
      lens.style.top  =  `${y}px`;
      lens.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
    }

    img.addEventListener("mousemove", moveLens);
    img.addEventListener("mouseleave", () => lens.style.display = "none");
    img.addEventListener("mouseenter", () => lens.style.display = "block");

    return () => {
      img.removeEventListener("mousemove", moveLens);
      img.removeEventListener("mouseleave", () => lens.style.display = "none");
      img.removeEventListener("mouseenter", () => lens.style.display = "block");
    };
  }, [src, width, height, zoom]);
};

