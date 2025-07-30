import AvatarProfile from "@/components/molecules/AvatarProfile";
import TestimonialText from "@/components/atoms/TestimonialText";

type TestimonialCardProps = {
    imgUrl: string;
    name: string;
    username: string;
    testimonial: string;
}

const TestimonialCard = ({imgUrl, name, username, testimonial} :TestimonialCardProps) => (
    <figure className="bg-white drop-shadow-md w-[340px] h-[233px] rounded-md p-6 font-noto mt-[200px] mb-[335px]">
        <figcaption className="flex flex-col justify-center gap-4">
            <AvatarProfile
                imgUrl={imgUrl}
                name={name}
                username={username}/>

            <TestimonialText testimonial={testimonial} />
        </figcaption>
    </figure>
)

export default TestimonialCard;