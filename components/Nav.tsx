import { motion, useCycle } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }: { toggle: () => void }) => (
  <button
    onClick={toggle}
    className="sm:hidden z-10 absolute top-9 stroke-current"
    style={{ left: '33px' }}
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: 'M 2 2 L 20 2' },
          open: { d: 'M 3 16 L 17 2' },
        }}
      />
      <Path
        d="M 2 9 L 20 9"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16 L 20 16' },
          open: { d: 'M 3 2 L 17 16' },
        }}
      />
    </svg>
  </button>
);

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 45px 45px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 45px 45px)',
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const NavItem = ({ href, name }: { href: string; name: string }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  const listVar = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  return (
    <motion.div
      variants={listVar}
      whileTap={{ scale: 0.98 }}
      whileHover={isActive ? {} : { scale: 1.02 }}
    >
      <Link href={href}>
        <a
          className={`${
            isActive
              ? 'text-primary-500 dark:text-primary-400'
              : 'text-gray-900 dark:text-white'
          } pr-3 py-4 font-pixel-lg font-bold`}
        >
          {name}
        </a>
      </Link>
    </motion.div>
  );
};

const Nav = (): JSX.Element => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const toggle = (): void => {
    toggleOpen();
  };
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  return (
    <>
      <motion.div
        className="sm:hidden left-0 flex flex-col h-full z-20"
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom="100%"
      >
        <MenuToggle toggle={toggle}></MenuToggle>
        <motion.div
          className="absolute top-0 left-0 bottom-0 w-full bg-gray-200 bg-opacity-90 dark:bg-gray-600 dark:bg-opacity-80 overflow-hidden pt-20 pl-10"
          variants={sidebar}
        >
          <motion.div variants={variants} className="space-y-4">
            <NavItem href="/" name="Home" />
            <NavItem href="/about" name="About" />
            <NavItem href="/blogs" name="Blog" />
            <NavItem href="/projects" name="Projects" />
            <NavItem href="/snippets" name="Snippets" />
          </motion.div>
        </motion.div>
      </motion.div>
      <nav className="hidden sm:block font-pixel-lg font-semibold ">
        <Link href="/">
          <a className="text-gray-900 dark:text-white pr-3 py-4">Home</a>
        </Link>
        <Link href="/about">
          <a className="text-gray-900 dark:text-white pr-3 py-4">About</a>
        </Link>
        <Link href="/blogs">
          <a className="text-gray-900 dark:text-white pr-3 py-4">Blogs</a>
        </Link>
        <Link href="/projects">
          <a className="text-gray-900 dark:text-white pr-3 py-4">Projects</a>
        </Link>
        <Link href="/snippets">
          <a className="text-gray-900 dark:text-white pr-3 py-4">Snippets</a>
        </Link>
      </nav>
    </>
  );
};

export default Nav;
