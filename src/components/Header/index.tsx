import { SignInButton } from '../SignInButton';
import Image from 'next/image';
import { ActiveLink } from '../ActiveLink';

import styles from './styles.module.scss';

import Logo from '../../../public/images/logo.svg';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={Logo} alt="Ignews"/>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a className={styles.active}>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}