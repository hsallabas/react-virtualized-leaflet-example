import React from 'react'
import NotificationIcon from '../../assets/images/notification_icon.svg';
import MailIcon from '../../assets/images/mail_icon.svg';

const PLACEHOLDER_IMAGE = 'https://www.placecage.com/300/206';

const Header = () => {
    return (
        <header className="b-header">
            <div className="b-header__search">
                search
            </div>
            <div className="b-header__user">
                <div className="b-header__user-notifications">
                    <div className="b-header__user-notifications-icon">
                        <img src={NotificationIcon} alt="icon" />
                    </div>
                    <div className="b-header__user-notifications-icon">
                        <img src={MailIcon} alt="icon" />
                    </div>
                </div>
                <div className="b-header__user-info">
                    <div className="b-header__user-name">
                        John Doe
                    </div>
                    <div className="b-header__user-avatar" style={{
                        backgroundImage: `url(${PLACEHOLDER_IMAGE})`,
                    }}>
                        
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;