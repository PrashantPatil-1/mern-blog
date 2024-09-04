export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Prashant's Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to Prashant's Blog! I'm Prashant Patil, a passionate software developer with expertise in web development, software engineering, and programming languages. This blog is my space to share knowledge, showcase my skills, and discuss the latest in technology.
            </p>

            <p>
              Here, you'll find weekly articles and tutorials that dive deep into topics like React, Spring Boot, Node.js, and other cutting-edge technologies. Whether you're interested in frontend development, backend architecture, or full-stack solutions, there's something here for everyone.
            </p>

            <p>
              I'm committed to continuous learning and always exploring new tools and techniques. This blog is a reflection of my journey as a developer, and I encourage you to join me in this exploration. Feel free to leave comments, ask questions, and engage with the content—let's grow together as a community of tech enthusiasts!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
