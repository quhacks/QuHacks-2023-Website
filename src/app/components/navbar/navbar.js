"use client"; // next js kinda weird need to add this.
import { useState } from 'react';
import styles from './component.module.css'
import Link from 'next/link';

export default function NavBar() {
  let [mobLinksShown, setMobLinksShown] = useState(false)

  function toggleLinks() {
    setMobLinksShown(!mobLinksShown);
  }

  function hideLinks() {
    setMobLinksShown(false)
  }

  function dateStr() {
    return new Date().toUTCString();
  }
  
  function scrollIntoViewWithOffset(selector, offset) {
    window.scrollTo({
      behavior: 'smooth',
      top:
        document.querySelector(selector).getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        offset,
    })
  }

  function moblink(target) {
    scrollIntoViewWithOffset(target, 50);
    hideLinks();
  }
  

  return (
    <main>
    <nav className={styles.navbar}>
      <Link href='/' className={styles.name}><span>$</span>QuHacks 2024<span className={styles.cursor}>█</span></Link>

      <button className={styles.moreBtn} onClick={toggleLinks}>[+]</button>
      <span className={`link ${styles.navlink}`} onClick={() => scrollIntoViewWithOffset("#about",100)}>About</span>
      <span className={`link ${styles.navlink}`} onClick={() => scrollIntoViewWithOffset("#schedule",100)}>Schedule</span>
      <span className={`link ${styles.navlink}`} onClick={() => scrollIntoViewWithOffset("#faq",100)}>FAQ</span>
      <span className={`link ${styles.navlink}`} onClick={() => scrollIntoViewWithOffset("#team",100)}>Team</span>
      <Link className={`link ${styles.navlink}`} rel="noreferrer noopener" target='_blank' href="https://discord.gg/H2EteNDhEP">Discord</Link>
    </nav>
    {mobLinksShown ? 
    <div className={styles.mobileLinks}>
      <span className={styles.cmd}>Login {dateStr()}</span>
      <span className={`${styles.cmd} ${styles.typing}`}><span>$</span> ls ~/QuHacks</span>
      <div className={styles.cmdout}>
        <div className={styles.linkrow}><span className={`link ${styles.mobnavlink}`} onClick={() => moblink("#about")}>./about</span><div className={styles.spacer}></div><span className={styles.size}>{Math.round(Math.random()*100)} KB</span></div>
        <div className={styles.linkrow}><span className={`link ${styles.mobnavlink}`} onClick={() => moblink("#schedule")}>./schedule</span><div className={styles.spacer}></div><span className={styles.size}>{Math.round(Math.random()*100)} KB</span></div>
        <div className={styles.linkrow}><span className={`link ${styles.mobnavlink}`} onClick={() => moblink("#faq")}>./faq</span><div className={styles.spacer}></div><span className={styles.size}>{Math.round(Math.random()*100)} KB</span></div>
        <div className={styles.linkrow}><span className={`link ${styles.mobnavlink}`} onClick={() => moblink("#team")}>./team</span><div className={styles.spacer}></div><span className={styles.size}>{Math.round(Math.random()*100)} KB</span></div>
        <div className={styles.linkrow}><Link className={`${styles.mobnavlink}`} href="/timeline" onClick={hideLinks}>./timeline</Link><div className={styles.spacer}></div><span className={styles.size}>{Math.round(Math.random()*100)} KB</span></div>
        <div className={styles.linkrow}><Link className={`${styles.mobnavlink}`} rel="noreferrer noopener" target='_blank' href="https://discord.gg/H2EteNDhEP" onClick={hideLinks}>./discord</Link><div className={styles.spacer} onClick={hideLinks}></div><span className={styles.size}>{Math.round(Math.random()*100)} KB</span></div>
      </div>
    </div>
    : ""}
    </main>
  )
}
