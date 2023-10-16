import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Spotify Playlist | Shubham Prasad",
};

const SpotifyPlaylist = (props: Props) => {
  return (
    <div className="mt-[25px] flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold">
        cool super secret spotify playlist below 👇
      </h1>
      <iframe
        className="mt-[30px] rounded-[12px] border-0"
        src="https://open.spotify.com/embed/playlist/65pFwoZqdQvyKhYk3pw4e9?utm_source=generator&theme=0"
        width="100%"
        height="510"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyPlaylist;
