import { CertifiedCard } from "./CertifiedCard";

export function ProfileIntro({ imageSrc, description }) {
    const Certified = [
        {
            id: 1,
            title: "IBM Certified Data Analyst Professional",
            date: "January 2026",
            image: "/badges/data-analysis-with-python.png",
            credLink: "https://www.credly.com/",
        }

    ];

    return (
        <div className="flex flex-col gap-6">

            {/* ===== Two-column layout ===== */}
            <div className="flex flex-col sm:flex-row 
                      gap-4 sm:gap-6 lg:gap-10 
                      items-start">

                {/* LEFT: Profile image */}
                <img
                    src={imageSrc}
                    alt="Jai Hari Nataraj"
                    className="
                    w-full max-w-300px aspect-square     
                    sm:w-20 sm:h-20
                    lg:w-24 lg:h-24                    
                    object-cover
                    sm:rounded-full        
                    shrink-0
                    mx-auto sm:mx-0"
                    loading="lazy"
                />

                {/* RIGHT: Description + Certified */}
                <div className="flex flex-col gap-6">

                    {/* Description */}
                    <p className="text-sm sm:text-base lg:text-lg text-justify
                        leading-relaxed lg:leading-loose
                        text-gray-800">
                        {description}
                    </p>

                    {/* Certified */}
                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {Certified.map((cert) => (
                            <CertifiedCard
                                key={cert.id}
                                title={cert.title}
                                subtitle={cert.subtitle}
                                date={cert.date}
                                image={cert.image}
                                credLink={cert.credLink}
                            />
                        ))}
                    </div> */}

                </div>
            </div>
        </div>
    );
}
