import Image from "next/image";
import styles from "./participation.module.css";

export function CredentialLanyard() {
  return (
    <div
      className="pointer-events-none absolute -top-36 left-1/2 z-10 h-56 w-36 -translate-x-1/2 forced-colors:hidden"
      aria-hidden="true"
    >
      <span className={styles.lanyardEyelet} />
      <Image
        className={`${styles.lanyardImage} h-full w-full object-contain`}
        src="/images/textures/participation-lanyard-b46e84d4.webp"
        alt=""
        width={240}
        height={360}
      />
    </div>
  );
}
