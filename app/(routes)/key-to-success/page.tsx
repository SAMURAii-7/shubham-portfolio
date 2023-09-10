type Props = {};

const KeyToSuccess = (props: Props) => {
    return (
        <div className="mt-[30px] flex flex-col justify-center items-center">
            <h1 className="text-2xl font-semibold">
                You have found the key to success!
            </h1>
            <iframe
                className="mt-[30px] border-0"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/XxbJw8PrIkc?si=pGd748EWgJFYmdQ0&amp;start=39"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default KeyToSuccess;
