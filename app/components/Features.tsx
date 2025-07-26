import FeatureCard from "@/components/FeatureCard";


const features = [
  {
    tag: "Your Voice",
    heading: "Words Speak Louder Than Actions",
    subheading: "It all starts with your voice. Click on the tags below to see the magic of Whisper AI.",

    photo: "https://www.notion.com/_next/image?url=https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fpublic.notion-static.com%2Ftemplate%2F604dd999-feb8-4625-a120-2011043ffaa5%2F1711142165766%2Fdesktop.jpg&w=3840&q=75",
  },
  {
    tag: "AI Summary",
    heading: "The Gist, Instantly.",
    subheading: "Turn hours of conversation into a short, scannable summary. Our AI identifies the key points so you don't have to.",

    photo: "https://www.notion.com/_next/image?url=https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fpublic.notion-static.com%2Ftemplate%2Fc531d7c4-2999-4885-bbfc-75f0fb5f830c%2Fdesktop.png&w=3840&q=75",
  },
  {
    tag: "Quick Note",
    heading: "From Voice to Note, Instantly.",
    subheading: "Capture fleeting ideas, reminders, and thoughts just by speaking. We'll give you a clean, organized, and searchable note.",

    photo: "https://www.notion.com/_next/image?url=https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fpublic.notion-static.com%2Ftemplate%2Fe1d3b6db-945d-4589-a6cd-8716723f6b16%2F1712278566219%2Fdesktop.jpg&w=3840&q=75",
  },
  {
    tag: "Blog Post",
    heading: "Your First Draft, Done.",
    subheading: "Turn a simple voice memo or a brainstorm session into a well-structured blog post. Overcome writer's block forever.",

    photo: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*M49ti_1iktE-lGI9XKzN1g.png",
  },
  {
    tag: "Email Draft",
    heading: "Draft Emails Without Typing.",
    subheading: "Just speak the key points of your message. We'll format it into a professional email draft, ready to send in seconds.",

    photo: "https://cdn.prod.website-files.com/64edcbee727ea2112b0c00f2/64edcbee727ea2112b0c0692_Template-Follow-Up-For-Freelancers-Notion-min.jpeg",
  },
  {
    tag: "To-Do List",
    heading: "Lists, Made by Listening.",
    subheading: "Automatically create checklists or to-do lists by simply talking. We'll pull out the key items for you.",

    photo: "https://www.notion.com/_next/image?url=https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fpublic.notion-static.com%2Ftemplate%2F6d21be53-04a9-42c6-a452-ab1c1c030e4c%2Fdesktop.png&w=3840&q=75",
  },
];

export default function Features() {
  return (
    <section className="bg-[#f4f4f4]w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center py-24 px-4 sm:px-6 lg:px-8">
        

        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md mb-6">
            <img className="h-4 w-4" src="https://framerusercontent.com/images/7rFCqyElXGwPLAPymO0KdGsetVw.svg" alt="Icon" />
            <span className="text-xs font-semibold tracking-wider">FEATURES</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-black">
            Everything you need.
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-[#898989]">
            Whisper comes loaded with focused features to simplify voice capture, analysis, and transformation into actionable content.
          </p>
        </div>


        <div className="mt-16 w-full">
          <FeatureCard features={features} />
        </div>

      </div>
    </section>
  );
}