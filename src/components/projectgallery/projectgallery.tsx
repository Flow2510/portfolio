type ProjectGalleryProps = {
    readonly selectedProject: {
        name: string;
        id: string;
        year: string;
        color: string;
        link: string;
        type: string;
        videos: string[];
        images: string[];
        alts: string[];
        intro: string;
        text: string;
        status: string;
    }
}

export default function ProjectGallery({ selectedProject } : ProjectGalleryProps) {
    return(
        <div className="flex flex-col gap-10 max-w-350 m-auto">
            <div className="w-full aspect-video overflow-hidden">
                <img className="w-full h-full object-cover" src={selectedProject.images[0]} alt="" />
            </div>
            <div className="flex flex-col gap-10 md:flex-row">
                <div className="w-full aspect-video overflow-hidden">
                    <video className="w-full h-full object-cover" src={selectedProject.videos[0]} autoPlay loop muted></video>
                </div>
                <div className="w-full aspect-video overflow-hidden">
                    <video className="w-full h-full object-cover" src={selectedProject.videos[1]} autoPlay loop muted></video>
                </div>
            </div>
            <div className="w-full aspect-video overflow-hidden">
                <img className="w-full h-full object-cover" src={selectedProject.images[1]} alt="" />
            </div>
        </div>
    )
}