import { AddressForm } from "../../AddressForm";
import { BasicModal, Confirm } from "@/components/Shared";
import { Address as AddressCtrl } from "@/api";
import styles from "./Address.module.scss";
import { Button, Icon } from "semantic-ui-react";
import { useState } from "react";

const addressCtrl = new AddressCtrl();

export function Address(props) {
    const { addressId, address, onReload } = props;
    const [showEdit, setShowEdit] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const openCloseEdit = () => setShowEdit((prevState) => !prevState);
    const openCloseConfirm = () => setShowConfirm((prevState) => !prevState);

    const onDelete = async () => {
        try {
            await addressCtrl.delete(addressId);
            onReload();
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <div className={styles.address}>
                <div>
                    <p className={styles.title}>{address.title}: </p>
                    <p className={styles.addressInfo}>
                        {address.name}, {address.address}, {address.state}, {address.city}, {" "}
                        {address.postal_code},
                    </p>
                </div>

                <Confirm
                    open={showConfirm}
                    onCancel={openCloseConfirm}
                    onConfirm={onDelete}
                    content="¿Estás seguro que quieres eliminar la dirección?"
                />

                <div className={styles.actions}>
                    <Button primary icon onClick={openCloseEdit}>
                        <Icon name="pencil" />
                    </Button>

                    <Button primary icon onClick={openCloseConfirm}>
                        <Icon name="trash" />
                    </Button>
                </div>

            </div>

            <BasicModal show={showEdit} onClose={openCloseEdit} title={"Editar Dirección"}>
                <AddressForm onClose={openCloseEdit} onReload={onReload} addressId={addressId} address={address} />
            </BasicModal>
        </>
    )
}
