type NameProps = {
    name: string
}

const Name = ({name} : NameProps) => {
    return (
        <span className='text-primary text-lg font-semibold'>
            {name}
        </span>
    )
}

export default Name;