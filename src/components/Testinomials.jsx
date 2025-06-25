export default function Testinomials() {
    const testimonials = [
        {
            image: "https://randomuser.me/api/portraits/women/65.jpg",
            name: "Aanya Mehta",
            location: "Mumbai",
            title: "Perfect Fit, Fast Delivery!",
            feedback:
                "I ordered a co-ord set and it arrived in just 3 days. The fabric is super soft and fits exactly how I imagined. Definitely buying again!",
        },
        {
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            name: "Rahul Verma",
            location: "Bangalore",
            title: "Great Quality at Great Price",
            feedback:
                "I wasn’t expecting the material to be this good for the price. The t-shirt looks premium and feels comfortable all day.",
        },
        {
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            name: "Sneha Jain",
            location: "Jaipur",
            title: "Stylish and Comfortable!",
            feedback:
                "Got compliments on the dress I wore last weekend! Thank you for such trendy styles. Easy checkout and smooth delivery too.",
        },
    ];

    return (
        <>
            <div className="mt-16">
                <p className="text-2xl md:text-3xl font-medium">Customer Feedback</p>
                <div className="my-6 flex flex-wrap gap-4 h-full">
                    {
                        testimonials.map((e, i) => (
                            <div
                                key={i}
                                className="border border-gray-500/20 h-full flex max-xl:flex-col gap-2 justify-between  rounded-md md:px-4 px-3 py-2 
                                bg-white flex-[1_1_calc(100%-1rem)]  md:flex-[1_1_calc(33.33%-1rem)]"
                            >
                                <img src={e.image} className="w-[100px] h-[100px] rounded-full m-auto" alt="" />
                                <div className="flex flex-col justify-center mt-3" >
                                    <h2 className="font-semi-bold text-lg" > {e.title}</h2>
                                    <p className="text-gray-500/80" >{e.feedback}</p>
                                    <p className=" text-gray-500 font-medium ms-auto mt-3">
                                        — {e.name}, {e.location}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}