type TestimonialTextProps = {
    testimonial: string
}

const TestimonialText = ({testimonial} : TestimonialTextProps) => {
    return (
        <blockquote className="text-base text-secondary">
            {testimonial}
        </blockquote>
    )
}

export default TestimonialText;