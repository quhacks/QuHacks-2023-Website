import styles from './component.module.css';
import TeamCard from './teamcard/teamcard'
import Link from 'next/link';

export default function TeamSection() {
    let teamCards = [
        ["Aryan Sharma", "Director", "/headshots/2025aryan_headshot.jpg"],
        ["Victor Liu", "Director", "/headshots/2025victor_headshot.jpg"],
        
        ["Joshua Oh", "Graphic Design Lead", "/headshots/2025joshua_headshot.jpeg"],
        ["Aditri Maiti", "Graphic Design", "/headshots/2025aditri_headshot.jpg"],
        ["Anjali Vallabhaneni", "Graphic Design", "/headshots/2025anjali_headshot.jpg"],
        ["Jiwon Kim", "Graphic Design", "/headshots/2025jiwon_headshot.png"],
        
        ["Kevin Yue", "Sponsor", "/headshots/2025kevin_headshot.png"],
        ["Rana Cherukuri", "Sponsor", "/headshots/2025rana_headshot.png"],
        ["Vinay Vimalkumar", "Sponsor", "/headshots/2025vinay_headshot.png"],

        ["Sai Chandra", "Website Lead", "/headshots/2025sai_headshot.jpg"],
        ["Mark Shi", "Website", "/headshots/2025mark_headshot.jpg"],

        ["Jaden Li", "Workshop Lead", "/headshots/2025jaden_headshot.jpg"],
        ["Suhas Anumolu", "Workshop", "/headshots/2025suhas_headshot.jpg"],
        ["Zak Mazerski", "Workshop", "/headshots/2025zak_headshot.jpg"],
    ]

    teamCards = teamCards.map((card) => {
        return (
            <TeamCard name={card[0]} position={card[1]} image={card[2]} key={card[0]} />
        )
    });

    return (
        <div className={styles.sectionContainer}>
            <h1 className={styles.title}>Meet the Team</h1>
            <div className={styles.cards}>
                {teamCards}
            </div>
        </div>
    )
};