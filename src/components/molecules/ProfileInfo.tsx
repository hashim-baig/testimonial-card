import Name from "@/components/atoms/Name"
import Username from "@/components/atoms/Username";

type ProfileInfoProps = {
    name: string,
    username: string,
}
const ProfileInfo = ({name, username} : ProfileInfoProps) => {
    return (
        <div className="flex flex-col justify-center">
            <Name name={name}/>
            <Username username={username} />
        </div>
    )
}

export default ProfileInfo