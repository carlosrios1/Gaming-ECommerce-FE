import { Game } from "@/components/Game";
import { Seo, Separator } from "@/components/Shared";
import { BasicLayout } from "@/layouts";
import { ENV } from "@/utils";

export default function GamePage(props) {
    const { game } = props;
    const wallpaper = game.attributes.wallpaper;

    const wallpaperUrl = `${ENV.SERVER_HOST}${wallpaper.data.attributes.url}`;

    return (
        <>
            <Seo title={game.attributes.title} description={game.attributes.summary}/>
            <BasicLayout>
                <Game.HeaderWallpaper image={wallpaperUrl} />
                <Game.Panel gameId={game.id} game={game.attributes} />

                <Separator height={50} />

                <Game.Info game={game.attributes} />

                <Separator height={30} />

                <Game.Media video={game.attributes.video} screenshots={game.attributes.screenshots.data} />

                <Separator height={50} />
            </BasicLayout>
        </>
    );
}
