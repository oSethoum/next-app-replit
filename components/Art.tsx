import Image from "next/image"

import Imagenes0011 from "@/assets/images/IMG_0011.jpg"
import Imagenes2073 from "@/assets/images/IMG_2073.png"
import Imagenes2347 from "@/assets/images/IMG_2347.jpg"
import Imagenes2348 from "@/assets/images/IMG_2348.jpg"
import Imagenes2349 from "@/assets/images/IMG_2349.jpg"
import Imagenes2805 from "@/assets/images/IMG_2805.jpg"
import Imagenes2803 from "@/assets/images/IMG_2803.jpg"
import ImagenesH from "@/assets/images/DarcFoxHunter.png"

import ImagenesHs from "@assets/images/DarcFoxHunterShiny.png"
import styles from '@/styles/page.module.css'



//jokes

import Imagenes202 from "@assets/images/IMG_202.jpg"
import Imagenescursed from "@assets/images/icurseu.jpg"


export function ImagenesArt() {
    return (
        <>
            <table>
                <tr className={styles.grid}>
                    <td >

                        <Image src={Imagenes0011} height={200} width={200} alt="Refsheet" className={styles.Image} />
                    </td>

                    <td>

                        <Image src={Imagenes2073} height={200} width={200} alt="Refsheet" />
                    </td>

                    <td>

                        <Image src={Imagenes2347} height={200} width={200} alt="Refsheet" />
                    </td>
                    <td>
                        <Image src={Imagenes2348} height={200} width={200} alt="Refsheet" />
                    </td>
                    <td>
                        <Image src={Imagenes2349} height={200} width={200} alt="Refsheet" />
                    </td>
                    <td>
                        <Image src={Imagenes2805} height={200} width={200} alt="Refsheet" />
                    </td>
                    <td>
                        <Image src={Imagenes2803} height={200} width={200} alt="Refsheet" />
                    </td>

                    <td>

                        <Image src={ImagenesH} height={200} width={200} alt="Refsheet" />
                    </td>
                    <td>
                        <Image src={ImagenesHs} height={200} width={200} alt="Refsheet" />
                    </td>
                </tr>
            </table>

        </>
    )
}