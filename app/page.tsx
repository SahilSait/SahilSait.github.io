import { FaGithub, FaLinkedin, FaGoogleDrive } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function Component() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="/interstellar.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 min-h-screen px-6 py-12 max-w-2xl mx-auto text-white">
        <h1 className="text-4xl font-light mb-8">sahil sait</h1>

        <div className="space-y-2 mb-12">
          <p className="flex items-center gap-2">
            <span>🚀</span>
             systems engineer | <a href="https://drive.google.com/file/d/1fBVfJjwYFFw5aK9GeVMwjToBVs1twW_9/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <FaGoogleDrive className="w-5 h-5"/>
            <span>resume</span>
            </a>
          </p>
          <p className="flex items-center gap-2">
            <span>🎓</span>
            grad student at sjsu | current focus on ai/ml
          </p>
          <p className="flex items-center gap-2">
            <span>📍</span>
            san francisco bay area
          </p>
        </div>

        <section className="mb-12">
          <div className="space-y-3">
            <p className="flex items-center gap-2 italic">
              We&apos;ve always defined ourselves by the ability to overcome the impossible.
              And we count these moments, when we dared to aim higher, to break barriers, to reach for the stars, to make the unknown known.
              We count these moments as our proudest achievements.
              But we had lost all that.
              We had just forgotten that
              we are still pioneers,
              we&apos;ve barely begun, 
              our greatest accomplishments cannot be behind us, 
              as our destiny lies above us.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">projects</h2>
          <div className="space-y-3">
            <p className="flex items-center gap-2">
              <span>📜</span>
              blockchain-based certificate verification system:{" "}
              <a href="https://cvs-admin.netlify.app" target="_blank" rel="noopener noreferrer" >link</a>/
              <a href="#" target="_blank" rel="noopener noreferrer" >code</a>
            </p>
            <p className="flex items-center gap-2">
              <span>💸</span>
              tokenize - an erc20 token generator:
              <a href="https://tokenize-sahilsait.netlify.app" target="_blank" rel="noopener noreferrer">link</a>/
              <a href="https://github.com/sahilsait/tokenize" target="_blank" rel="noopener noreferrer">code</a>
            </p>
          </div>
        </section>
        <section className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <a href="https://github.com/sahilsait" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white/80">
              <FaGithub className="w-5 h-5" />
              <span>sahilsait</span>
            </a>
            <a href="https://x.com/sahilsaitn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white/80">
              <FaXTwitter className="w-5 h-5" />
              <span>@sahilsaitn</span>
            </a>
            <a href="https://www.linkedin.com/in/sahilsait/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white/80">
              <FaLinkedin className="w-5 h-5" />
              <span>Sahil Sait Naveed</span>
            </a>
            <a href="mailto:sahilsaitn@gmail.com" className="flex items-center gap-2 hover:text-white/80">
              <IoMdMail className="w-5 h-5" />
              <span>sahilsaitn@gmail.com</span>
            </a>

          </div>
        </section>
      </div>
    </div>
  )
}