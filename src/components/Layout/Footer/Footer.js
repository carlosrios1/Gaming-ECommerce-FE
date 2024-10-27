import Link from "next/link";
import styles from "./Footer.module.scss";
import { Container, Image, Button } from "semantic-ui-react";

export function Footer() {
    return (
        <div className={styles.footer}>
            <Container>
                <div className={styles.columns}>
                    <div>
                        <Link href="/">
                            <Image src='/images/logo.png' alt="Gaming" />
                        </Link>
                    </div>

                    <div>
                        <ul>
                            <Link href="#">
                                Términos y Condiciones
                            </Link>
                            <Link href="#">
                                Política de privacidad
                            </Link>
                            <Link href="#">
                                Contacto
                            </Link>
                            <Link href="#">
                                FaQs
                            </Link>
                        </ul>
                    </div>

                    <div className={styles.social}>
                        <Button as="a" href="#" circular color="facebook" icon="facebook" /> 
                        <Button as="a" href="#" circular color="twitter" icon="twitter" /> 
                        <Button as="a" href="#" circular color="instagram" icon="instagram" /> 
                        <Button as="a" href="#" circular color="linkedin" icon="linkedin" /> 
                        <Button as="a" href="#" circular color="whatsapp" icon="whatsapp" /> 
                    </div>
                </div>

                <div className={styles.copyright}>
                    <span>Copyright © 2024 Gaming - Todos los derechos reservados.</span>
                </div>
            </Container>
        </div>
    )
}
