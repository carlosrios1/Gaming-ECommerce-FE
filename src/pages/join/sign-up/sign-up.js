import Link from "next/link";
import { JoinLayout } from "@/layouts";
// import { RegisterForm } from "@/components/Auth";
import styles from "./sign-up.module.scss";
import RegisterForm from "@/components/Auth/RegisterForm/RegisterForm";
import { Seo } from "@/components/Shared";

export default function SignUpPage() {
  return (
    <>
    <Seo title="Registrarse"/>
      <JoinLayout>
        <div className={styles.signIn}>
          <h3>Crear Cuenta</h3>
          <RegisterForm />
          {/* FORM */}
          <div className={styles.actions}>
            <Link href="/join/sign-in">Atrás</Link>
          </div>

        </div>
      </JoinLayout>
    </>
  )
}
