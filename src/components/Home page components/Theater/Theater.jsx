import React from 'react'
import styles from './Theater.module.css'
import '../../../App.css'
import Data from './TheaterData.json'



function Theater() {
  return (
    <>

    <div className={styles.container}>
        <div className={styles.container_main}>
            <div className={styles.top}>
                <h1>Tiatro Gösterileri</h1>
            </div>


            <div className={styles.bottom}>
                <div className={styles.container_main_left + " " + styles.container_main_child }>
                    <div className={styles.container_main_left_box}>
                        <div className={styles.big_box + " " + styles.box}>
                            <img src={Data[0].image}/>
                            <span></span>
                            <div className={styles.box_text}>
                                <h3>{Data[0].artist}</h3>
                                <p>{Data[0].location}</p>
                            </div>

                            <div className={styles.big_box_date}>
                                <h6>{Data[0].date.day}</h6>
                                <p>{Data[0].date.month}</p>
                                <p>{Data[0].date.year}</p>
                            </div>
                            
                             
                            
                            
                        </div>
                    </div>
                </div>

                <div className={styles.container_main_right + " " + styles.container_main_child }>
                    <div className={styles.container_main_right_box }>
                        <div className={styles.container_main_right_box_child1 }>
                            <div className={styles.small_box_1 + " " + styles.box + " " + styles.small_box }>
                            <img src={Data[1].image}/>

                            <span></span>
                            <div className={styles.box_text}>
                                <h3>{Data[1].artist}</h3>
                                <p>{Data[1].location}</p>
                            </div>

                            <div className={styles.small_box_date}>
                            <h6>{Data[1].date.day}</h6>
                                <p>{Data[1].date.month}</p>
                                <p>{Data[1].date.year}</p>
                            </div>
                           


                            </div>
                            <div className={styles.small_box_2 + " " + styles.box + " " + styles.small_box }>
                            <img src={Data[2].image}/>

                            <span></span>
                            <div className={styles.box_text}>
                                <h3>{Data[2].artist}</h3>
                                <p>{Data[2].location}</p>
                            </div>
                            <div className={styles.small_box_date}>
                            <h6>{Data[2].date.day}</h6>
                                <p>{Data[2].date.month}</p>
                                <p>{Data[2].date.year}</p>
                            </div>

                            </div>
                        </div>
                        <div className={styles.container_main_right_box_child2 }>
                            <div className={styles.small_box_3 + " " + styles.box + " " + styles.small_box }>
                            <img src={Data[3].image}/>

                            <span></span>
                            <div className={styles.box_text}>
                                <h3>{Data[3].artist}</h3>
                                <p>{Data[3].location}</p>
                            </div>
                            <div className={styles.small_box_date}>
                            <h6>{Data[3].date.day}</h6>
                                <p>{Data[3].date.month}</p>
                                <p>{Data[3].date.year}</p>
                            </div>
                                
                            </div>
                            <div className={styles.small_box_4 + " " + styles.box + " " + styles.small_box }>
                            <img src={Data[4].image}/>

                            <span></span>
                            <div className={styles.box_text}>
                                <h3>{Data[4].artist}</h3>
                                <p>{Data[4].location}</p>
                            </div>
                            <div className={styles.small_box_date}>
                            <h6>{Data[4].date.day}</h6>
                                <p>{Data[4].date.month}</p>
                                <p>{Data[4].date.year}</p>
                            </div>

                            </div>
                        </div>
                        
                    

                    </div>

                </div>
            </div>
            

        </div>
        
    </div>



    </>
  )
}

export default Theater;
 