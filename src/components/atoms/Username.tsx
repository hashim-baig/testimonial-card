type UsernameProps = {
    username: string
}

const Username = ({username}: UsernameProps) => {
    return (
        <span className='text-secondary text-sm'>
            {username}
        </span>
    )
}

export default Username;