import Link from "next/link";
import styles from "./GridGames.module.scss";
import { map } from "lodash";
import { Label, WishlistIcon } from "@/components/Shared";
import { fn } from "@/utils";
import { ENV } from "@/utils";

export function GridGames(props) {
    const { wishlist, onReload } = props;
    const enlaceurlServer = `${ENV.SERVER_HOST}`;

    return (
        <div className={styles.gridGames}>
            {map(wishlist, (item) => {
                const game = item.attributes.game.data;
                const cover = game.attributes.cover.data;

                return (
                    <div key={item.id} className={styles.game}>
                        <Link href={`/${game.attributes.slug}`}>
                            <div>
                                <img src={`${enlaceurlServer}${cover.attributes.url}`} alt="imagen" />

                                {game.attributes.discount > 0 && (
                                    <Label.Discount className={styles.discount}>
                                        {`-${game.attributes.discount}%`}
                                    </Label.Discount>
                                )}
                            </div>

                            <div>
                                <span>{game.attributes.title}</span>
                                <span className={styles.price}>
                                    {fn.calcDiscountedPrice(
                                        game.attributes.price,
                                        game.attributes.discount
                                    )}
                                    €
                                </span>
                            </div>
                        </Link>

                        <WishlistIcon
                            gameId={game.id}
                            className={styles.whislistIcon}
                            removeCallback={onReload}
                        />
                    </div>
                );
            })}
        </div>
    );
}