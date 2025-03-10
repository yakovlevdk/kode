import React, { useEffect } from 'react';
import styles from '../main.module.css'

interface TabProps {
    label: string;
    active: boolean;
    onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, active, onClick }) => {
    return (
        <div className={`${styles.tab} ${active ? styles.active : ''}`} onClick={onClick}>
            {label}
        </div>
    );
};

const TabNavigation = ({ setCurrentDepartment } : {setCurrentDepartment : (department: string) => void} ) => {
    const [activeTab, setActiveTab] = React.useState('all');

useEffect(() => { 
 setCurrentDepartment(activeTab)
}, [activeTab])


    const tabs = [
        { label: 'Все', value: 'all' },
        { label: 'Designers', value: 'design' },
        { label: 'Analysts', value: "analytics" },
        { label: 'Managers', value: "management" },
        { label: 'iOS', value: 'ios' },
        { label: 'Android', value: 'android' },
    ];

    return (
        <div className={styles.nav}>
            {tabs.map(tab => (
                <Tab
                    key={tab.value}
                    label={tab.label}
                    active={activeTab === tab.value}
                    onClick={() => setActiveTab(tab.value)}
                />
            ))}
            <div className={styles.underline} />
        </div>
    );
};

export default TabNavigation;
