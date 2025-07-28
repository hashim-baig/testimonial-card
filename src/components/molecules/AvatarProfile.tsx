import ProfileInfo from "@/components/molecules/ProfileInfo";
import Image from "next/image";

type AvatarProfileProps = {
    imgUrl: string;
    name: string;
    username: string;
}
const AvatarProfile = ({imgUrl, name, username} : AvatarProfileProps) => {
    return (
        <div className="flex gap-4">
            <Image src={imgUrl} alt={`${name} profile photo`} width={48} height={48} className="w-12 h-auto" />
            <ProfileInfo name={name} username={username}/>
        </div>
    )
}

export default AvatarProfile;