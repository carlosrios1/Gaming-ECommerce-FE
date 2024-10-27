import Link from "next/link";
import { JoinLayout } from "@/layouts";
import styles from './sign-in.module.scss';
import LoginForm from "@/components/Auth/LoginForm/LoginForm";
import { Seo } from "@/components/Shared";

export default function SignInPage() {
  return (
    <>
      <Seo title="Iniciar Sesión"/>
      <JoinLayout>
        <div className={styles.signIn}>
          <h3>Iniciar Sesión</h3>

          {/* LOGIN FORM */}
          <LoginForm />
          <div className={styles.actions}>
            <Link href="/join/sign-up">
              ¿No tienes una cuenta?
            </Link>

          </div>
        </div>
      </JoinLayout>
    </>
  )
}
