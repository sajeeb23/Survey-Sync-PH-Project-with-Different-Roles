const Faq = () => {
    return (
        <div className="my-24 w-11/12 mx-auto">
           <div className="text-center">
                <h1 className="text-4xl font-semibold">FAQ</h1>
                <hr className='my-2 mx-40 opacity-50' />
                <h1 className="text-2xl font-semibold mt-2">Your Questions, Our Answers</h1>
            </div>
            <div className="collapse collapse-plus my-8 bg-sky-500 text-white mt-2">
                <input type="radio" name="survey-accordion" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    How can I participate in a survey?
                </div>
                <div className="collapse-content">
                    <p>To participate in a survey, visit our <span className="link-primary hover:cursor-pointer">Surveys</span> page. Browse through the available surveys and click on the ones you are interested in. Follow the instructions to complete the survey.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-sky-500 text-white mt-2">
                <input type="radio" name="survey-accordion" />
                <div className="collapse-title text-xl font-medium">
                    Are the survey responses anonymous?
                </div>
                <div className="collapse-content">
                    <p>Yes, we prioritize your privacy. Survey responses are kept anonymous unless explicitly stated otherwise. Your personal information is confidential and will not be shared.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-sky-500 text-white mt-2">
                <input type="radio" name="survey-accordion" />
                <div className="collapse-title text-xl font-medium">
                    How often can I participate in surveys?
                </div>
                <div className="collapse-content">
                    <p>You can participate in surveys as often as they become available. Keep an eye on our platform, as new surveys are regularly added for you to contribute your opinions.</p>
                </div>
            </div>
           
        </div>
    );
};

export default Faq;
