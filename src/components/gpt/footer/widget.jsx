import Link from 'next/link';
import Image from 'next/image';

const headingClass =
  'font-dmSans text-[18px] font-medium leading-[1.68] tracking-[-0.5px] text-[#0F2137]';
const listClass = 'mt-[28px] list-none p-0';
const itemClass = 'flex items-center [&_img]:mr-[15px]';
const linkClass = 'text-[#02073E] no-underline';

export const WidgetAbout = ({ title, items }) => {
  return (
    <div>
      <h4 className={headingClass}>{title}</h4>
      <ul className={listClass}>
        {items.map(({ url, label, icon }, i) => (
          <li className={itemClass} key={i}>
            {icon && (
              <Image src={icon} alt={label} width={24} height={24} quality={85} loading='lazy' />
            )}
            <a href={url} className={linkClass}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const WidgetInfo = ({ title, items }) => {
  return (
    <div>
      <h4 className={headingClass}>{title}</h4>
      <ul className={listClass}>
        {items.map(({ to, label, icon }, i) => (
          <li className={itemClass} key={i}>
            {icon && (
              <Image src={icon} alt={label} width={24} height={24} quality={85} loading='lazy' />
            )}
            <Link href={to} className={linkClass}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const WidgetPages = ({ title, items }) => {
  return (
    <div>
      <h4 className={headingClass}>{title}</h4>
      <ul className={listClass}>
        {items.map(({ to, label, icon }, i) => (
          <li className={itemClass} key={i}>
            {icon && (
              <Image src={icon} alt={label} width={24} height={24} quality={85} loading='lazy' />
            )}
            <Link href={to} className={linkClass}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
