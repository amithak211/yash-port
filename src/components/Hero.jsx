import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" data-aos="fade-up">
      {/* 🔹 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/back/217643_tiny.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10" />

      {/* 🔹 Content */}
      <div className="relative z-20 text-center text-white px-4 flex flex-col items-center">
        
        {/* 🖼️ Profile Photo 
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAACUCAMAAAAXgxO4AAAAPFBMVEXy8vKZmZn19fWWlpaTk5P4+Pjr6+uQkJDu7u6fn5+3t7fo6Ojg4OCjo6Ozs7PBwcHa2trKysqsrKzU1NT9NLZCAAAE90lEQVR4nO2c63LjIAyFbQG2wfiC/f7vuiZpmm4TO4BMDp32/NpOZ7bfaIQsCaGq+tOf/vTLRFRVTb+p2f6NhgkXUTM7s2ith8U426kfwq56t9RCiouk0OPaKDTTkehqV1JOC1Hftf0wTF2x6F1vbd9t9L2W9XcJKU2PJnwiquw0yLZt9WTXWjxwX+1ubGnnlPpJyyvuZuzn3P532lgqCJ1oHXZhv1ldT00x5FQZEcjt/UXPhZxSmuvHs3iE3pquAKNTM4Wb+0NysXByasZYbG/0YYaTj1Fu8kmuLdbR1ZTE7b9HPdLm1Ldp3N5bOiC4MokG9+QTzuRbUpLMvZkcF1rIJUSUO7nDmXxhgS8NCJv60AxlRyhfoZXh4pvaFQXOcvHtyw+LK6lfnw+JBQXOiOJXgbgbVlDZJDFFKDuo1K0FgWsuOCa5JcvD9vEQktuS5Z7N1oHAk3PaG/iEqSbWXwsuQa4ysy2OOpzMaAgLh+wPkMR8gKrOMMEFqF4m90OzQ5p5hQQsHydmeihhfTiaWMWyhjWzaGYZ3AB7WZyAiOyrKE5c0cAmuarSLY7rB1VUrY4RV3BNzy7lMuJucUyGVflgyMoOtbWYqEI9s3IT7QQBV+w6ohaQL5BybHBMIXECOKZ0O8PiEHCauW0VVM3JjSq+d4j5BnFr5VqCAjnrw1n7C0OMwYl7OsUIAud2ayUqIeclWb6tArsuZHGLAVZzdqwqX2JyLC/mRSfqfpY7PbEA5/gUo3uInFfxtynJ5Lh2kJdyk01rZ6GuUW4ipVIu34ybChiajOf2vSA8t4qP5kMRg8Hxl1jClDEW3MUaXBYyz0yRcyuoPPxBsdUnOhJ+KvpKBdam/a64ZAs3Q/YgshE3E8CrnyeKSLYELg1/FK3hjztwdc8zUfDxxPXzn4pCe86ylFB4E4UdTzEUkFz9p8DZ/eIM/oPBw57VFAgeFlZkIQntXSrwcBYHTmFztmIpDTywyy+GwsDDb2vRpN8UXHfKIsrku4If64FmJHcV+MUvLh5G3Kpo5KPCR4X3D5GTWA+KmpwcwG9nv0hFTQeLpS+EXO2tbNgjr0sogoh6E31P25oevchBdW5IaI9L7aAfIqJ5jHOTm4RYZpzRVW/SsC/oerSQ/TzeuSXrmlPI8e0tFqLOTpI9aCOlsd37PGb7S9aNcRs+dq1ej66v3uEypDZqM0Qv+NhHF4NxNjM7KZqNvixhOlH+fxvMTLnYqermpU2/SX5B37bL3J3f5rr49ZCL+sa+bD5z7llVzWo0L/gFoUtt5vNWmJFqpkWf69f77PUyNad4O5E14k3UV3S/B4zrMFQ1m2efErFjJNthbdIP6vZ5nKfMB3JPoh2mOW3r3falceMbDuQuutSjq+LRfaL9Ts9+yl4P0ejkBM7YX9BlXFOAuvhyLJdi9q9Rn7a1K4/Cs/a0LWn5JMbQoQXmvpfTFTi1cMKjjbMVtGyIusLsfVGAwak0R/EKuGVkzfnm0+uRC9776Wx6OUFMPXehUR6J5YXJma8H8km/ujsq8Wh6vRqIYq++yqVXT7PZi5jy6XClCfsxVT4dfz2ppLTwf0lzCI7GO9IROHvzVUa1BxvvktfnvkNH74QTHg28T4czOmi4Y+06OX/xVVbtrx9QzOWimSV2nZz9CDmvxG4kb7ibxvJKLDujLmSLLH7u2ttCXWwu/qmv6co/0x9IPUHNVU4AAAAASUVORK5CYII="  // Place your image in public/profile.jpg
          alt="Profile"
          className="w-40 h-40 rounded-full mb-6 border-4 border-indigo-500 shadow-lg"
        />*/}

        <h1 className="text-5xl font-bold text-white dark:text-yellow-300 mb-4">Hi, I'm Basavaraj KL</h1>

        <h2 className="text-2xl text-white dark:text-yellow-300 mb-6">
          <Typewriter
            options={{
              strings: ['Web Developer', 'Java Programmer', 'React Enthusiast'],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded text-white dark:text-yellow-300"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="bg-indigo-600 hover:bg-indigo-700 text-white dark:text-yellow-300 px-6 py-2 rounded"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
