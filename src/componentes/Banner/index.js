import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/EU.jpg'

export default function Banner() { 
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>lorem</h1> 
                <p>lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem consequuntur corporis delectus doloribus eos expedita facere fugit harum impedit ipsam itaque libero, magni maxime minima nobis nihil numquam optio pariatur quasi quidem quo quos quisquam quos repellendus repudiandae, rerum saepe sequi sint soluta sunt tempora tenetur tempore tenetur unde ut voluptates voluptatum.
                </p>
            </div>
            <div className={styles.imagens}>
                <img src={circuloColorido} alt='' className={styles.circuloColorido} aria-hidden={true}></img>
                <img src={minhaFoto} className={styles.minhaFoto} alt='Foto sorrindo'></img>
            </div>
        </div>
    )
}