import Image from "next/image";
import Link from "next/link";
import styles from "./participation.module.css";

export function RegistrationStrip() {
  return (
    <aside
      className={`${styles.registrationStrip} relative isolate grid grid-cols-[1fr_auto] items-center gap-x-5 gap-y-4 px-6 py-7 text-[#101010] min-[1100px]:flex min-[1100px]:flex-col min-[1100px]:items-stretch min-[1100px]:justify-between min-[1100px]:gap-6 min-[1100px]:px-5 min-[1100px]:py-10`}
      aria-label="Información de la campaña"
    >
      <div>
        <p className="font-display text-3xl leading-none">
          REGISTRO
        </p>
        <span
          className="mt-5 hidden border-t border-[#101010]/40 pt-4 font-display text-[clamp(5rem,9vw,8rem)] leading-none min-[1100px]:block"
          aria-hidden="true"
        >
          01
        </span>
        <Image
          className="mt-5 hidden h-12 w-full min-[1100px]:block"
          src="/images/contact/rock-barcode.svg"
          alt=""
          width={140}
          height={44}
          aria-hidden="true"
        />
      </div>

      <Link
        className="row-span-2 inline-flex flex-col items-center gap-1 text-center text-xs font-semibold leading-tight underline decoration-[#101010]/35 underline-offset-4 hover:decoration-[#101010] focus-visible:outline-2 focus-visible:outline-[#101010] focus-visible:outline-offset-4 min-[1100px]:row-span-1"
        href="/arquitectura"
      >
        <Image
          className="size-20 min-[1100px]:size-[104px]"
          src="/images/contact/architecture-qr.svg"
          alt=""
          width={164}
          height={164}
        />
        <span>Cómo funciona ↗</span>
      </Link>

      <div className="min-[1100px]:border-t min-[1100px]:border-[#101010]/40 min-[1100px]:pt-5">
        <p className="font-display text-lg leading-[1.05]">
          ROCK<br />EXPERIENCE
        </p>
        <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.08em]">
          Campaña ficticia
        </p>
      </div>
    </aside>
  );
}
