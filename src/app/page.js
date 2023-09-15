import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import AboutSection from './components/about/about';
import ScheduleSection from './components/schedule/schedule';
import TeamSection from './components/team/team';
import Faq from './components/faq/faq';
import Sponsors from './components/sponsors/sponsors';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.announcementBanner}>
        <p>📢  Want to help make QuHacks possible? Donate <a href="https://hcb.hackclub.com/donations/start/quhacks" rel="noreferrer noopener" target="_blank">HERE</a>!</p>
      </div>
      <div className={styles.homecontainer}>
          <Image src="/logo.png" width={100} height={100} sizes='(max-width: 750px) 15rem, 20rem' className={styles.logo} />
          <div>
            <span className={styles.title}>QuHacks 2024</span>
            <p>December 9th, 2023</p>
            <div className={styles.btngroup}>
              <button className='btn-primary' disabled={true}>Register!</button>
              <button className='btn-secondary' disabled={true}>Submit Your Project!</button>
            </div>
          </div>
      </div>
      <div className={styles.content} id="about">
        <AboutSection></AboutSection>
      </div>
      <div className={styles.content} id="schedule">
        <ScheduleSection></ScheduleSection>
      </div>
      <div className={styles.content} id="faq">
        <Faq></Faq>
      </div>
      <div className={styles.content} id="sponsors">
        <Sponsors></Sponsors>
      </div>
      <div className={styles.content} id="team">
        <TeamSection></TeamSection>
      </div>
    </main>
  )
}
