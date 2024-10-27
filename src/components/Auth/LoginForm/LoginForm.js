import { useFormik } from "formik";
import { Form, FormButton, FormInput } from "semantic-ui-react";
import { useRouter } from "next/router";
import { Auth } from "@/api";
import { initialValues, validationSchema } from './LoginForm.form';
import { useAuth } from "@/hooks";

const authCtrl = new Auth();

export default function LoginForm() {
    const router = useRouter();
    const { login } = useAuth();
    // .log(useAuth());
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                const response = await authCtrl.login(formValue);
                login(response.jwt)
                // console.log(response);
                // router.push("/")
            } catch (error) {
                // console.log(error);
            }
        }

    })
    return (
        <Form onSubmit={formik.handleSubmit}>
            <FormInput name="identifier" type="text" placeholder="Correo electrónico o nombre de usuario" value={formik.values.identifier} onChange={formik.handleChange} error={formik.errors.identifier} />
            <FormInput name="password" type="password" placeholder="Contraseña" value={formik.values.password} onChange={formik.handleChange} error={formik.errors.password} />

            <FormButton type="submit" fluid loading={formik.isSubmitting}>
                Entrar
            </FormButton>
        </Form>
    )
}
