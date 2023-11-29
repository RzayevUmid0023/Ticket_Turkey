import React from 'react'
import styles from './Footer.module.css'
import Logo from '../../../photo/Logo/Logo_footer.png'
import Visa from '../../../photo/Logo/Visa.svg'
import Mastercard from '../../../photo/Logo/Mastercard.png'
import { GiRotaryPhone } from 'react-icons/gi';
import { FiInstagram, FiFacebook, FiYoutube, FiTwitter } from 'react-icons/fi';

function Footer() {
  return (
    <>
      {/* Footer için ana container */}
      <div className={styles.main}>
    
        {/* Footer'ın sol tarafı */}
        <div className={styles.mainLeft}>
            {/* Sol taraftaki ilk sütun */}
            <div className={styles.mainLeft_first}>
                {/* İlk sütunun üst kısmı */}
                <div className={styles.mainLeft_first_top}>
                    <h2>Kurumsal</h2>
                    <p>Kişisel Verilerin Korunması</p>
                    <p>Sözleşme ve Politikalar</p>
                    <p>Entegre Yönetim Sistemi Politikası</p>
                    <p>Hakkımızda</p>
                    <p>Müşteri Hizmetleri</p>
                    <p>Çerez Aydınlatma Metni</p>
                    <p>Online Ödeme Koşulları</p>
                    <p>İletişim</p>
                </div>
                {/* İlk sütunun alt kısmı */}
                <div className={styles.mainLeft_first_bottom}>
                    <img src={Logo} alt="Footer Logosu"/>
                    <p className={styles.mainLeft_first_bottom_p}>Telif Hakkı © 2023 www.biletinial.com</p>
                </div>
            </div>

            {/* Sol taraftaki ikinci sütun */}
            <div className={styles.mainLeft_second}>
                <h2>Yardım</h2>
                <p>SSS</p>
                <p>İptal, İade ve Değişim</p>
                <p>Nasıl Bilet Alınır</p>
                <p>Biletinizi Mi Kaybettiniz?</p>
            </div> 
        </div>

        {/* Footer'ın sağ tarafı */}
        <div className={styles.mainRight}>
            {/* Sağ tarafın üst kısmı */}
            <div className={styles.mainRight_top}>
                {/* Üst kısmın ilk çocuğu */}
                <div className={styles.mainRight_top_child}>
                    <GiRotaryPhone className={styles.callIcon}/>
                    <div className={styles.mainRight_top_child_text}>
                        <h4>0850 333 99 11</h4>
                        <p>Müşteri Hizmetleri</p>
                    </div>
                </div>
                {/* Üst kısmın ikinci çocuğu */}
                <div className={styles.mainRight_top_child}>
                    <img src={Visa} alt="Visa Logosu"/>
                    <img src={Mastercard} alt="Mastercard Logosu"/>
                </div>
            </div>

            {/* Sağ tarafın alt kısmı */}
            <div className={styles.mainRight_bottom}>
                <FiInstagram className={styles.Icon}/>
                <FiFacebook className={styles.Icon}/>
                <FiYoutube className={styles.Icon}/>
                <FiTwitter className={styles.Icon}/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
