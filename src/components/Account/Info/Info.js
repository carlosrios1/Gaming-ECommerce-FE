import { Button, Icon } from "semantic-ui-react";
import styles from "./Info.module.scss";
import { useAuth } from "@/hooks";
import { DateTime } from "luxon";

export function Info() {
    const { user } = useAuth();
    return (
        <div className={styles.info}>
            <Button icon className={styles.user}>
                <Icon name="user outline" />
            </Button>
            <h3 className={styles.username}>{user.username}</h3>
            <h4 className={styles.email}>{user.email}</h4>
            <p className={styles.createdAt}>
                Miembro desde: 
                {" "}
                {DateTime.fromISO(user.createdAt, {locale: 'es'}).toFormat("DDD")}
            </p>
        </div>
    )
}
